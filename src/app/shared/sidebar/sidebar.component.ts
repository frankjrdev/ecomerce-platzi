import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../modules/home/services/categorie/categories.service';
import { Category } from '../../interfaces/category.interface';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  listCategories!: Category[];

  constructor(private categoriesServices: CategoriesService) { }

  ngOnInit(): void {
    this.loadAllCategories();
  }

  async loadAllCategories(): Promise<any> {
    this.listCategories = await firstValueFrom(this.categoriesServices.getAllCategories$());
    console.log(this.listCategories);

  }

}
