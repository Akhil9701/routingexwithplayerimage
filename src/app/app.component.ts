
import { Component, DoCheck } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  localval:Observable<any>
  constructor(){

  }
  private checkLogin():Observable<any>{
  return of( localStorage.getItem('userid'))
  }
  logoutbtn(){
    localStorage.removeItem('userid')
    
  }
  ngDoCheck(){
    this.checkLogin().subscribe(data=>{
      this.localval=data
    })
  }
}
