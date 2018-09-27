import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlayerService } from '../services/playerservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 userid:string="";
 password:string="";
  constructor(private ps:PlayerService,private rt:Router) { }

  btnLoginClick(u,p) {

    this.ps.CheckLogin(u, p).subscribe((data) => {
        if (data.length > 0) {
            localStorage.setItem("userid", u)
            this.rt.navigate(['home'])
        }
        else {
            alert('Invalid User...')
        }
    })
}

ngOnInit() {
}

}