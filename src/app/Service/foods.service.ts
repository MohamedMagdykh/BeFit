import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Foods } from 'src/app/Models/foods.model';
import { Observable } from 'rxjs';
import { finalize, last, first } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { Fileupload } from 'src/app/Models/fileupload.model';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class foodsService {
AddUrl
  private basePath = '/FoodsImages';
  constructor(private firestore: AngularFirestore,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage,public toastr: ToastrManager,private router:Router) { }
  get_Foods() {
    
  
   
      // return this.firestore.collection('policies',ref => ref
      // .limit(parseInt(pageSize))
      // .orderBy('NameFoods')).snapshotChanges();

      return this.firestore.collection('policies').snapshotChanges();


    
     
}

Add_Foods(Namefoods,calories,Protein,Carbs,Fat,typefoods){
  console.log(this.AddUrl)
  let URL
  if(this.AddUrl == null || this.AddUrl == undefined ){
    URL = localStorage.getItem("urlPhotoFood")
    // console.log("urlPhotoFood")
  }
  else{
    URL = this.AddUrl
    console.log("this.AddUrl")
  }
  console.log(URL)
  var body = { 
       
    "NameFoods":Namefoods,
    "calories":calories,
    "Protein":Protein,
    "Carbs": Carbs,
    "Fat": Fat,
    "TypeFood":typefoods,
    "url":URL
   }
   this.AddUrl = null
   
  return this.firestore.collection('policies').add(body);
}
// Update_Foods(foods: Foods){
//   delete foods.id;
//   this.firestore.doc('policies/' + foods.id).update(foods);
// }
Delete_Foods(policyId: string){
  this.firestore.doc('policies/' + policyId).delete();
}

Add_Img_Food(fileUpload: Fileupload): Observable<number> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);
 
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log('File available at', downloadURL);
          fileUpload.url = downloadURL;

          this.AddUrl = downloadURL;
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
  add_meals(id,meal,nameField)
{
  console.log(nameField)
  var x
 
  
  if(nameField == "day 1" ){
    x = {day1:meal}

  }
  if(nameField == "day 2" ){
    x = {day2:meal}

  }
  if(nameField == "day 3" ){
    x = {day3:meal}

  }

  if(nameField == "day 4" ){
    x = {day4:meal}

  }
  if(nameField == "day 5" ){
    x = {day5:meal}

  }
  if(nameField == "day 6" ){
    x = {day6:meal}

  }
  if(nameField == "day 7" ){
    x = {day7:meal}

  }

  this.firestore.collection('Users').doc(id).update(x).then(() => {
    this.toastr.successToastr("Changed")
    this.router.navigate(["/exrcise"])
    
 
      
    
  })
  .catch(error => console.log(error));
  
 }
 update_food(Namefood,calorie,Proteins,Carb,Fats,TypeFoods,id)
        {
          console.log(id)
        
          
        
        

          this.firestore.collection('policies').doc(id).update({
            NameFoods:Namefood,
            calories:calorie,
            Fat:Fats,
            Protein:Proteins,
            TypeFood:TypeFoods,
            Carbs:Carb,
            url:localStorage.getItem("urlPhotoFood")
          }).then(() => 
          {
            this.toastr.successToastr("Food Updated")
            setTimeout(function(){
              if (!localStorage.getItem('foo')) { 
                localStorage.setItem('foo', 'no reload') 
                location.reload() 
              } else {
                localStorage.removeItem('foo') 
              }
            },2000)
            
        
              
            
          })
          .catch(error => console.log(error));
          
        }

 

}
