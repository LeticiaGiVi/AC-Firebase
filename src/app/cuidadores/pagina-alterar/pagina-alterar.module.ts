import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaAlterarPageRoutingModule } from './pagina-alterar-routing.module';

import { PaginaAlterarPage } from './pagina-alterar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaAlterarPageRoutingModule
  ],
  declarations: [PaginaAlterarPage]
})
export class PaginaAlterarPageModule {}
