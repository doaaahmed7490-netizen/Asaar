import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ngdirective } from '../../shared/ngdirective.directive';
import { AddJobComponent } from './add-job/add-job.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { ListJobComponent } from './list-job/list-job.component';



const routes: Routes = [
  {
    path: '',
    component: ListJobComponent,
  },
 
 {
    path: 'add',
    component: AddJobComponent,
  },
  {
    path: 'edit/:id',
    component: EditJobComponent,
  }
  /*{
    path: 'Test',
    component: TestComponent,
  }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
