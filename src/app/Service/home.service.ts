import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private firestore: AngularFirestore,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage,public toastr: ToastrManager,private router:Router) { }
  Add_comments(name,photo,comment,date){
 

    var body = { 
         
      "name":name,
      "photo":photo,
      "comment":comment,
      "date":date,
      "mail":localStorage.getItem("UserLogMail"),
      "reply":[]
      
     }
     console.log(body)
     return this.firestore.collection("comments").add(body);
     
    
     
 
  }



  get_Comments()
   {
      
        return this.firestore.collection('comments',ref=>ref.orderBy('date')).snapshotChanges();
      
     
   }
   Delete_comment(commentsid: string){
    this.firestore.doc('comments/' + commentsid).delete();
  }
  add_replay(id,reply,name,photo,date,datacomments)
  {
    var body = { 
         
      "name":name,
      "photo":photo,
      "reply":reply,
      "mail":localStorage.getItem("UserLogMail"),
      "date":date,
      "date2":{}
      
     } 
     
     
      var allreplyarray=[]
      allreplyarray=datacomments

       
    
      for (let i = 0; i < allreplyarray.length; i++) {
        
        
        
        if(id==allreplyarray[i].id)
        {
         allreplyarray[i].reply.push(body)
        //  console.log(allreplyarray[i].reply)
   
   
   
       this.firestore.collection('comments/').doc(id).update({reply:allreplyarray[i].reply}).then(() => 
       { 
         
       })
       .catch(error => this.toastr.warningToastr(error));
       
     }
        
      }

}
}
