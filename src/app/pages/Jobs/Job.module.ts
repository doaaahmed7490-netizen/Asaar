import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*import { BlockLawRoutingModule } from './block-law-routing.module';
import { ListBlockLawsComponent } from './list-block-laws/list-block-laws.component';
import { AddBlockLawComponent } from './add-block-law/add-block-law.component';
import { EditBlockLawComponent } from './edit-block-law/edit-block-law.component';*/
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';*/
import { MatTableModule } from '@angular/material/table';

import { NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbFormFieldModule, NbIconModule, NbTableModule, NbAlertModule } from '@nebular/theme';
/*import { ThemeModule } from '../../@theme/theme.module';*/
import { SharedModule } from '../../shared/components/shared.module';
/*import { PipeModule } from '../../shared/pipes/pipes.module';*/
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactore } from '../../app.module';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
//import { SharedModule } from '../../shared/components/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { JobRoutingModule } from './JobRouting.module';
import { ListJobComponent } from './list-job/list-job.component';
import { AddJobComponent } from './add-job/add-job.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { SliceWordsPipe } from './slice-words.pipe';


@NgModule({
 // declarations: [ListBlockLawsComponent, AddLetterTypeComponent, EditBlockLawComponent],
  declarations: [ListJobComponent,AddJobComponent, EditJobComponent
    ,    SliceWordsPipe

  ],

  imports: [
    JobRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbAlertModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbFormFieldModule,
    NbIconModule,
    //MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    SharedModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactore,
        deps: [HttpClient],
      },
    }),
  ],
})
export class JobModule { }
