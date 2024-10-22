import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaCadastroPage } from './pagina-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaCadastroPageRoutingModule {}
