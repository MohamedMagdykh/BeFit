import { Component, OnInit, SimpleChanges,ViewChildren, QueryList, ElementRef } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Router } from '@angular/router';
import { AuthService } from  'src/app/Service//auth.service';
import { HomeService } from 'src/app/Service/home.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isActive = true
  email
  pass
  nameuser
  imguser
  ////////////comments
  comment
  date 

  datacomments= []
  datacomments2= []

  dateadd
  dateget
  dateshow= {"num":0,"char":""}
  dateshow2= {"num":0,"char":""}
  datacommentshow=[]
  datacommentreplyshow=[]
  MailtoDeleteComment=localStorage.getItem("UserLogMail")
  replycommentadd
  /////////////////////////getreplay//////////////////////
  getreplys =[]
  @ViewChildren("boxes") private boxes: QueryList<ElementRef>;
  @ViewChildren("boxes1") private boxess: QueryList<ElementRef>;
  getreply
  getnamereply
  getphotoreply
  getmailreply
  getdatereply
  CheckLog:boolean



 

  constructor(private wowService: NgwWowService , private router:Router ,private toastr:ToastrManager, private  authService:  AuthService,private homeser:HomeService,private spinner: NgxSpinnerService) { 
    this.spinner.show()
    this.CheckLog = this.authService.isLoggedIn
    
    this.wowService.init();
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
    var bodyStyles =  document.body.style;
    document.getElementById('navbar').style.top = "70px"
    document.getElementById('navbar').style.background= "none"
    bodyStyles.setProperty('--maincolorNav', "white");
   
    window.addEventListener('scroll', function() 
    {
       if(window.pageYOffset>= 100 ){
        
         document.getElementById('navbar').style.top = "0px"
         document.getElementById('navbar').style.background= "rgb(38, 38, 38)"
        
         bodyStyles.setProperty('--maincolorNav', "white");
        //  console.log(window.pageYOffset)
       }
       else{
         document.getElementById('navbar').style.top = "70px"
         document.getElementById('navbar').style.background= "none"
         bodyStyles.setProperty('--maincolorNav', "white");
        }
       if(window.pageYOffset>= 401 ){
         document.getElementById('ScrollUp').style.display = "block"
       }
       if(window.pageYOffset<= 400  )
       {
         document.getElementById('ScrollUp').style.display = "none"
       }
      

     });
     
     this.nameuser=localStorage.getItem('Nameuser')
     this.imguser=localStorage.getItem('ProfilePhotoUser')
     
     
   
     
     this.GetComments()

     setTimeout(() => {
       this.spinner.hide()
       
     }, 1000);
  }
  

  ngOnInit(): void {
  // console.log(this.authService.isLoggedIn)
  document.getElementById('footer').style.width= "100%"
  document.getElementById('footer').style.marginLeft= "0%"

  }


  callanimate(){
    this.wowService.init();
    
  }
  ScrollUp()
{
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
    this.router.navigate(['foods'])
}

  
toggle(): boolean {
  return this.isActive = !this.isActive;
}

ChangeColorSite(colorSelect){
  
  var bodyStyles =  document.body.style;
  bodyStyles.setProperty('--maincolor', colorSelect);
  
}

// LogOut(){
//   this.authService.log_out()
//   }
addComment()
{
  this.date = new Date();
  // this.dateadd=this.date.toString().split("GMT");
  this.homeser.Add_comments(this.nameuser,this.imguser,this.comment,this.date).then(()=>{
    this.comment=null
    setTimeout(() => {
      
      this.GetComments()
    }, 1000);
    

  }).catch(function(error)
  {
    alert(error)
  }
  );
 
}
showreply(i){
  // this.showdivreply={test:true,"data":this.datacomments[i]}
    let nativeElement = this.boxes.toArray()[i].nativeElement;
    nativeElement.style.display =
      nativeElement.style.display === "none" || !nativeElement.style.display
        ? "block"
        : "none";
  


}
showreply2(i){
  let nativeElement = this.boxess.toArray()[i].nativeElement;
  nativeElement.style.display =
    nativeElement.style.display === "none" || !nativeElement.style.display
      ? "block"
      : "none";

  
}


GetComments()
{
  this.homeser.get_Comments().subscribe(res=>
    {
      this.datacomments = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {},
                   
          
        } 
        

      })
      this.datacomments.reverse()
      this.datacomments2=this.datacomments
      // console.log(this.datacomments)
      
      

      
      for (let i = 0; i < this.datacomments.length; i++){
        // console.log(this.datacomments[i].date)
        

        this.dateget= this.datacomments[i].date.toDate()

        var date1 = new Date();
        // var finaldate =  Math.floor((Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate()) - Date.UTC(this.dateget.getFullYear(), this.dateget.getMonth(), this.dateget.getDate()) ) /(1000 * 60 * 60 * 24));
           var finaldate = date1.getTime() - this.dateget.getTime()
           
           if(finaldate/1000>1)
          {
             var s = finaldate/1000
             this.dateshow.num=s
             this.dateshow.char="s"

             if(s/60>1)
            {
              
              var m = s/60
              this.dateshow.num=m
             this.dateshow.char="m"
              if(m/60>1)
              {
                var h = m/60
                this.dateshow.num=h
                this.dateshow.char="h"
                if(h/24>1)
                {
                  var d = h/24
                  this.dateshow.num=d
                  this.dateshow.char="d"
                  if(d/7>1)
                  {
                    var w = d/7
                    this.dateshow.num=w
                    this.dateshow.char="w"
                    if(w/4>1)
                  {
                      var month = w/4
                      this.dateshow.num=month
                    this.dateshow.char="month"
                    if(month/12>1)
                    {
                      var y = month/12
                      this.dateshow.num=y
                      this.dateshow.char="y"
                    }

                    

                    }
                  }
                 
    
                }
  
              }
            }
           

         }
         
         this.dateshow.num = Math.floor(this.dateshow.num)
        //  console.log(this.getreplys.length)
         this.datacomments[i].date = {num:this.dateshow.num,char:this.dateshow.char }
        //  this.datacommentshow.push( {num:this.dateshow.num,char:this.dateshow.char })
         this.getreplys=this.datacomments[i].reply
         

        //  console.log(this.getreplys.length)
         for (let x = 0; x < this.getreplys.length; x++) {
           
        
          //  this.getreply = this.getreplys[i].reply
          //  this.getnamereply= this.getreplys[i].name
          //  this.getphotoreply = this.getreplys[i].photo
          
          // console.log(this.getreplys[x].date)
           this.getdatereply=this.getreplys[x].date.toDate()
           
          //  this.getmailreply=this.getreplys[i].mail


           var finaldatereply = date1.getTime() - this.getdatereply.getTime()
           if(finaldatereply/1000>1)
           {
              var s2 = finaldatereply/1000
              this.dateshow2.num=s2
              this.dateshow2.char="s"
 
              if(s2/60>1)
             {
               
               var m2 = s2/60
               this.dateshow2.num=m2
              this.dateshow2.char="m"
               if(m2/60>1)
               {
                 var h2 = m2/60
                 this.dateshow2.num=h2
                 this.dateshow2.char="h"
                 if(h2/24>1)
                 {
                   var d2 = h2/24
                   this.dateshow2.num=d2
                   this.dateshow2.char="d"
                   if(d2/7>1)
                   {
                     var w2 = d2/7
                     this.dateshow2.num=w2
                     this.dateshow2.char="w"
                     if(w2/4>1)
                   {
                       var month2 = w2/4
                       this.dateshow2.num=month2
                     this.dateshow2.char="month"
                     if(month2/12>1)
                     {
                       var y2 = month2/12
                       this.dateshow2.num=y2
                       this.dateshow2.char="y"
                     }
 
                     
 
                     }
                   }
                  
     
                 }
   
               }
             }

            
 
          }
          this.dateshow2.num = Math.floor(this.dateshow2.num)
          
          this.getreplys[x].date2 = {num:this.dateshow2.num,char:this.dateshow2.char }
          // console.log(this.getreplys[x].date)

          // this.datacommentreplyshow.push( {num:this.dateshow2.num,char:this.dateshow2.char })
           

         
        }
        

        
      }
      // console.log(this.getreplys)
      
     
      // console.log(this.getreply)


      // console.log(this.dateshow)
      // console.log(finaldate)
      // console.log(this.datacomments)

    
     
      
    },
    err=>
    {
      this.toastr.errorToastr(err.message)
    })


}
  DeleteComment(id)
{
  this.homeser.Delete_comment(id)

}
addreplay(id,name){

    console.log(this.datacomments2)
    
  this.date = new Date();
  var reply = this.replycommentadd + " @"+name
  this.homeser.add_replay(id,reply,this.nameuser,this.imguser,this.date,this.datacomments2)
  this.replycommentadd = null

  setTimeout(() => {
    this.GetComments()
  }, 1000);
  

}


 


}
