import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  ngOnInit(){}

  constructor(private  authService:  AuthService)
  {

  }
  logout(){
    this.authService.log_out()

  }
}
 