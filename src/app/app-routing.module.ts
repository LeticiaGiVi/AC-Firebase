import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pets/pagina-principal',
    loadChildren: () => import('./pets/pagina-principal/pagina-principal.module').then( m => m.PaginaPrincipalPageModule)
  },
  {
    path: 'pets/pagina-cadastro',
    loadChildren: () => import('./pets/pagina-cadastro/pagina-cadastro.module').then( m => m.PaginaCadastroPageModule)
  },
  {
    path: 'pets/pagina-alterar/:id',
    loadChildren: () => import('./pets/pagina-alterar/pagina-alterar.module').then( m => m.PaginaAlterarPageModule)
  },
  {
    path: 'cuidadores/pagina-principal',
    loadChildren: () => import('./cuidadores/pagina-principal/pagina-principal.module').then( m => m.PaginaPrincipalPageModule)
  },
  {
    path: 'cuidadores/pagina-cadastro',
    loadChildren: () => import('./cuidadores/pagina-cadastro/pagina-cadastro.module').then( m => m.PaginaCadastroPageModule)
  },
  {
    path: 'cuidadores/pagina-alterar/:id',
    loadChildren: () => import('./cuidadores/pagina-alterar/pagina-alterar.module').then( m => m.PaginaAlterarPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
