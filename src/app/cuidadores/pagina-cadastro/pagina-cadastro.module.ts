import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaCadastroPageRoutingModule } from './pagina-cadastro-routing.module';

import { PaginaCadastroPage } from './pagina-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaCadastroPageRoutingModule
  ],
  declarations: [PaginaCadastroPage]
})
export class PaginaCadastroPageModule {}
