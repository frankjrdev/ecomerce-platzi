import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SalesComponent } from './pages/sales/sales.component';
import { BestSellersComponent } from './pages/best-sellers/best-sellers.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'sales',
    component: SalesComponent
  },
  {
    path: 'bestsellers',
    component: BestSellersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
