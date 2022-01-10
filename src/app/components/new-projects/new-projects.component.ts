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

  loading1 = false;
  loading2 = false;
  loading3 = false;
  loading4 = false;
  loading5 = false;

  loadingA = false;
  loadingR = false;

  constructor() { }

  ngOnInit(): void {
  }


  seeProject1(): void {
    this.loading1 = true;
    setTimeout(() =>{
      this.loading1 = false;
      this.div1 = true;
    this.div2 = false;
    this.div3 = false;
    this.div4 = false;
    this.div5 = false;
    },2000);
    
  }

  seeProject2(): void {
    this.loading2 = true;
    setTimeout(() =>{
      this.loading2 = false;
      this.div2 = true;
      this.div1 = false;
      this.div3 = false;
      this.div4 = false;
      this.div5 = false;

    },2000);
   
  }

  seeProject3(): void {
    this.loading3 = true;
    setTimeout(() =>{
      this.loading3 = false;
      this.div3 = true;
      this.div1 = false;
      this.div2 = false;
      this.div4 = false;
      this.div5 = false;
    },2000);
   
  }

  seeProject4(): void {
    this.loading4 = true;
    setTimeout(() =>{
      this.loading4 = false;
      this.div4 = true;
      this.div1 = false;
      this.div2 = false;
      this.div3 = false;
      this.div5 = false;
    },2000);
   
  }

  seeProject5(): void {
    this.loading5 = true;
    setTimeout(() =>{
      this.loading5 = false;
      this.div5 = true;
      this.div1 = false;
      this.div2 = false;
      this.div3 = false;
      this.div4 = false;
    },2000);
   
  }

  acceptProject1():void{
    this.loadingA = true;
    setTimeout(() =>{
      this.loadingA = false;
      this.btn1 = false;
      this.div1 = false;
    },2000);
  }

  acceptProject2():void{
    this.loadingA = true;
    setTimeout(() =>{
      this.loadingA = false;
      this.btn2 = false;
      this.div2 = false;
    },2000);
    
  }

  acceptProject3():void{
    this.loadingA = true;
    setTimeout(() =>{
      this.loadingA = false;
      this.btn3 = false;
      this.div3 = false;
    },2000);
   
  }

  acceptProject4():void{
    this.loadingA = true;
    setTimeout(() =>{
      this.loadingA = false;
      this.btn4 = false;
      this.div4 = false;
    },2000);
   
  }

  acceptProject5():void{
    this.loadingA = true;
    setTimeout(() =>{
      this.loadingA = false;
      this.btn5 = false;
      this.div5 = false;
    },2000);
   
  }

  rejectProject1():void{
    this.loadingA = true;
    setTimeout(() =>{
      this.loadingR = false;
      this.btn1 = false;
      this.div1 = false;
    },2000);
  }

  rejectProject2():void{
    this.loadingR = true;
    setTimeout(() =>{
      this.loadingR = false;
      this.btn2 = false;
      this.div2 = false;
    },2000);
    
  }

  rejectProject3():void{
    this.loadingR = true;
    setTimeout(() =>{
      this.loadingR = false;
      this.btn3 = false;
      this.div3 = false;
    },2000);
   
  }

  rejectProject4():void{
    this.loadingR = true;
    setTimeout(() =>{
      this.loadingR = false;
      this.btn4 = false;
      this.div4 = false;
    },2000);
   
  }

  rejectProject5():void{
    this.loadingR = true;
    setTimeout(() =>{
      this.loadingR = false;
      this.btn5 = false;
      this.div5 = false;
    },2000);
   
  }

}
