import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [NgClass],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  openMobileMenenu: boolean = false;
  loginclick:boolean = false;

  constructor(private viewportScroller: ViewportScroller) { }

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
