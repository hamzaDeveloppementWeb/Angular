import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipePassedFromRecipeItem: Recipe;
  recipes: Recipe[] = [
    new Recipe('Tacos mexicains', 'Ceci est la recette du tacos mexicain',
      'https://fiveprestige.fr/wp-content/uploads/2019/01/tacos-traiteur-mexicain-animation-burrito.jpg'),
    new Recipe('Pain', 'Ceci est la recette du pain',
      'https://resize-elle.ladmedia.fr/r/618,769,force,ffffff/img/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/pate-a-pain-2987449/56298527-1-fre-FR/pate-a-pain.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
