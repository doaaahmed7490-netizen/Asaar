import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobModel } from '../../../models/Job/Job.model';
import { JobService } from '../../../services/job.service';
import { ToastrService } from '../../../services/toastr.service';
import { EntityNames } from '../../../shared/Entity-Names';
@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss']
})
export class EditJobComponent implements OnInit {
  JobForm!: FormGroup;
  loading = false;
  submitted = false;
  isSubmitted= false;
  Id:string;
  CurrentJob:JobModel;
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private jobservice: JobService,
      private toastrService: ToastrService

  ) { 
    if(localStorage.getItem("token")==null||localStorage.getItem("token")=='')
    this.router.navigateByUrl('/auth');
  }
  ngOnInit(){
    this.initForm();
    this.route.params.subscribe((params) => {
      this.Id = params["id"];

    });
    this.getJobInfoById();
  }

  
  getJobInfoById() {
    this.jobservice.getJobById(this.Id).subscribe((res) => {
      this.CurrentJob = res.entity;
      this.bindForm();
    });
  }
  bindForm() {
    this.JobForm.controls["id"].setValue(this.CurrentJob.id);
    this.JobForm.controls["job"].setValue(this.CurrentJob.jobName);
    this.JobForm.controls["jobDesc"].setValue(this.CurrentJob.jobDesc);

  }
  initForm() {
      this.JobForm = this.formBuilder.group({
        id:[''],
          job: ['', Validators.required],

          jobDesc: ['']
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.JobForm.controls; }



  onSubmit() {
    this.submitted = true;
    this.isSubmitted = true;
    if (this.JobForm.invalid) {
      return;
    }
    this.loading=true;
    const model1 = this.JobForm.value;
 
    let model = {
      id:this.Id,
      jobName: model1.job,
      jobDesc: model1.jobDesc

      
    };

    const isWhitespaceString = str => !/\S/.test(str)

    if( isWhitespaceString(model.jobName)==true)
this.toastrService.danger("يجب إدخال بيانات الوظيفة لإتمام عملية الحفظ","خطأ");
else
{

    this.jobservice.updateJob(model).subscribe( {
      next: (res) => {
        this.toastrService.Update(EntityNames.Job);

        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Jobs';

        this.router.navigateByUrl(returnUrl);      
      },
     
     error: (err) => {


      this.toastrService.danger(err.error.error,"خطأ");
      this.submitted = false;
      this.isSubmitted = false;
     }
    
    });
  }
  }
  get fc() { return this.JobForm.controls; }

}
