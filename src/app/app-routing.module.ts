import { MoradoresDetalheComponent } from './morador/moradores-detalhe/moradores-detalhe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandPageComponent } from './land-page/land-page.component';
import { LoginComponent } from './login/login.component';
import { MoradoresComponent } from './morador/moradores/moradores.component';
import { MoradorCadastroComponent } from './morador/morador-cadastro/morador-cadastro.component';

const routes: Routes = [
  {path: '', component: LandPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'moradores', component: MoradoresComponent},
  {path: 'moradores/detalhes/:id', component: MoradoresDetalheComponent},
  {path: 'cadastrar', component: MoradorCadastroComponent},
  {path: 'moradores/cadastrar', component: MoradorCadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
