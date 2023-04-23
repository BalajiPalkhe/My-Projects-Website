import { Component } from '@angular/core';

@Component({
  selector: 'app-lengthp',
  templateUrl: './lengthp.component.html',
  styleUrls: ['./lengthp.component.css']
})
export class LengthpComponent {


  val1:number=1;
  val2:number=0;
  desc:string="";

  con:number=0;
  mmtomcon(){
    this.val2=this.val1/1000;
   
  }

  mmtocmcon(){

    this.val2=this.val1/10;
  }

  mmtokmcon(){
    this.val2=this.val1/1000000;
  }
  cmtommcon(){
    this.val2=this.val1*10;

  }
  cmtokmcon(){
    this.val2=this.val1/100000;

  }
  cmtomcon(){
    this.val2=this.val1/100;

    
  }
  mtommcon(){
    this.val2=this.val1*1000;


  }

  mtocmcon(){
    this.val2=this.val1*100;

  }
  mtokmcon(){
    this.val2=this.val1/1000;


  }
  kmtommcon(){
    this.val2=this.val1*1000000;

  }

  kmtomcon(){
    this.val2=this.val1*1000;

  }
  kmtocmcon(){
    this.val2=this.val1*100000;

  }

  col2:number=0;
  head:string="";
  h1:string="";
  h2:string="";
  mmtom(){
   // this.val2=this.val1;
   this.con=1;
    this.col2=1;
    this.head="Millimeter to Meter";
    this.h1="Millimeter";
    this.h2="Meter";
    this.desc="1 Millimeter is equal to 0.001 Meter";
  }
  mmtocm(){

    this.con=2;
    this.col2=1;
    this.head="Millimeter to Centimeter";
    this.h1="Millimeter";
    this.h2="Centimeter";
    this.desc="1 Millimeter is equal to 0.1 Centimeter";
  }
  mmtokm(){
    this.con=3;
    this.col2=1;
    this.head="Millimeter to Kilometer";
    this.h1="Millimeter";
    this.h2="Kilometer";
    this.desc="1 Millimeter is equal to 0.000001 Kilometer";
  }

  cmtomm(){
    this.con=4;
    this.col2=1;
    this.head="Centimeter to Millieter";
    this.h1="Centimeter";
    this.h2="Millimeter";
    this.desc="1 Centimeter is equal to 10 Millimeter";
  }

  cmtokm(){
    this.con=5;
    this.col2=1;
    this.head="Centimeter to Kilometer";
    this.h1="Centimeter";
    this.h2="Kilometer";
    this.desc="1 Centimeter is equal to 0.00001 Kilometer";
  }
  cmtom(){
    this.con=6;
    this.col2=1;
    this.head="Centimeter to Meter";
    this.h1="Centimeter";
    this.h2="Meter";
    this.desc="1 Centimeter is equal to 0.01 Meter";
  }
  
  mtomm(){
    this.con=7;
    this.col2=1;
    this.head="Meter to Millimeter";
    this.h1="Meter";
    this.h2="Millimeter";
    this.desc="1 Meter is equal to 1000 Millimeter";
  }
  mtocm(){
    this.con=8
    this.col2=1;
    this.head="Meter to Centimeter";
    this.h1="Meter";
    this.h2="Centimeter";
    this.desc="1 Meter is equal to 100 Centimeter";
  }
  mtokm(){
    this.con=9;
    this.col2=1;
    this.head="Meter to Kilometer";
    this.h1="Meter";
    this.h2="Kilometer";
    this.desc="1 Meter is equal to 0.001 Kilometer";
  }

  kmtomm(){
    this.con=10;
    this.col2=1;
    this.head="Kilometer to Millimeter";
    this.h1="Kilometer";
    this.h2="Millimeter";
    this.desc="1 Kilometer is equal to 1000000 Millimeter";
  }
  kmtom(){
    this.con=11;
    this.col2=1;
    this.head="Kilometer to Meter";
    this.h1="Kilometer";
    this.h2="Meter";
    this.desc="1 Kilometer is equal to 1000 Meter";
  }
  kmtocm(){
    this.con=12;
    this.col2=1;
    this.head="Kilometer to Centimeter";
    this.h1="Kilometer";
    this.h2="Centimeter";
    this.desc="1 Kilometer is equal to 100000 Centimeter";
  }


}
