import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './Common/home/home.component';
import { NewarrivalsComponent } from './Common/newarrivals/newarrivals.component';
import { ObservabledemoComponent } from './Common/observabledemo/observabledemo.component';
import { PagenotfoundComponent } from './Common/pagenotfound/pagenotfound.component';
import { ProductsComponent } from './Common/products/products.component';
import { ResumeComponent } from './Common/resume/resume.component';
import { AddEmployeeComponent } from './EmployeeData/add-employee/add-employee.component';
import { EmpDeatilsComponent } from './EmployeeData/emp-deatils/emp-deatils.component';
import { EmplistComponent } from './EmployeeData/emplist/emplist.component';
import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './Login/register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'addemployee',component:AddEmployeeComponent},
  {path:'emplist',component:EmplistComponent},
  {path:'editemp/:id',component:AddEmployeeComponent},
  {path:'obs',component:ObservabledemoComponent},
  {path:'resume',component:ResumeComponent},
  {path:'saleproducts',component:ProductsComponent},
  {path:'newarrivals',
  component:NewarrivalsComponent,
  canActivate:[AuthGuard]
  },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingcomp=[HomeComponent,AddEmployeeComponent,EmplistComponent,PagenotfoundComponent,EmpDeatilsComponent]
