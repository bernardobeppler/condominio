import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandPageComponent } from './land-page/land-page.component';
import { MoradoresComponent } from './morador/moradores/moradores.component';
import { MoradorCadastroComponent } from './morador/morador-cadastro/morador-cadastro.component';

const routes: Routes = [
  {path: '', component: LandPageComponent},
  {path: 'moradores', component: MoradoresComponent},
  {path: 'cadastrar', component: MoradorCadastroComponent},
  {path: 'moradores/cadastrar', component: MoradorCadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
