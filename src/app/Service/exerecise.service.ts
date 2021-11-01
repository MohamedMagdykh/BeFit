import { Injectable } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Fileupload } from '../Models/fileupload.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExereciseService
 {
        AddUrl
        private basePath = '/ExreciseImages';

        constructor(private firestore: AngularFirestore,
          private db: AngularFireDatabase,
          private storage: AngularFireStorage,public toastr: ToastrManager,private router:Router) { }
          get_exerecises() {
            return this.firestore.collection('Exercise').snapshotChanges();
          }
          Add_Exercises(NameEx){

            var body = { 
            
              "ExreciseName":NameEx,
              "dataEx":[]
              
            }
            
            return this.firestore.collection('Exercise').add(body).then(() => {
              this.toastr.successToastr("Changed")
              
              
            })
            .catch(error => console.log(error));
            
          }
          Add_Img_Ex(fileUpload: Fileupload): Observable<number> {
            const filePath = `${this.basePath}/${fileUpload.file.name}`;
            const storageRef = this.storage.ref(filePath);
            const uploadTask = this.storage.upload(filePath, fileUpload.file);
        
            uploadTask.snapshotChanges().pipe(
              finalize(() => {
                storageRef.getDownloadURL().subscribe(downloadURL => {
                  console.log('File available at', downloadURL);
                  fileUpload.url = downloadURL;
        
                localStorage.setItem('photoEx',downloadURL)
                  console.log(this.AddUrl)
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
          AddDataEx(describe,data,id)
      {

        this.firestore.collection('Exercise').doc(id).update({dataEx: {'describe':describe,'data':data}});
        this.toastr.successToastr("Added")

        // setTimeout(() => {
        //   if (!localStorage.getItem('foo')) { 
        //     localStorage.setItem('foo', 'no reload') 
        //     location.reload() 
        //   } else {
        //     localStorage.removeItem('foo') 
        //   }
          
        // }, 1000);
        
      }
      delete_Img(fileUpload: Fileupload)
       {
            this.deleteFileDatabase(fileUpload.key)
              .then(() => {
                this.deleteFileStorage(fileUpload.name);
              })
              .catch(error => console.log(error));
              this.toastr.successToastr("ok")
         }
      private deleteFileDatabase(key: string)
       {
            return this.db.list(this.basePath).remove(key)
            .catch(error => console.log(error));
        }

      private deleteFileStorage(name: string)
       {
            const storageRef = this.storage.ref(this.basePath);
            storageRef.child(name).delete().catch(error => console.log(error));
        
        }

      get_Img(numberItems): AngularFireList<Fileupload>
      {
          return this.db.list(this.basePath, ref =>
            ref.limitToLast(numberItems));
          
        }
        
        
        add_Ex(id,EXSelect)
        {
          console.log(EXSelect)
          
        
        

          this.firestore.collection('Users').doc(id).update({ExereciseSystem:EXSelect}).then(() => 
          {
            this.toastr.successToastr("SYSTEM ADDED")
            this.router.navigate(['/profile/plan'])
            
        
              
            
          })
          .catch(error => console.log(error));
          
        }


       
  }

