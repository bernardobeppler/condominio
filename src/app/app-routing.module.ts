import { MoradoresDetalheComponent } from './moradores-detalhe/moradores-detalhe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandPageComponent } from './land-page/land-page.component';
import { LoginComponent } from './login/login.component';
import { MoradoresComponent } from './moradores/moradores.component';

const routes: Routes = [
  {path: '', component: LandPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'moradores', component: MoradoresComponent},
  {path: 'moradores/detalhes/:id', component: MoradoresDetalheComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
