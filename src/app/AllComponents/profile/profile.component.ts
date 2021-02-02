import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { Userr} from 'src/app/Models/userr.model';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Fileupload } from 'src/app/Models/fileupload.model';
import { map } from 'rxjs/operators';
import { when } from 'jquery';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  DataUserProfile
  Username
  UserUrl
  DataUsers
  mail
  typeUser
  ChangeUserName
  selectedFiles: FileList;
  percentage: number;
  currentFileUpload: Fileupload;
  fileUploads: any[];
  public load = true
  /////////////////////////changepass/////////////////////
  oldpass
  newpass
  renewpass
  /////////////////////////
  day1 = []
  day2 = []
  day3 = []
  day4 = []
  day5 = []
  day6 = []
  day7 = []
  ///////////////////////
  ExSystem=[]
  ExSystemName
  // ExSystemDay=[]
  ExSystemaData=[]
  NameDayExSystemaData
  TypeUser = localStorage.getItem("typeuser")

  



  constructor(private  authService:  AuthService,public toastr: ToastrManager,private router:Router,private spinner: NgxSpinnerService) { 
    
  }

  ngOnInit(): void {
  this.spinner.show();
  document.getElementById('footer').style.marginTop = "0%"
  
  

    
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
    this.GetUsers()
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
   
    

    
    
  }
  //  test(){
  //    this.authService.updateUserPassword("555555")
     
  //  }
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
 
         this.DataUserProfile = []
        //  console.log(this.DataUsers)
        
         for (let i = 0; i < this.DataUsers.length; i++) 
         {
   
           if (this.DataUsers[i].mail == localStorage.getItem("UserLogMail"))
           {
            //  console.log(this.DataUsers[i])
             this.Username = this.DataUsers[i].name
             this.UserUrl = this.DataUsers[i].url
             this.mail= this.DataUsers[i].mail
             this.typeUser=this.DataUsers[i].type
             this.day1 = this.DataUsers[i].day1
             this.day2 = this.DataUsers[i].day2
             this.day3 = this.DataUsers[i].day3
             this.day4 = this.DataUsers[i].day4
             this.day5 = this.DataUsers[i].day5
             this.day6 = this.DataUsers[i].day6
             this.day7 = this.DataUsers[i].day7
             if(this.DataUsers[i].ExereciseSystem.dataEx.length != 0){
             this.ExSystem = this.DataUsers[i].ExereciseSystem.dataEx.data
             this.ExSystemName = this.DataUsers[i].ExereciseSystem.ExreciseName
            }

           
             localStorage.setItem("iduser",this.DataUsers[i].id)
             localStorage.setItem("Nameuser",this.DataUsers[i].name)
             localStorage.setItem("ProfilePhotoUser",this.DataUsers[i].url)
            //  console.log(this.DataUsers[i].url)
             localStorage.setItem("UserPassword",this.DataUsers[i].password)
             localStorage.setItem("typeuser",this.DataUsers[i].type)
      
           }
           
         }
       
        
         
       },
       err=>
       {
         this.toastr.errorToastr(err.message)
       })
   }
   updateUserName(){
     this.authService.update_UserName(this.ChangeUserName, localStorage.getItem("iduser"))
     
   }

  GetImage(){
    this.authService.get_Img(100).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
      // console.log(fileUploads)
      
    
      
    });
    
    // console.log("1")
  
  }

  DeleteProfileImg() {
    // console.log(this.fileUploads)
   
    
    for (let i = 0; i < this.fileUploads.length; i++) {
      // console.log(this.fileUploads[i].url)
      if(this.fileUploads[i].url==localStorage.getItem("ProfilePhotoUser") ){
        // console.log(this.fileUploads[i])
        this.DeleteImg(this.fileUploads[i])
      }
      
    }
    
    // if (!localStorage.getItem('foo')) { 
    //   localStorage.setItem('foo', 'no reload') 
    //   location.reload() 
    // } else {
    //   localStorage.removeItem('foo') 
    // }
    // console.log("2")
  
  }
  DeleteImg(fileUpload) {
    this.authService.delete_Img(fileUpload);
    this.AddProfileImg()
    // console.log("3")
  }
  SelectImg(event) {
    this.selectedFiles = event.target.files;
  }
   AddProfileImg(){
    const file = this.selectedFiles.item(0);
  this.selectedFiles = undefined;
  this.currentFileUpload = new Fileupload(file);
  
  
 this.authService.Add_Img_user(this.currentFileUpload).subscribe(
    percentage => {
      this.percentage = Math.round(percentage);
      if(percentage==100){
        this.wiating()
      }
      

    },
    error => {
      console.log(error);
    }
    
    
  );
  
  // console.log("4")
  }
   updateProfilePhoto(){
    
    this.authService.update_profilePhoto(localStorage.getItem("iduser"))

 

  }
  
// f1().then(res => f2());
wiating(){
  setTimeout(() => {
    this.load = false
    
  }, 15000); 
}
chanepass(){
  if(this.oldpass == localStorage.getItem("UserPassword") ){
    if(this.newpass == this.renewpass){
      this.authService.updateUserPassword(this.newpass)
      

      
     
    }
    else{
      this.toastr.warningToastr("New password Not Equal Re-New Password ")
    }
  }
  else
  {
    this.toastr.warningToastr("OldPassword Not Correct")


  }
 
}
AddAnotherDay()
{
  this.router.navigate(["/foods"])
}
ShowDataEx(i)

{
  this.ExSystemaData=this.ExSystem[i].data
  this.NameDayExSystemaData=this.ExSystem[i].nameDay


}
createplan(){
  this.router.navigate(["/calories"])
}


}
 