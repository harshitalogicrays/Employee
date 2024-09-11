import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule,rountingcomp } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './EmployeeData/employee/employee.component';
import { CustomDirective } from './shared/custom.directive';
import { EmpCountComponent } from './EmployeeData/emp-count/emp-count.component';
import { ParentlifecycleComponent } from './parentlifecycle/parentlifecycle.component';
import { ChildlifecycleComponent } from './childlifecycle/childlifecycle.component';
import { TitlePipe } from './shared/title.pipe';
import { ExpPipe } from './shared/exp.pipe';
import { TotalsalPipe } from './shared/totalsal.pipe';
import { FilterPipe } from './shared/filter.pipe';
import { EmpserviceService } from './shared/empservice.service';
import { ContactusComponent } from './Comman/contactus/contactus.component';
import { NotificationComponent } from './Comman/notification/notification.component';
import { CommunicationService } from './shared/communication.service';
import { CounterComponent } from './Comman/counter/counter.component';
import { ProductsComponent } from './Common/products/products.component';
import { ProductWidgetComponent } from './Common/product-widget/product-widget.component';
import { IfdirectiveDirective } from './shared/ifdirective.directive';
import { ValidationruleDirective } from './shared/validationrule.directive';
import { ResumeComponent } from './Common/resume/resume.component';
import { ServicedemoComponent } from './Common/servicedemo/servicedemo.component';
import { HeaderComponent } from './Common/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ObservabledemoComponent } from './Common/observabledemo/observabledemo.component';
import { RxjsoperatorsComponent } from './Common/rxjsoperators/rxjsoperators.component';
import { SubjectComponent } from './Common/subject/subject.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { NewarrivalsComponent } from './Common/newarrivals/newarrivals.component';
import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './Login/register/register.component'
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './shared/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CustomDirective,
    EmpCountComponent,
    ParentlifecycleComponent,
    ChildlifecycleComponent,
    TitlePipe,
    ExpPipe,
    TotalsalPipe,
    FilterPipe,
    ContactusComponent,
    NotificationComponent,
    CounterComponent,
    ProductsComponent,
    ProductWidgetComponent,
    IfdirectiveDirective,
    ValidationruleDirective,
    ResumeComponent,
    ServicedemoComponent,
    HeaderComponent,
    rountingcomp,
    ObservabledemoComponent,
    RxjsoperatorsComponent,
    SubjectComponent,
    NewarrivalsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule, BrowserAnimationsModule,
    CarouselModule.forRoot(),AlertModule.forRoot(),HttpClientModule
  ],
  providers: [CommunicationService,AuthGuard,
  {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
