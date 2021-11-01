import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  ngOnInit()
  {
    document.getElementById('footer').style.width= "83.333333%"
    document.getElementById('footer').style.marginLeft= "16.666667%"
  }

  constructor(private  authService:  AuthService)
  {

  }
  logout(){
    this.authService.log_out()

  }
}
 