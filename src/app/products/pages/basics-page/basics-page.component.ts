import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styles: ``,
})
export class BasicsPageComponent {
  nameLower: string = 'bryan';
  nameUpper: string = 'BRYAN';
  fullName: string = 'bRyAn mAnCiLlA';

  public customDate: Date = new Date();
}
