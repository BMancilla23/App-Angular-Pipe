import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: ``,
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      id: 1,
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      id: 2,
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      id: 3,
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      id: 4,
      name: 'Robin',
      canFly: false,
      color: Color.red,
    },
    {
      id: 5,
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green,
    },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }
}
