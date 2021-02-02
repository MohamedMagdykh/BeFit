import { Component, ViewChild } from '@angular/core';
import { AuthService } from  'src/app/Service//auth.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Fileupload } from './Models/fileupload.model';
import { Userr } from 'src/app/Models/userr.model';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('LoginModel') LoginModel: any;
  title = 'Be-Fit';
  isActive = true
  //////login//////
  email 
  pass 
  CheckLog:boolean
  heroForm
  //////forgetpass///////
  EmailResetPassword
  ////////////signin/////////
  SignInMail
  SignInpassword
  UserName
  RePassword
  
   /////UploadFoodImg/////
   selectedFiles: FileList;
   percentage: number;
   currentFileUpload: Fileupload;
   /////////GetUsers/////////////
   DataUsers = []
  //  UserLogMail 
   DataUserlog =[]
   Username
   UserUrl
   public load = true

  constructor(private  authService:  AuthService,public toastr: ToastrManager,private spinner: NgxSpinnerService){

   

  }
  ngOnInit(): void {
    this.spinner.show();

    
    
    this.heroForm = new FormGroup({
      'E-mail': new FormControl(this.email, [
        Validators.required,
        Validators.email,

      ]),
      'Password': new FormControl(this.pass,[
        Validators.required,
        Validators.minLength(6),
      ]),
      'SignInMail': new FormControl(this.SignInMail, [
        Validators.required,
        Validators.email,
      ]),
      'SignInpassword': new FormControl(this.SignInpassword, [
        Validators.required,
        Validators.minLength(6),
      ]),
      'RePassword': new FormControl(this.RePassword, [
        Validators.required,
        Validators.minLength(6),
      ]),
      'UserName': new FormControl(this.UserName, [
        Validators.required,
      ]),
      'mailConfirm': new FormControl(this.EmailResetPassword, [
        Validators.required,
        Validators.email,
      ]),

      
      
    });
    
   
    window.addEventListener('scroll', function() 
    {
       
       if(window.pageYOffset>= 401 ){
         document.getElementById('ScrollUp').style.display = "block"
       }
       if(window.pageYOffset<= 400  )
       {
         document.getElementById('ScrollUp').style.display = "none"
       }
      

     });
     this.CheckLog = this.authService.isLoggedIn
     this.GetUsers()
     if (!this.CheckLog)
     setTimeout(() => {
      console.log(document.getElementById("logshow"))
      document.getElementById("logshow").click();     }, 500);

     setTimeout(() => {
      this.spinner.hide();
     }, 2000);


  }
  ScrollUp()
  {
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
      
  }
  
    
  toggle(): boolean {
    return this.isActive = !this.isActive;
  }
  
  ChangeColorSite(colorSelect){
    
    var bodyStyles =  document.body.style;
    bodyStyles.setProperty('--maincolor', colorSelect);
   
  }
  logout(){
    this.authService.log_out()
    this.UserUrl =null
    

  }
  
  LogIn(){
    

        this.authService.login(this.email,this.pass) 
        

    //     .catch((error) => {
    //       console.log(document.getElementById("maillogin"))
          
    //   if(error.code){
    //     this.toastr.warningToastr(error.message)
    //   }

    // });
    
    

 

  }

  send_Password_ResetEmail(){
    // this.EmailResetPassword = localStorage.getItem("mail")
    // console.log(this.EmailResetPassword)
    this.authService.sendPasswordResetEmail(this.EmailResetPassword)
    .catch((error) => {
      if(error.code){
       this.toastr.warningToastr(error.message)
       
     }
   });


  }
  signin(){
    if(this.SignInpassword==this.RePassword){
    
    this.authService.register(this.SignInMail,this.SignInpassword).then(()=> {
      
     
      this.InfoUser()
      this.toastr.successToastr("User Created")
     
    
    }).catch(function(error) {
      alert(error)
    });
  
  }
  else{
    this.toastr.errorToastr("the two password not equal")

  }
  


  }
  InfoUser(){
    this.authService.Add_InfoUser(this.SignInMail,this.SignInpassword,this.UserName)
  }
  SelectImg(event) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles)
  }
  
  AddImgUser() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    this.currentFileUpload = new Fileupload(file);
    
    
  // console.log(this.currentFileUpload.url)
    
    this.authService.Add_Img_user(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
        if(percentage==100){
          this.wiating()
        }
  
      },
      error => {
        console.log(error.message);
      }
    );
    
  }
  GetUsers()
  {
    this.authService.get_Users().subscribe(res=>
      {
        this.DataUsers = res.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as Userr
          } 
          
  
    
        })
        // console.log(this.DataUsers)
        // console.log(this.UserLogMail)
        // this.GetImage()
        this.DataUserlog = []
       
        for (let i = 0; i < this.DataUsers.length; i++) 
        {
  
          if (this.DataUsers[i].mail == localStorage.getItem("UserLogMail"))
          {
            
            this.Username = this.DataUsers[i].name
            this.UserUrl = this.DataUsers[i].url

            // console.log(this.UserUrl)
            // console.log(this.DataUsers[i].name)
          }
          
        }
      
       
        
      },
      err=>
      {
        this.toastr.errorToastr(err.message)
      })
  }
  wiating(){
    setTimeout(() => {
      this.load = false
      
    }, 10000); 
  }
 


}
