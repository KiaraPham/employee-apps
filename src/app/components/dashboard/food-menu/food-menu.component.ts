import {Component, Input} from '@angular/core';

@Component({
  selector: 'food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.scss']
})


export class FoodMenuComponent {
  @Input() icon: string;
  foodItems = [
    {
      name: 'Burger',
      price: 32,
      image: '../../../../assets/images/burger.png'
    },
    {
      name: 'Pizza',
      price: 10,
      image: '../../../../assets/images/pizza.jpeg'
    },
    {
      name: 'Drinks',
      price: 12,
      image: '../../../../assets/images/drink.jpg'
    },
    {
      name: 'Drinks',
      price: 12,
      image: '../../../../assets/images/drink.jpg'
    }
  ];

  constructor() {

  }
}

