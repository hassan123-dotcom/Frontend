import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EngageService } from '../Services/engage.service';
import { Users } from '../Users';

@Component({
  selector: 'app-engageforjob',
  templateUrl: './engageforjob.component.html',
  styleUrls: ['./engageforjob.component.css']
})
export class EngageforjobComponent implements OnInit {

  applyforjobForm: FormGroup;
  user: Users;
  userSubmitted: boolean;

  constructor(private router: Router, private fb: FormBuilder, private applyforjobService: EngageService, private http: HttpClient) { }

  ngOnInit(): void {
    this.applyforjobForm = new FormGroup({

      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      position: new FormControl(null,[Validators.required]),
     city: new FormControl(null,Validators.required),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    });
    // this.createApplyforJobForm();
  }

  selectedFile: File = null;
  onFileSelected(event)
  {
    this.selectedFile = <File>event.target.file[0];
    // console.log(event);
  }

    onUpload()
    {
      const fd = new FormData();
      fd.append('image', this.selectedFile, this.selectedFile.name)
      this.http.post('',fd) // in that empty string we need to put the address of our backend
      .subscribe(res =>{
        console.log(res);
      });
    }



  // createApplyforJobForm()
    // {
    //   this.applyforjobForm = this.fb.group({

    //     username: [null, Validators.required],
    //     email: [null, Validators.required, Validators.email],
    //     password: [null, Validators.required],
    //     cpassword: [null, Validators.required],
    //     mobile: [null, Validators.required]
    //     });

    // }





  get firstname()
  {
    return this.applyforjobForm.get('firstname') as FormControl;
  }

  get lastname()
  {
    return this.applyforjobForm.get('lastname') as FormControl;
  }

  get email()
  {
    return this.applyforjobForm.get('email') as FormControl;
  }

  // get password()
  // {
  //   return this.applyforjobForm.get('password') as FormControl;
  // }

  get position()
  {
    return this.applyforjobForm.get('position') as FormControl;
  }

  get city()
  {
    return this.applyforjobForm.get('city') as FormControl;
  }

  get mobile()
  {
    return this.applyforjobForm.get('mobile') as FormControl;
  }







  onSubmit()
  {

    console.log(this.applyforjobForm);
    this.userSubmitted=true;
    if(this.applyforjobForm.valid)
    {
    // this.user = Object.assign(this.user, this.applyforjobForm.value);
    this.applyforjobService.addUser(this.userData());
    this.applyforjobForm.reset();
    this.userSubmitted=false;
  }

  }


userData(): Users{
  return this.user = {
    firstname : this.firstname.value,
    lastname:this.lastname.value,
    email:this.email.value,
    position:this.position.value,
    city:this.city.value,
    mobile: this.mobile.value

  }
}


  // addUser(user)
  // {
  //   let users = [];
  //   if(localStorage.getItem('Users'))
  //   {
  //      users = JSON.parse(localStorage.getItem('Users'));
  //      users = [user, ...users];
  //   }
  //     else{
  //       users=[user];
  //     }

  //   localStorage.setItem('Users', JSON.stringify(users));

  // }


}
