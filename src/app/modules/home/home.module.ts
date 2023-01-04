import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component'
import { FooterComponent } from '../../shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BestSellersComponent } from './pages/best-sellers/best-sellers.component';
import { CategoriesComponent } from '../home/pages/categories/categories.component';
import { SalesComponent } from './pages/sales/sales.component';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({
  declarations: [
    HomeComponent,
    BestSellersComponent,
    CategoriesComponent,
    SalesComponent,
    ProfileComponent,
  ]
  ,
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
