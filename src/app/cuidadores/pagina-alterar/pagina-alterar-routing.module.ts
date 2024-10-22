import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaAlterarPage } from './pagina-alterar.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaAlterarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaAlterarPageRoutingModule {}
