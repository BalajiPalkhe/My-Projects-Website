import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';

  username:string="balaji";
  password:string="balaji";
  log:number=0; //change value to 0 after work done
  s:number=0;  //change value to 0 after work done
  error:string="";
  validate(u:any,p:any)
  {
    if(this.username==u && p==this.password)
    {
        this.log=1;
    }
    else
    {
        this.error="Invalid Crediential!! please enter valid username and password";
    }

  }
  logout(){
    this.log=0;
    this.s=0;
  }
  showString(){
    this.s=1;
  }
  lenp(){
    this.s=2
  }
  eventOpen(){
    this.s=3;
  }

}
