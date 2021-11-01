import { Component, ViewChild } from '@angular/core';
import { AuthService } from  'src/app/Service//auth.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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
  CheckLog:boolean
  LoginForm:FormGroup;
  submittedLogin = false;
  //////forgetpass///////
  EmailResetPassword
  ////////////signin/////////
  SignUpForm:FormGroup;
  submittedSignUp = false;

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
   colorspinner
  constructor(private  authService:  AuthService,public toastr: ToastrManager,private spinner: NgxSpinnerService,private formBuilder: FormBuilder){

   

  }
  
  ngOnInit(): void {
 
    if(localStorage.getItem('colorSite'))
    {
      var bodyStyles =  document.body.style;
      bodyStyles.setProperty('--maincolor', localStorage.getItem('colorSite'));
      this.colorspinner = localStorage.getItem('colorSite')
    }
    else
    {
      var bodyStyles =  document.body.style;
      bodyStyles.setProperty('--maincolor', 'rgb(227, 108, 81)');
      this.colorspinner = 'rgb(227, 108, 81)'
    }
   
    this.spinner.show();

    this.LoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  });
    

  this.SignUpForm = this.formBuilder.group(
    {
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.MustMatch('password', 'confirmPassword')
  }
);
    
   
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
  
    // convenience getter for easy access to form fields
    get f_LogIn() { return this.LoginForm.controls; }
  LogIn(){
    this.submittedLogin = true;

    // stop here if form is invalid
        if (this.LoginForm.invalid) {
            return;
        }
       
      this.authService.login(this.LoginForm.get('email').value,this.LoginForm.get('password').value) 
  }
  onResetLogInForm() {
    this.submittedLogin = false;
    this.LoginForm.reset();
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





  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
onResetSignUpForm() {
  this.submittedSignUp = false;
  this.SignUpForm.reset();
  this.whenClosesignUp()
}

   // convenience getter for easy access to form fields
   get f_SignUp() { return this.SignUpForm.controls; }
  signUp()
  {
    this.submittedSignUp = true;
         if(this.percentage!=100 && this.load==true)
         { this.toastr.warningToastr("Upload Photo")}
         if(this.percentage==100 && this.load==true)
         { this.toastr.warningToastr("Please Wait")}
    // stop here if form is invalid
        if (this.SignUpForm.invalid || this.percentage!=100 || this.load==true) {
            return;
        }
        console.log("2")
        this.authService.register(this.SignUpForm.get('email').value,this.SignUpForm.get('password').value).then(()=> {
          console.log("3")
        this.InfoUser(this.SignUpForm.get('email').value,this.SignUpForm.get('password').value,this.SignUpForm.get('userName').value)
        this.toastr.successToastr("User Created")

      }).catch(function(error) {
        alert(error)
      });

  }
  InfoUser(SignInMail,SignInpassword,UserName)
  {this.authService.Add_InfoUser(SignInMail,SignInpassword,UserName)}
  
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
 
  whenOpensignUp()
{
    document.body.style.overflowY = "hidden"
} 
whenClosesignUp()
{
    document.body.style.overflowY = "visible"
}

}
