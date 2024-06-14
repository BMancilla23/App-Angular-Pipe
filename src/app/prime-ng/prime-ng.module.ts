import { NgModule } from '@angular/core';
/* import { MenuModule } from 'primeng/menu'; */
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';

@NgModule({
  exports: [
    PanelModule,
    MenubarModule,
    CardModule,
    FieldsetModule,
    ButtonModule /* MenuModule */,
    ToolbarModule,
    TableModule,
  ],
})
export class PrimeNgModule {}
