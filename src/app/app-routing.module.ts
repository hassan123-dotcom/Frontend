import { LandingHomeComponent } from './landing-home/landing-home.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule, RoutesRecognized } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import{LandingComponent}from './landing/landing.component';
// import { ApplyforjobComponent } from './applyforjob/applyforjob.component';
import { JobPostingComponent } from './job-posting/job-posting.component';
import { ApplyforjobComponent } from './applyforjob/applyforjob.component';
import { EngageforjobComponent } from './engageforjob/engageforjob.component';

const routes: Routes = [


  {path:'',component:LandingHomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'register',component:RegisterComponent},
  {path:'searchforjob',component:ApplyforjobComponent},
  {path:'applyforjob',component:EngageforjobComponent},
  {path:'postJob',component:JobPostingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]

})
export class AppRoutingModule
{

}
