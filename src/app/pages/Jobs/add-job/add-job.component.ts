import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../../../services/job.service';
import { ToastrService } from '../../../services/toastr.service';
import { EntityNames } from '../../../shared/Entity-Names';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {
  JobForm!: FormGroup;
  loading = false;
  submitted = false;
  isSubmitted= false;
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
  }
  initForm() {
      this.JobForm = this.formBuilder.group({
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
      jobName: model1.job,
      jobDesc: model1.jobDesc

      
    };
    const isWhitespaceString = str => !/\S/.test(str)

    if( isWhitespaceString(model.jobName)==true)
this.toastrService.danger("يجب إدخال بيانات الوظيفة لإتمام عملية الحفظ","خطأ");
else
{
    this.jobservice.addJob(model).subscribe( {
      next: (res) => {
        this.toastrService.Create(EntityNames.Job);

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
