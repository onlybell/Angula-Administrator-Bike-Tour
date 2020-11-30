import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TourProductsComponent } from './tour-products/tour-products.component'
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MemberComponent } from './member/member.component';
import { TourProductDetailComponent } from './tour-product-detail/tour-product-detail.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { TourProductRegisterComponent } from './tour-product-register/tour-product-register.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthguardGuard]  },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthguardGuard] },
  { path: 'boookingDetail/:bIdx', component: BookingDetailComponent, canActivate: [AuthguardGuard] },
  { path: 'tourProducts', component: TourProductsComponent, canActivate: [AuthguardGuard]},
  { path: 'tourProductDetail/:pIdx', component: TourProductDetailComponent, canActivate: [AuthguardGuard] },
  { path: 'tourProductRegister', component: TourProductRegisterComponent, canActivate: [AuthguardGuard] },
  { path: 'contactUs', component: ContactUsComponent, canActivate: [AuthguardGuard]},
  { path: 'member', component: MemberComponent, canActivate: [AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
