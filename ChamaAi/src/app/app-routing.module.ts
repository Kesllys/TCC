import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'introducao',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadChildren: () => import('./servico/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./servico/tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'tabs3',
    loadChildren: () => import('./servico/tab3/tab3.module').then(m => m.Tab3PageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./telasIniciais/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./telasIniciais/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'introducao',
    loadChildren: () => import('./telasIniciais/introducao/introducao.module').then(m => m.IntroducaoPageModule)
  },
  {
    path: 'login-cadastro',
    loadChildren: () => import('./telasIniciais/login-cadastro/login-cadastro.module').then(m => m.LoginCadastroPageModule)
  },
  {
    path: 'moto-taxi',
    loadChildren: () => import('./servico/moto-taxi/moto-taxi.module').then( m => m.MotoTaxiPageModule)
  },
  {
    path: 'esqueci-senha',
    loadChildren: () => import('./telasIniciais/esqueci-senha/esqueci-senha.module').then( m => m.EsqueciSenhaPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
