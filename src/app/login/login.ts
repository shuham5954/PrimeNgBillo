import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [NgClass ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  openMobileMenenu: boolean = false;
  loginclick:boolean = false;

  constructor(private router: Router , private viewportScroller: ViewportScroller) { }

  loginClick(){
      this.router.navigate(['/admin']);
  }

  toggleMenu() {
    this.openMobileMenenu = !this.openMobileMenenu;
  }

  scrollTo(sectionId: string) {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  openModal(modelName:string){
    if(modelName == "loginModal"){
      this.loginclick = true;
    }
  }

  closeModel(modelName:string){
    if (modelName == "loginModal") {
      this.loginclick = false;
    }
  }

}
