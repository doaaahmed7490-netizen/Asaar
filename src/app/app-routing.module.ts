import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurd } from './guards/auth-activate.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
 //  canActivate: [AuthGuard],
  redirectTo: 'auth',

  },
  {
    path: 'auth',
   // canActivate: [AuthGuard],
    redirectTo: 'auth',
   // redirectTo: 'auth',

  },
  {
    path: 'dashboard',
   // canActivate: [AuthGuard],
    redirectTo: 'dashboard',
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./pages/main/main.module').then((mod) => mod.MainModule),
      canActivate: [AuthGuard],
    },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((mod) => mod.AuthModule),
      canActivate: [AuthGuard],

  },
 

 

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/charts/charts.module').then((mod) => mod.ChartsModule),
     // canActivate: [AuthGuard],
    },
    {
      path: 'dashboardRpt',
      loadChildren: () =>
        import('./pages/charts-report/chartsReport.module').then((mod) => mod.ChartsReportModule),
       // canActivate: [AuthGuard],
      },
 



  {
    path: 'District',
    loadChildren: () =>
      import('./pages/District/district.module').then(
        (mod) => mod.DistrictModule
      ),
     // canActivate: [AuthGuard],
    },





 
  {
    path: 'Users',
    loadChildren: () =>
      import('./pages/Users/user.module').then((mod) => mod.UserModule),
      //canActivate: [AuthGuard],

  },


 
  {
    path: 'Projects',
    loadChildren: () =>
      import('./pages/StrategicGoals/strategicGoal.module').then((mod) => mod.StrategicGoalModule),
      //canActivate: [AuthGuard],

  },
  {
    path: 'ProjectDocuments',
    loadChildren: () =>
      import('./pages/Milestones/milestone.module').then((mod) => mod.MilestoneModule),
      //canActivate: [AuthGuard],
    },
      {
    path: 'DocumentsTypes',
    loadChildren: () =>
      import('./pages/District/district.module').then((mod) => mod.DistrictModule),
      //canActivate: [AuthGuard],
    },
  {
    path: 'DirectiveGoals',
    loadChildren: () =>
      import('./pages/DirectiveGoals/directiveGoal.module').then((mod) => mod.DirectiveGoalModule),
      //canActivate: [AuthGuard],
    },
  {
    path: 'Departments',
    loadChildren: () =>
      import('./pages/Departments/department.module').then((mod) => mod.DepartmentModule),
      //canActivate: [AuthGuard],
    },

 /* {
    path: 'Jobs',
    loadChildren: () =>
      import('./pages/Jobs/Job.module').then((mod) => mod.JobModule),

  },*/
  {
    path: 'Employee',
    loadChildren: () =>
      import('./pages/Employee/Emp.module').then((mod) => mod.EmpModule),
      //canActivate: [AuthGuard],

  },
  {
    path: 'Services',
    loadChildren: () =>
      import('./pages/Services/Service.module').then((mod) => mod.ServiceModule),
      //canActivate: [AuthGuard],

  },
  {
    path: 'Questions',
    loadChildren: () =>
      import('./pages/Questions/Question.module').then((mod) => mod.QuestionModule),
      //canActivate: [AuthGuard],

  },
  {
    path: 'Survey',
    loadChildren: () =>
      import('./pages/Survey/Survey.module').then((mod) => mod.SurveyModule),
      //canActivate: [AuthGuard],

  },
  {
    path: 'UserSurvey/SubmitSurvey/:id',
    loadChildren: () =>
      import('./pages/UserSurvey/UserSurvey.module').then((mod) => mod.UserSurveyModule),
  }, 
  {
    path: 'Roles',
    loadChildren: () =>
      import('./pages/Roles/role.module').then((mod) => mod.RoleModule),
      //canActivate: [AuthGuard],

     // canActivate: [AuthGuard],

  },
  /*{
    path: 'UserSurvey2',
    loadChildren: () =>
      import('./pages/UserSurvey2/UserSurvey2.module').then((mod) => mod.UserSurveyModule2),
  },
  {
    path: 'ActiveSurveyList',
    loadChildren: () =>
      import('./pages/ActiveSurveyList/ActiveSurvey.module').then((mod) => mod.ActiveSurveyModule),
  }, */
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
