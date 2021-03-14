import { ConnectorService } from './../Services/connector.service';
import { UserServiceService } from './../Services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertifyService } from '../Services/alertify.service';
import { Router } from '@angular/router';
// import {ReactiveFormsModule} from 'ReactiveFormsModule';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerationForm: FormGroup;
  user:any = {};
  userSubmitted: boolean;
  url:string = "https://localhost:44372/company";

  constructor(private userService:UserServiceService,
              private alert:AlertifyService,
              private Connection:ConnectorService,
              private router:Router) { }

  ngOnInit(): void {
    this.registerationForm = new FormGroup({

      companyName: new FormControl(null, Validators.required),
      ownerName: new FormControl(null, Validators.required),
      registeredDate: new FormControl(null, Validators.required),
      companyAddress: new FormControl(null, Validators.required),

    })
  }

  // ------------------------------------
  // Getter methods for all form controls
  // ------------------------------------

  get companyName() {
    return this.registerationForm.get('companyName') as FormControl;
  }

  get ownerName() {
    return this.registerationForm.get('ownerName') as FormControl;
  }
  get registeredDate() {
    return this.registerationForm.get('registeredDate') as FormControl;
  }
  get companyAddress() {
    return this.registerationForm.get('companyAddress') as FormControl;
  }

  // ------------------------

  onSubmit() {

    console.log(this.registerationForm.value);
    this.userSubmitted = true;

//console.log(this.registerationForm.valid);
    if(this.registerationForm.valid){
      this.user = Object.assign(this.user,this.registerationForm.value);
      this.Connection.storeData(this.user,this.url).subscribe(data =>{
        console.log(data);
      })

    this.userSubmitted = false;
    this.alert.success('Successfully Registered');
    this.router.navigate(['/']);
    }else{
      this.alert.error('Error');

    }


  }





}
