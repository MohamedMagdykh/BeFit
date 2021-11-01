import { Component, OnInit } from '@angular/core';
import { ExereciseService } from 'src/app/Service/exerecise.service';
import { Exer } from 'src/app/Models/exer.model';
import { Fileupload } from 'src/app/Models/fileupload.model';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgwWowService } from 'ngx-wow';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-exrecise',
  templateUrl: './exrecise.component.html',
  styleUrls: ['./exrecise.component.scss']
})
export class ExreciseComponent implements OnInit {
    SearchExrecise
    ExreciseSelect
    DataExrecises= []
    NameSystemEx
    // AllDataEx =[]
      /////UploadFoodImg/////
      selectedFiles: FileList;
      percentage: number;
      currentFileUpload: Fileupload;
      public load = true
      //////////////////dataEx//////////////////////
      describion
      nameEx
      dataOfEx = []
      NumDay='Must Choose Day'
      ///////////////////////
      imgSelect = ""
      idEx
      NumDays = []
      dataOfDayEx = []
      NameDay
      ////////////////////
      indexremove
      check = false
      ////////////////img//////////////
      fileUploads: any[];
      ////////////////validation/////////
      heroForm
      ///////////////////
      indexdayselectt
      ///////////////getDataEX/////////
      DataEXshow 
      DataEX = []
      EXsystemname
      getdescribion
      getdata =[]
      ////////////////////ExUserSelect//////////////////////
      SystemUserSelect=[]

      TypeUser = localStorage.getItem("typeuser")



      



    constructor(private spinner: NgxSpinnerService,private exerciseSer:ExereciseService,private router:Router,public toastr: ToastrManager,private wowService: NgwWowService)
     { 
     
        
        
     }

    ngOnInit(): void
     {
          if (!localStorage.getItem('foo')) { 
            localStorage.setItem('foo', 'no reload') 
            location.reload() 
          } else {
            localStorage.removeItem('foo') 
          }
          this.spinner.show()
          this.heroForm = new FormGroup
          ({
              'describion': new FormControl(this.describion,
              [

                  Validators.required,
                
              ]),
            
          });
          this.wowService.init();
          this.getExercise()
          this.Days()
          setTimeout(() => {
            this.spinner.hide()

            
          }, 1000);
          document.getElementById('footer').style.width= "100%"
          document.getElementById('footer').style.marginLeft= "0%"
         
      }




    getExercise()
    {
          this.exerciseSer.get_exerecises().subscribe(res=>
            {
                this.DataExrecises = res.map(e =>
              {
                  return {
                    id: e.payload.doc.id,
                    ...e.payload.doc.data() as Exer,         
                    
                  } 
                
                }) 
                
             setTimeout(() => {
              document.getElementById("list-home-list").click()
               document.getElementById("noData").style.display = "none"
              
               
             }, 1000);
                
           },
        err=>
        {
          this.toastr.errorToastr(err.message)
        })
   
        // this.IdEx(this.DataExrecises[0].id)    
            
   }
  AddExrecises()
  {
   this.exerciseSer.Add_Exercises(this.NameSystemEx)
  }
  AddImgExecise()
   {
      const file = this.selectedFiles.item(0);
      this.selectedFiles = undefined;
      this.currentFileUpload = new Fileupload(file);
      
     // console.log(this.currentFileUpload.url)
      
      this.exerciseSer.Add_Img_Ex(this.currentFileUpload).subscribe(
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
  SelectImg(event)
   {
        this.selectedFiles = event.target.files;
        console.log(event)
      }
      wiating(){
        setTimeout(() => {
          this.load = false
          
        }, 10000); 
    }
  addCollectionEx()
  {
    this.dataOfEx.push({'name':this.nameEx,'photo':localStorage.getItem('photoEx')})
    this.nameEx = ""
    this.selectedFiles= null
    this.percentage = 0
    this.load = true

    console.log(this.dataOfEx)
  }
  IdEx(id)
  {
    
    this.getdata =[]
    localStorage.setItem('idEx',id)
    this.GetImage()
    this.GetEXdata()
   


  }

  Days()
  {
    for (let i = 1; i <=7; i++)
     {
    
       this.NumDays.push("day "+[i])
    
      }

  }
  indexdayselect(index)
  {
    this.indexdayselectt=index

  }
  DaySelect()
  {
    this.dataOfDayEx.push({'day':this.NumDay,'nameDay':this.NameDay,'data':this.dataOfEx })
    console.log(this.dataOfDayEx)
    this.dataOfEx = []
    this.NameDay = ""
    this.NumDay = this.NumDay[this.indexdayselectt + 1]


  }
  AddDataEx()
  {
      this.exerciseSer.AddDataEx(this.describion,this.dataOfDayEx,localStorage.getItem('idEx'))
      this.describion = ""

  }
      removeExAdd(index)
      {
        this.DeletePhoto(index)
        setTimeout(() => 
        {
          this.dataOfEx.splice(index, 1)
        }, 1000);
   
      }

  GetImage()
  {
      this.exerciseSer.get_Img(10).snapshotChanges().pipe
      (
          map(changes =>
            changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
          )
        ).subscribe(fileUploads => 
        {
          this.fileUploads = fileUploads;
      
        
        }
      );
    

  }



      DeletePhoto(index) 
      {
        
          // console.log(this.DatafoodsName[index])
          for (let i = 0; i < this.fileUploads.length; i++) 
          {

            if(this.fileUploads[i].url==this.dataOfEx[index].photo )
            {
             console.log(this.fileUploads[i])
             this.exerciseSer.delete_Img(this.fileUploads[i]);
            }
            
          }

    }
    GetEXdata()
    {
      
      this.exerciseSer.get_exerecises().subscribe(res=>
        {
          this.DataEX = res.map(e =>
             {
                return {
                  id: e.payload.doc.id,
                  ...e.payload.doc.data() as Exer,         
                  
                } 
      
              })
              // console.log( this.getdata)
              for (let i = 0; i < this.DataEX.length; i++)
              {
              
                if(this.DataEX[i].dataEx.length!=0){

                if(this.DataEX[i].id == localStorage.getItem('idEx') )
                {
                  this.SystemUserSelect=this.DataEX[i]

                  this.DataEXshow=this.DataEX[i].dataEx
                  this.EXsystemname=this.DataEX[i].ExreciseName
                  
                  this.getdescribion = this.DataEXshow.describe
                  this.getdata=this.DataEXshow.data
                  // console.log(this.getdata)
                  this.check=false
                 


                }
              }
                
                
               }
              //  console.log( this.getdata)

             
        },
        err=>
        {
          this.toastr.errorToastr(err.message)
        })
    }
    EXSelect(){
      console.log(this.SystemUserSelect)
      this.exerciseSer.add_Ex(localStorage.getItem("iduser"),this.SystemUserSelect)
      
    }

}
