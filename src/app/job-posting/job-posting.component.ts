import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from '../Services/alertify.service';
import { ConnectorService } from '../Services/connector.service';


@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.css']
})
export class JobPostingComponent implements OnInit {

  userpost: any = {}; //storing form info in this variable
  jobpostform: FormGroup;
  userSubmitted: boolean;
  url:string = "https://localhost:44372/PostedJob";
  constructor(private router:Router,
              private fbs: FormBuilder ,
               private Connection:ConnectorService,
               private alert:AlertifyService) { }


  ngOnInit(): void {

    this.createjobpostform();
  }

  createjobpostform(){
    this.jobpostform = this.fbs.group({
      jobTitle: [null,Validators.required],
      experiance: [null,Validators.required],
      position: [null,Validators.required],
    dateopened: [null,Validators.required],
    /*dateclosed: [null,Validators.required],*/
    reqSkills: [null,Validators.required],
      reqresources: [null,Validators.required]


  });
  }



  //getter methods for all form ctrls++

  get jobTitle(){
    return this.jobpostform.get('jobTitle') as FormControl;
    }

    get experiance(){
      return this.jobpostform.get('experiance') as FormControl;
    }

    get position(){
      return this.jobpostform.get('position') as FormControl;
    }

    get dateopened(){
      return this.jobpostform.get('dateopened') as FormControl;
    }

   /* get dateclosed(){
      return this.jobpostform.get('dateclosed') as FormControl;
    }*/
    get reqSkills(){
      return this.jobpostform.get('reqSkills') as FormControl;
    }
    get reqresources(){
      return this.jobpostform.get('reqresources') as FormControl;
    }




    onBack(){
      this.router.navigate(['/']);

    }




  onSubmit(){
    console.log(this.jobpostform.value);
    this.userSubmitted = true;


   if(this.jobpostform.valid){
    this.userpost = Object.assign(this.userpost, this.jobpostform.value);
      this.Connection.storeData(this.userpost,this.url).subscribe(data =>{
        console.log(data);
        console.log("Connection done");

      })
      this.jobpostform.reset();
        this.userSubmitted = false;
        this.alert.success('Successfully Posted');
        this.router.navigate(['/']);


    }else{
      this.alert.error('Error');

    }


  }




}
