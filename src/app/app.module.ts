import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgwWowModule } from 'ngx-wow';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './AllComponents/home/home.component';
import { foodsComponent } from './AllComponents/foods/foods.component';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ExreciseComponent } from './AllComponents/exrecise/exrecise.component';
import { CaloriesComponent } from './AllComponents/calories/calories.component';
import { ProfileComponent } from './AllComponents/profile/profile.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";
import { JwPaginationModule } from 'jw-angular-pagination';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    foodsComponent,
    ExreciseComponent,
    CaloriesComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgwWowModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        FormsModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        AngularFirestoreModule,
        AngularFireAuthModule,
        NgxPaginationModule,
        NgxSpinnerModule,
        JwPaginationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
