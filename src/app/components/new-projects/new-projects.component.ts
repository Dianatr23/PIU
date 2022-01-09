import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-new-projects',
  templateUrl: './new-projects.component.html',
  styleUrls: ['./new-projects.component.scss']
})
export class NewProjectsComponent implements OnInit {

  div1 = false;
  div2 = false;
  div3 = false;
  div4 = false;
  div5 = false;
  btn1 = true;
  btn2 = true;
  btn3 = true;
  btn4 = true;
  btn5 = true;
  div_button = true;
  constructor() { }

  ngOnInit(): void {
  }


  seeProject1(): void {
    this.div1 = true;
    this.div2 = false;
    this.div3 = false;
    this.div4 = false;
    this.div5 = false;
  }

  seeProject2(): void {
    this.div2 = true;
    this.div1 = false;
    this.div3 = false;
    this.div4 = false;
    this.div5 = false;
  }

  seeProject3(): void {
    this.div3 = true;
    this.div1 = false;
    this.div2 = false;
    this.div4 = false;
    this.div5 = false;
  }

  seeProject4(): void {
    this.div4 = true;
    this.div1 = false;
    this.div2 = false;
    this.div3 = false;
    this.div5 = false;
  }

  seeProject5(): void {
    this.div5 = true;
    this.div1 = false;
    this.div2 = false;
    this.div3 = false;
    this.div4 = false;
  }

  acceptProject1():void{
      this.btn1 = false;
      this.div1 = false;
  }

  acceptProject2():void{
    this.btn2 = false;
    this.div2 = false;
  }

  acceptProject3():void{
    this.btn3 = false;
    this.div3 = false;
  }

  acceptProject4():void{
    this.btn4 = false;
    this.div4 = false;
  }

  acceptProject5():void{
    this.btn5 = false;
    this.div5 = false;
  }

}
