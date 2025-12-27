import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ResponseModel } from '../model/response.model';



@Injectable({
  providedIn: 'root',
})
export class HttpService {
    public apiUrl: string = "";
    public reportApiUrl: string = '';
    public requestObj: any = {};
    constructor(
        private readonly http: HttpClient,
        // private readonly spinner: SpinnerService,
        private readonly router: Router,
        // private readonly toasterService: ToastrService,
        // private readonly accessService: AccessService,
        // private readonly broadcaster: Broadcaster
    ) { 
    }

    public get(url: string): Observable<any> {
        // if (scopes?.length) {
        //     const hasScope = scopes.some(a => this.accessService[a])
        //     if (!hasScope) {
        //         console.warn(`User dose not have scopes to access ${url} \n Required scopes are ${scopes}`)
        //         return of()
        //     }
        // }
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        try {
            return this.http.get<ResponseModel>(this.apiUrl + url, httpOptions).pipe(
                map((response: ResponseModel) => {
                    if (response.status == 200) {
                       
                        return response.data;
                    }
                    else if (response.status == 400) {
                        // this.toasterService.warning(response.data);
                    }
                    else if (response.status == 429) {
                        // this.toasterService.warning("Too Many Requests");
                    }
                    else if (response.status == 401) {
                        this.handleUnauthorizedError(response.status);
                    }
                    else {
                       
                        // this.broadcaster.broadcast('logout',false);
                        this.router.navigateByUrl('login');
                        return null;
                    }
                }),
                catchError(async (error) => this.handleErrors(error))
            );
        }
        catch (error: any) {
            this.handleErrors(error);
            return of(null);
        }
    }

    public post(url: string, data?: any): Observable<any> {
    
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        try {
            return this.http.post<ResponseModel>(this.apiUrl + url, data, httpOptions).pipe(
                map((response: ResponseModel) => {
                    // this.spinner.hide();
                    if (response.status == 200 || response.Status == 200) {
                        
                        return response.data;
                    }
                    else if (response.status == 400) {
                        // this.toasterService.warning(response.data);
                    }
                    else if (response.status == 429) {
                        // this.toasterService.warning("Too Many Requests");
                    }
                    else if (response.status == 401) {
                        // this.handleUnauthorizedError(response.status);
                    }
                    else if (response.status == 500 || response.errorId != '' || (response.exceptions != '' && response.exceptions != null)) {
                        // this.toasterService.error("Something went wrong.");
                        // this.spinner.hide();
                    }
                    else {
                        
                        return response;
                    }
                }),
                catchError(async (error) => this.handleErrors(error, url))
            );
        }
        catch (error: any) {
            this.handleErrors(error, url);
            return of(error);
        }
    }
    
     private handleErrors(error: HttpErrorResponse, url: string = '') {
        // this.spinner.hide();
        if (error.status == 400) {
            // this.toasterService.warning(error.message);
        }
        else if (error.status == 429) {
            // this.toasterService.warning("Too Many Requests");
        }
        else if (error.status == 401) {
            return null;
        }
        else {
            // this.toasterService.error("Something went wrong.")
        }

        return null;
    };

    private handleUnauthorizedError(error: number): Observable<any> {
        // this.spinner.hide();
        if (error == 401) {
            // this.toasterService.warning("Your session is expired.");
            // this.broadcaster.broadcast('logout',false);
            localStorage.removeItem("User");
            localStorage.removeItem("UserName");
            this.router.navigateByUrl('login');
            // this.broadcaster.broadcast('hideMFABox');
            // this.broadcaster.broadcast('stopCacheInterval');
            return of(error);
        }
        // if (error == 400) {
        //     this.toasterService.warning("Bad request response!");
        //     this.broadcaster.broadcast('logout',false);
        //     this.router.navigateByUrl('login');
        //     this.broadcaster.broadcast('hideMFABox');
        //     this.broadcaster.broadcast('stopCacheInterval');
        //     return of(error);
        // }
        else {
            // this.toasterService.warning("Something went wrong.");
            return of(error);
        }
    }

}
