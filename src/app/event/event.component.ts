import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  m:number=0;
  head:string="";
  count:number=0;
  clickO:number=0;
  keytext:string="";
  mouse(){
    this.m=1;
  }
  dmouse(){
    this.m=0;
  }
  keyboard(){
    this.m=2;
  }
  dkeyboard(){
    this.m=0;
  }
  click(){

    this.count++;
  }
  reset(){
    this.count=0;
  }
  clickO1(){
    this.head="Click Event"
    this.clickO=1;
  }
  dblclickO(){
    this.head="Double Click Event"
    this.clickO=2;
    this.count=0;
  }
  mousedown(){
    this.head="Mouse-down Event"
    this.clickO=3;
    this.count=0;
  }
  mouseenter(){
    this.head="Mouse-enter Event"
    this.clickO=4;
    this.count=0;
  }
  mouseleave(){
    this.head="Mouse-leave Event"
    this.clickO=5;
    this.count=0;
  }
  mousemove(){
    this.head="Mouse-move Event"
    this.clickO=6;
    this.count=0;
  }
  keypress(){
    this.head="Keypress Event";
    this.clickO=7;
    this.count=0;
  }
  key(event:any){

    this.keytext=event.target.value;
  }
  resetkey(){
    this.keytext="";
  }
  keydown(){
    this.head="Keydown Event";
    this.clickO=8;
    this.count=0;
  }
  keyup(){
    this.head="Keyup Event";
    this.clickO=9;
    this.count=0;
  }

}
