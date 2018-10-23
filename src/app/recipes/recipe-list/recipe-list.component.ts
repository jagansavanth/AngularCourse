import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] =[
    new Recipe('A Test Recipe', 'This is a test recipe', 'https://images.unsplash.com/photo-1519996409144-56c88c9aa612?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3637911ee7fd91ef9087dae6efc0114f&auto=format&fit=crop&w=800&q=60'),
    new Recipe('Another Test Recipe', 'This is another rest Recipe', 'https://images.unsplash.com/photo-1535603709739-7e8fd50e015d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2ff87d621bef46dff562d5d9cf3b9e69&auto=format&fit=crop&w=800&q=60')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

  }

}
