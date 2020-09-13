import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';
import { catchError, timeout, map, finalize } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { ToastrManager } from 'ng6-toastr-notifications';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Fileupload } from '../Models/fileupload.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Userr } from 'src/app/Models/userr.model';
import { ProfileComponent } from '../AllComponents/profile/profile.component';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  // currentUser
  private basePath = '/usrsImages';
  AddUrl
  
  constructor(public  afAuth:  AngularFireAuth, private firestore: AngularFirestore,public  router:  Router, public toastr: ToastrManager,private db: AngularFireDatabase,
    private storage: AngularFireStorage) { }
  VerificationLogIn(){
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        // console.log(this.user )
        localStorage.setItem('user', JSON.stringify(this.user));
        // console.log(this.user)
        // console.log(this.user.emailVerified)
        localStorage.setItem('UserLogMail', this.user.email);
        // localStorage.setItem('',this.user.emailVerified);
      } else {
        localStorage.setItem('user', null);
      }
    })
    
  }
  async login(email: string, password: string) {
    var result = await this.afAuth.signInWithEmailAndPassword(email, password).then(res => {

          this.VerificationLogIn()
          this.IsLoggedIn()
      this.toastr.successToastr("LogIn")
      localStorage.setItem('mail', JSON.stringify(res.user.email));
      setTimeout(() => {
        this.router.navigate(['/profile'])
        
      }, 500);
 
    })
    .catch(error => this.toastr.warningToastr(error));
    // this.VerificationLogIn()
    //   this.toastr.successToastr("LogIn")
    //   localStorage.setItem('mail', JSON.stringify(result.user.email));
    
   
    
}
IsLoggedIn(): boolean {
  const  user  =  localStorage.getItem('user')

  if(user!=null){
    return true;
    
  }
  else{
    return false;
  }
}
get isLoggedIn(): boolean {
  const  user  =  localStorage.getItem('user')

  if(user!=null){
    return true;
  }
  else{
    return false;
  }
  
}
async log_out(){
  
  await this.afAuth.signOut();
  localStorage.removeItem('user');
  localStorage.removeItem('mail');
  localStorage.removeItem("UserLogMail")
  localStorage.removeItem("iduser")
  localStorage.removeItem("Nameuser")
  localStorage.removeItem("ProfilePhotoUser")
  localStorage.removeItem("UserPassword")

  this.toastr.successToastr("LogOut")
  setTimeout(() => {
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
    
  }, 500);

  this.router.navigate([''])


 

  // this.router.navigate(['admin/login']);
}
async sendPasswordResetEmail(passwordResetEmail: string) {
  // console.log(this.afAuth.sendPasswordResetEmail(passwordResetEmail))
  return await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
}
async register(email: string, password: string) {
  // var result = await this.afAuth.createUserWithEmailAndPassword(email, password)
  // .then(credential => {
  //   console.log(credential.user)
  // })
  return this.afAuth.createUserWithEmailAndPassword(email, password)
  .then(credential => {
    this.login(email,password)
    console.log(credential.user)
    this.sendEmailVerification();
  })
 
}
async sendEmailVerification() {
  await (await this.afAuth.currentUser).sendEmailVerification()
  // this.router.navigate(['admin/verify-email']);
}
  async updateUserPassword(password) {
  (await this.afAuth.currentUser).updatePassword(password).then( credential =>{
    this.update_Pass(password,localStorage.getItem("iduser"))
    
  }).catch(function(error) {
    alert(error)
  });
}
    Add_InfoUser(SignInMail,SignInpassword,UserName){
      
      console.log(this.AddUrl)
      var body = { 
          "mail":SignInMail,
          "password":SignInpassword,
          "name":UserName,
          "url":this.AddUrl,
          "day1":[],
          "day2":[],
          "day3":[],
          "day4":[],
          "day5":[],
          "day6":[],
          "day7":[],
          "ExereciseSystem":{
            "ExreciseName":"",
            "dataEx":[],
            "id":""
        },
        "percentageForBody":{
          "ReqCalories":0,
          "protein":0,
          "fats":0,
          "carb":0 
        }
      }
      
      
      return this.firestore.collection('Users').add(body);
    }
Add_Img_user(fileUpload: Fileupload): Observable<number> {
  const filePath = `${this.basePath}/${fileUpload.file.name}`;
  const storageRef = this.storage.ref(filePath);
  const uploadTask = this.storage.upload(filePath, fileUpload.file);

  uploadTask.snapshotChanges().pipe(
    finalize(() => {
      storageRef.getDownloadURL().subscribe(downloadURL => {
        this.AddUrl = downloadURL;
        console.log('File available at', downloadURL);
        fileUpload.url = downloadURL;
        fileUpload.name = fileUpload.file.name;
        this.saveFileData(fileUpload);
        
        
      });
    })
  ).subscribe();

  return uploadTask.percentageChanges()

}


private saveFileData(fileUpload: Fileupload) {
  this.db.list(this.basePath).push(fileUpload);
}
get_Users() {
  return this.firestore.collection('Users').snapshotChanges();
}
update_UserName(user,id)
{

  this.firestore.collection('Users').doc(id).update({name: user});
  this.toastr.successToastr("Changed")

  setTimeout(() => {
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
    
  }, 1000);
  
 }
 delete_Img(fileUpload: Fileupload) {
  this.deleteFileDatabase(fileUpload.key)
    .then(() => {
      this.deleteFileStorage(fileUpload.name);
    })
    .catch(error => console.log(error));
}
private deleteFileDatabase(key: string) {
  return this.db.list(this.basePath).remove(key);
}

private deleteFileStorage(name: string) {
  const storageRef = this.storage.ref(this.basePath);
  storageRef.child(name).delete();
}
get_Img(numberItems): AngularFireList<Fileupload> {
  return this.db.list(this.basePath, ref =>
    ref.limitToLast(numberItems));
    
}
update_profilePhoto(id)
{

  this.firestore.collection('Users').doc(id).update({url: this.AddUrl});
  this.toastr.successToastr("Changed")
  setTimeout(() => {
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
    
  }, 1000);

  
 }  
 update_Pass(pass,id)
{

  this.firestore.collection('Users').doc(id).update({password:pass });
  this.toastr.successToastr("Changed")

  setTimeout(() => {
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
    
  }, 1000);
  
 }
 percentageForBody(id,percentageForBody)
{

  this.firestore.collection('Users').doc(id).update({percentageForBody: percentageForBody});
  setTimeout(() => {
    this.router.navigate(['/foods'])
    
  }, 500);

  
 }  


}
