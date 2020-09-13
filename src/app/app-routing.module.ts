import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './AllComponents/home/home.component';
import { foodsComponent } from './AllComponents/foods/foods.component';
import { ExreciseComponent } from './AllComponents/exrecise/exrecise.component';
import { CaloriesComponent } from './AllComponents/calories/calories.component';
import { ProfileComponent } from './AllComponents/profile/profile.component';
import { BodygardGuard } from './bodygard.guard';



const routes: Routes = [
  { path: '',             component: HomeComponent },
  { path: 'foods',             component: foodsComponent, canActivate: [BodygardGuard] },
  { path: 'exrcise',             component: ExreciseComponent, canActivate: [BodygardGuard] },
  { path: 'calories',             component: CaloriesComponent, canActivate: [BodygardGuard] },
  { path: 'profile',             component: ProfileComponent, canActivate: [BodygardGuard] },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
