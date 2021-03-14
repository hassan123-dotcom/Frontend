import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplyformServiceService } from '../Services/applyform-service.service';
// import { User } from '../user';

@Component({
  selector: 'app-applyforjob',
  templateUrl: './applyforjob.component.html',
  styleUrls: ['./applyforjob.component.css']
})
export class ApplyforjobComponent implements OnInit {
  // usert: User;
  usert: any = {}; //storing form info in this variable
  applyform: FormGroup;
  constructor(private router:Router,private fb: FormBuilder,private applyformService:ApplyformServiceService) { }


  ngOnInit(): void {

    this.createapplyform();
  }

  createapplyform(){
    this.applyform = this.fb.group({
      jobtitle: [null,Validators.required],
      skill: [null,Validators.required],
    destination: [null,Validators.required],
    minsalary: [null,[Validators.required, Validators.minLength(4)]]
    });
  }



  //getter methods for all form ctrls++

  get jobtitle(){
    return this.applyform.get('jobtitle') as FormControl;
    }

    get skill(){
      return this.applyform.get('skill') as FormControl;
    }

    get destination(){
      return this.applyform.get('destination') as FormControl;
    }

    get minsalary(){
      return this.applyform.get('minsalary') as FormControl;
    }


    onBack(){
      this.router.navigate(['/']);

    }




  onSubmit(){
    console.log(this.applyform.value);
    this.usert = Object.assign(this.usert, this.applyform.value);

    this.applyformService.addUsers(this.usert);
    this.applyform.reset();
    //this user contains json object
    //when we use multiple value it will overright the value
  // localStorage.setItem('Users',JSON.stringify(this.userx));
  }

  // addUsers(usert)
  // {
  //   let usern = [];
  //   if(localStorage.getItem('Users1'))
  //   {
  //     usern = JSON.parse(localStorage.getItem('Users1')); //ab user is empty and ready to accept new data
  //     usern = [usert, ...usern];  //using this we just putting user data (which we get
  //     //by clicking on submit button) in users array
  //   }
  //   else{
  //     usern = [usert];

  //   }
  //   localStorage.setItem('Users1',JSON.stringify(usern));
  // }


}
