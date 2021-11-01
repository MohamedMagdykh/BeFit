import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.scss']
})
export class CaloriesComponent implements OnInit {
 NumDaysExercise = "medium"
 weight:number
 height:number
 age:number
 gender= "male"
 BMR:number
 NumCalories:number
 goal= "stability"
 NumCaloriesForGoal
 show = false
 heroForm
 FinalResultForCal
 protein
 carb
 fats
 percentageForBody


  constructor(private router:Router, private authService:AuthService,private spinner: NgxSpinnerService) { }
 

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      'weight': new FormControl(this.weight, [
        Validators.required,
        Validators.minLength(3),
      ]),
      'height': new FormControl(this.height,[
        Validators.required,
        Validators.minLength(0),
      ]),
      'age': new FormControl(this.age,[
        Validators.required,
        Validators.minLength(0),
      ]),
  
    });
    var widthscreen = window.matchMedia("(max-width: 600px)")
    this.MQ(widthscreen)
    if (window.matchMedia('(max-width: 600px)').matches) {
     
  }
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
    document.getElementById('footer').style.width= "100%"
    document.getElementById('footer').style.marginLeft= "0%"
  }
  MQ(x) {
    if (x.matches) { // If media query matches
      $(".editecollapese").css({
        "margin-top": "38%",
        "margin-left": "-32%"
    
    })
    } else {
      $(".editecollapese").css({
        "margin-top": "0",
        "margin-left": "0"
    
    })
    }
  }
  //BMR = 66.5 + ( 13.75 × weight in kg ) + ( 5.003 × height in cm ) – ( 6.755 × age in years ) men
  //BMR = 655 + ( 9.563 × weight in kg ) + ( 1.850 × height in cm ) – ( 4.676 × age in years ) women
  ClaculateCalories(){
    if(this.gender== "male")
    {
      this.BMR = 66.5 + ( 13.75 * this.weight  ) + ( 5.003 * this.height  ) - ( 6.755 * this.age  )

    }
    if(this.gender== "female")
    {
      this.BMR = 655 + ( 9.563 * this.weight  ) + ( 1.850 * this.height  ) - ( 4.676 * this.age  )

    }
    if(this.NumDaysExercise == "low")
    {
      this.NumCalories = this.BMR * 1.53

    }
    if(this.NumDaysExercise == "medium")
    {
      this.NumCalories = this.BMR * 1.76

    }
    if(this.NumDaysExercise == "heigh")
    {
      this.NumCalories = this.BMR * 2.25

    }
    if(this.goal=="fastgain")
    {
      this.NumCaloriesForGoal = this.NumCalories + 1000

    }
    if(this.goal=="lowgain")
    {
      this.NumCaloriesForGoal = this.NumCalories + 500

    }
    if(this.goal=="stability")
    {
      this.NumCaloriesForGoal = this.NumCalories 

    }
    if(this.goal=="lowloss")
    {
      this.NumCaloriesForGoal = this.NumCalories - 500

    }
    if(this.goal=="fastloss")
    {
      this.NumCaloriesForGoal = this.NumCalories - 1000

    }
    this.FinalResultForCal= Math.round(this.NumCaloriesForGoal)

    this.show = true
    this.protein = this.weight * 2 // by gram
    var proteincal = this.protein * 4
    var fatscal = (25 * this.FinalResultForCal)/100
    this.fats = fatscal/9 // by gram
    var carbcal = this.FinalResultForCal - (proteincal + fatscal )
    this.carb = carbcal/4 // by gram

    this.percentageForBody = {
      "ReqCalories":Math.floor(this.FinalResultForCal) ,
      "protein":Math.floor(this.protein),
      "fats":Math.floor(this.fats),
      "carb":Math.floor(this.carb) 
    }
    this.authService.percentageForBody(localStorage.getItem("iduser"),this.percentageForBody)
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
    }, 2000);





  }
  // GoDiet(){
  //   this.router.navigate(['/foods'])
  // }

}
