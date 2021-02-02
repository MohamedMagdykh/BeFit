import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { foodsService } from 'src/app/Service/foods.service';
import { Foods } from 'src/app/Models/foods.model';
import { ToastrManager } from 'ng6-toastr-notifications';
import {  map } from "rxjs/operators";
import { AngularFireDatabase } from '@angular/fire/database';
import { Fileupload } from 'src/app/Models/fileupload.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { BehaviorSubject, Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/Service/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class foodsComponent implements OnInit {
  
  /////addfood///// 
  Namefoods
  calories
  Protein
  Carbs
  Fat

  /////GetFood/////
  Datafoods = []
  DatafoodsName = []
  Searchfoods = ""

  /////UploadFoodImg/////
  selectedFiles: FileList;
  percentage: number;
  currentFileUpload: Fileupload;

  ///////Validation///////
  heroForm
  ////////getphoto///////
  fileUploads: any[];
  //////////////update////////////
  photoshow
  ////////////////cal calories//////
  percentageForBody = {
    "ReqCalories":0,
    "protein":0,
    "fats":0,
    "carb":0 }
    DataUsers = []
  NumGrams
  selectfood
  ////////////Diets/////////
  Diets=[]
  public load = true
  //pagination
  
  pageNumber = 1;
  pageSize = 9
  
 
 
/////////////////
NumMeal='Choose Num Meal'
allmeals = []
nummeals = []
caloriesUses=0
proteinUses=0
carbUses=0
fatUses=0
NumDays=[]
NumDay='Choose Day'
TypeFood = "Amount"
TypeUser = localStorage.getItem("typeuser")



  

private _data: BehaviorSubject<Foods[]>;
public data: Observable<Foods[]>;
latestEntry: any
    constructor(private spinner: NgxSpinnerService,private router:Router,private foodsSer:foodsService,public toastr: ToastrManager,public db: AngularFireDatabase,private authservice:AuthService)
  { 
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
          this.spinner.show()
        this.Getfoods()
        this.Seletions()
        this.getpercentageForBody()
        this.heroForm = new FormGroup({
          'Namefoods': new FormControl(this.Namefoods, [
            Validators.required,
            Validators.minLength(3),
          ]),
          'calories': new FormControl(this.calories,[
            Validators.required,
            Validators.minLength(0),
          ]),
          'Protein': new FormControl(this.Protein,[
            Validators.required,
            Validators.minLength(0),
          ]),
          'Carbs': new FormControl(this.Carbs,[
            Validators.required,
            Validators.minLength(0),
          ]),
          'Fat': new FormControl(this.Fat,[
            Validators.required,
            Validators.minLength(0),
          ]),
          
          
        });
        setTimeout(() => {
          this.spinner.hide()
          
        }, 1000);
       

  }

  ngOnInit(): void {
    // console.log(document.getElementById("navbarNavAltMarkup"))
    // var x = window.matchMedia("(max-width: 700px)")
    

    
 
  }
  AddAndUpdatefood(){
    

    this.foodsSer.Add_Foods(this.Namefoods,this.calories,this.Protein,this.Carbs,this.Fat,this.TypeFood);
 
  
} 


addfood(){
  this.AddAndUpdatefood()
  setTimeout(function(){
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
  },2000);
  this.toastr.successToastr("Food Added")
}   

 Getfoods()
{
  this.foodsSer.get_Foods().subscribe(res=>
    {
      this.Datafoods = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Foods,         
          
        } 
        
        

  
      })
      this.GetImage()
      this.DatafoodsName = []
      for (let i = 0; i < this.Datafoods.length; i++) 
      {

        if (this.Datafoods[i].NameFoods.toUpperCase().includes(this.Searchfoods.toUpperCase()))
        {
          this.DatafoodsName.push(this.Datafoods[i])

       
        }
        
      }
      

      console.log(this.DatafoodsName.sort((a,b) => a.NameFoods > b.NameFoods ? 1 : -1))
     
      
    },
    err=>
    {
      this.toastr.errorToastr(err.message)
    })
}
// first() {
//   this._data = new BehaviorSubject([]);
//   this.data = this._data.asObservable();

//   const scoresRef = this.getCollection( ref => ref
//     .orderBy('score', 'desc')
//     .limit(6))
//     .subscribe(data => {
//       this.latestEntry = data[data.length - 1].doc;
//       this._data.next(data);
//     });
//   }
SelectImg(event) {
  this.selectedFiles = event.target.files;
  console.log(this.selectedFiles)
}

AddImgFood() {
  const file = this.selectedFiles.item(0);
  this.selectedFiles = undefined;
  this.currentFileUpload = new Fileupload(file);
  
// console.log(this.currentFileUpload.url)
  
  this.foodsSer.Add_Img_Food(this.currentFileUpload).subscribe(
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
  
}

 DeleteFood(id: string,index) {
  this.foodsSer.Delete_Foods(id);
  for (let j = 0; j < this.DatafoodsName.length; j++) {
    if(id ==this.Datafoods[j].id ){
      for (let i = 0; i < this.fileUploads.length; i++) {
        if(this.fileUploads[i].url==this.DatafoodsName[j].url ){
          this.DeleteImg(this.fileUploads[i])
        }
        
      }
    }
    
  }

  this.toastr.successToastr("Food Deleted")
  setTimeout(() => {
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
    
  }, 1000);


}
Updatefood(){
    

  
  this.foodsSer.update_food(this.Namefoods,this.calories,this.Protein,this.Carbs,this.Fat,this.TypeFood,localStorage.getItem("IdFood"));


} 

// updatefood(){
  

//   this.foodsSer.Delete_Foods(localStorage.getItem("IdFood"));
//   this.Updatefood()
  

  

// }


ShowUpdateData(id,index){
  for (let i = 0; index < this.Datafoods.length; i++) {
     
    
    if(id == this.Datafoods[i].id )
    {
      console.log(this.Datafoods[i].id )
      this.Namefoods = this.Datafoods[i].NameFoods
      this.calories = this.Datafoods[i].calories
      this.Protein = this.Datafoods[i].Protein
      this.Carbs = this.Datafoods[i].Carbs
      this.Fat = this.Datafoods[i].Fat 
      localStorage.setItem('urlPhotoFood', this.Datafoods[i].url);
      localStorage.setItem('IdFood', this.Datafoods[i].id );

    }
    
    
  }

  
  

}



GetImage(){
  this.foodsSer.get_Img(this.Datafoods.length).snapshotChanges().pipe(
    map(changes =>
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    )
  ).subscribe(fileUploads => {
    this.fileUploads = fileUploads;
  
    
  });
  

}

DeleteImg(fileUpload) {
  this.foodsSer.delete_Img(fileUpload);
}
ClearData(){
  // if (!localStorage.getItem('foo')) { 
  //   localStorage.setItem('foo', 'no reload') 
  //   location.reload() 
  // } else {
  //   localStorage.removeItem('foo') 
  // }
  this.Namefoods = null
  this.calories = null
  this.Protein = null
  this.Carbs = null
  this.Fat = null
  this.NumGrams=null

 
}
CurrentcaloriesAmount(){
  for (let i = 0; i < this.Datafoods.length; i++) {
    if(this.Datafoods[i].id ==this.selectfood ){
      if(this.percentageForBody.ReqCalories>=this.Datafoods[i].calories/100 * this.NumGrams){
        // console.log(this.NumDay)
        if(this.NumDay=='Choose Day')
        {
          this.toastr.warningToastr("Please Choose Day Frist")
    
        }
      else
      {
        if(this.NumMeal=='Choose Num Meal')
        {
          this.toastr.warningToastr("Please Choose Num Meal Frist")
    
        }
        else{
            this.percentageForBody.ReqCalories = Math.floor(this.percentageForBody.ReqCalories - (this.Datafoods[i].calories/100 * this.NumGrams)) 
            this.percentageForBody.protein  = Math.floor( this.percentageForBody.protein  - (this.Datafoods[i].Protein/100 *  this.NumGrams))
            this.percentageForBody.carb = Math.floor( this.percentageForBody.carb - (this.Datafoods[i].Carbs/100 *  this.NumGrams))
            this.percentageForBody.fats = Math.floor(this.percentageForBody.fats - (this.Datafoods[i].Fat/100 * this.NumGrams))
            this.Diets.push({"name":this.Datafoods[i].NameFoods,"amount":this.NumGrams })
            this.caloriesUses = this.caloriesUses + this.Datafoods[i].calories/100 * this.NumGrams
            this.proteinUses = this.proteinUses + this.Datafoods[i].Protein/100 * this.NumGrams
            this.carbUses = this.carbUses + this.Datafoods[i].Carbs/100 * this.NumGrams
            this.fatUses = this.fatUses + this.Datafoods[i].Fat/100 * this.NumGrams
          }
            
      }
      this.NumGrams=null
    
      // console.log(this.NumDay)
    
    }
    else{
      this.toastr.warningToastr("Your Calories Available Less Than Foods Select")
    }

    }
    
    
  }

 

}
CurrentcaloriesCount(){
  for (let i = 0; i < this.Datafoods.length; i++) {
    if(this.Datafoods[i].id ==this.selectfood ){
      if(this.percentageForBody.ReqCalories>=this.Datafoods[i].calories * this.NumGrams){
        console.log(this.NumDay)
        if(this.NumDay=='Choose Day')
        {
          this.toastr.warningToastr("Please Choose Day Frist")
    
        }
      else
      {
        if(this.NumMeal=='Choose Num Meal')
        {
          this.toastr.warningToastr("Please Choose Num Meal Frist")
    
        }
        else{
            this.percentageForBody.ReqCalories = Math.floor( this.percentageForBody.ReqCalories - (this.Datafoods[i].calories * this.NumGrams) )
            this.percentageForBody.protein  = Math.floor( this.percentageForBody.protein  - (this.Datafoods[i].Protein *  this.NumGrams) )
            this.percentageForBody.carb = Math.floor( this.percentageForBody.carb - (this.Datafoods[i].Carbs *  this.NumGrams) )
            this.percentageForBody.fats = Math.floor( this.percentageForBody.fats - (this.Datafoods[i].Fat* this.NumGrams) )
            this.Diets.push({"name":this.Datafoods[i].NameFoods,"amount":this.NumGrams })
            this.caloriesUses = this.caloriesUses + this.Datafoods[i].calories * this.NumGrams
            this.proteinUses = this.proteinUses + this.Datafoods[i].Protein * this.NumGrams
            this.carbUses = this.carbUses + this.Datafoods[i].Carbs * this.NumGrams
            this.fatUses = this.fatUses + this.Datafoods[i].Fat * this.NumGrams
          }
            
      }
      this.NumGrams=null
    
      // console.log(this.NumDay)
    
    }
    else{
      this.toastr.warningToastr("Your Calories Available Less Than Foods Select")
    }

    }
  }

 

}
SaveThisMeal(){
  for (let j = 0; j < this.nummeals.length; j++) {
    if(this.nummeals[j]==this.NumMeal){
      this.allmeals.push({"NumMeal":this.NumMeal,"SelFoods":this.Diets,"caloriesOfMeal":Math.floor(this.caloriesUses),"proteinOfMeal":Math.floor(this.proteinUses),"carbOfMeal":Math.floor(this.carbUses),"fatOfMeal":Math.floor(this.fatUses)})
      this.caloriesUses = 0
      this.proteinUses = 0 
      this.carbUses = 0 
      this.fatUses = 0
      
    }
     
   }
   
  this.Diets=[]
  console.log(this.allmeals)

}
finish(){
  
  this.foodsSer.add_meals(localStorage.getItem("iduser"),this.allmeals,this.NumDay)

  
}
inde(id){
 
this.selectfood = id


}
wiating(){
  setTimeout(() => {
    this.load = false
    
  }, 10000); 
}
pageChanged(pN: number): void {

  this.pageNumber = pN;
  
  this.Getfoods();
  
}
onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.DatafoodsName = pageOfItems;
}

Test(){
  var nummeals = []
  
  for (let i = 1; i <=10; i++) {
    
    nummeals.push("Meal " + [i])
   
   
    }
    for (let j = 0; j < nummeals.length; j++) {
      if(nummeals[j]==this.NumMeal){
        this.allmeals.push({NumMeal:this.NumMeal,SelFoods:this.Diets})
        console.log(this.allmeals)
       
      }
       
     }
   

    
  
}
Seletions(){
  for (let i = 1; i <=10; i++) {
  
    this.nummeals.push("Meal " + [i])
   
    }
    for (let i = 1; i <=7; i++) {
  
      this.NumDays.push("day "+[i])
     
      }
}
removeMeals(index){
  this.percentageForBody.ReqCalories= this.percentageForBody.ReqCalories + this.allmeals[index].caloriesOfMeal
  this.percentageForBody.protein= this.percentageForBody.protein + this.allmeals[index].proteinOfMeal
  this.percentageForBody.carb= this.percentageForBody.carb + this.allmeals[index].carbOfMeal
  this.percentageForBody.fats= this.percentageForBody.fats + this.allmeals[index].fatOfMeal



  this.allmeals.splice(index, 1)
  
}
// test(){
//   console.log(this.NumDay)
// }

getpercentageForBody()
{
  this.authservice.get_Users().subscribe(res=>
    {
      this.DataUsers = res.map(e => {
        return {
          
          id: e.payload.doc.id,
          ...e.payload.doc.data() as []
          
        } 


  
      })

     //  console.log(this.DataUsers)
     
      for (let i = 0; i < this.DataUsers.length; i++) 
      {

        if (this.DataUsers[i].mail == localStorage.getItem("UserLogMail"))
        {
          this.percentageForBody = this.DataUsers[i].percentageForBody
          console.log(this.percentageForBody)
         
          



        }
        
      }
    
     
      
    },
    err=>
    {
      this.toastr.errorToastr(err.message)
    })
}

}



