import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { LandingHomeComponent } from './landing-home/landing-home.component';
import { UserServiceService } from './Services/user-service.service';
import { AlertifyService } from './Services/alertify.service';
import { AuthentService } from './Services/Authent.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { ApplyforjobComponent } from './applyforjob/applyforjob.component';
import { JobPostingComponent } from './job-posting/job-posting.component';
import { ApplyformServiceService } from './Services/applyform-service.service';
import { JobpostServiceService } from './Services/jobpost-service.service';
import { ApplyforjobComponent } from './applyforjob/applyforjob.component';
import { EngageforjobComponent } from './engageforjob/engageforjob.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    RegisterComponent,
      LandingHomeComponent,
      ApplyforjobComponent,
      JobPostingComponent,
      EngageforjobComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //alertify
    // BsDropdownModule
    BsDropdownModule.forRoot()

  ],
  providers: [
    UserServiceService,
    AlertifyService,
    AuthentService,
    LoginComponent,
    ApplyformServiceService,
    JobpostServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
