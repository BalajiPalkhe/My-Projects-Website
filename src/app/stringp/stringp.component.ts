import { R3SelectorScopeMode } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stringp',
  templateUrl: './stringp.component.html',
  styleUrls: ['./stringp.component.css']
})
export class StringpComponent {

  input:string="";
  s:number=0;

  s2:string="";
  result:string="Your output will be shown here";
  lengthOf(){
    this.s=0;
    this.result="Length of String is "+this.input.length;
  }
  second(){

    this.s=1;
  }
  checkEquality(){

    if(this.input==this.s2)
    {
      this.result="Both String are Equal"
    }
    else
    {
      this.result="Both Strings are not equal"
    }

  }

  // index:number=0;
  indexm(){
    this.s=2;
  }
  indexOf(){
    this.result="Index of '"+this.s2+"' is "+this.input.indexOf(this.s2);

  }

 // index:number=0;
  indexm1(){
    this.s=3;
  }
  lastIndexOf(){
    this.result="Last Index of '"+this.s2+"' is "+this.input.lastIndexOf(this.s2);

  }

  max1:number=0;
  char:string="";
  maxF(){
    
    let s1: string = this.input;
    let max: number = 0;
    let index: number = 0;

    for (let i: number = 0; i < s1.length; i++) {
      let count: number = 0;
      for (let j: number = i; j < s1.length; j++) {
        if (s1[i] == s1[j]) count++;
      }
      if (count > max) {
        max = count;
        index = i;
      }
      this.max1 = max;
      this.char = s1[index];
    }
    this.result="Maximum Frequent character is '"+this.char+"' and frequency is "+this.max1;

  }

  upperCase(){
    this.result="'"+this.input+"' is converted to UpperCase : "+this.input.toUpperCase();
  }
  lowerCase(){
    this.result="'"+this.input+"' is converted to LowerCase : "+this.input.toLowerCase();
  }
}
