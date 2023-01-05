import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component'
import { FooterComponent } from '../../shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BestSellersComponent } from './pages/best-sellers/best-sellers.component';
import { CategoriesComponent } from '../home/pages/categories/categories.component';
import { SalesComponent } from './pages/sales/sales.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    HomeComponent,
    BestSellersComponent,
    CategoriesComponent,
    SalesComponent,
    ProfileComponent,
    ProductCardComponent,
  ]
  ,
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgOptimizedImage,
    NgxPaginationModule
  ]
})
export class HomeModule { }
