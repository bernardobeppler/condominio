import { MoradorStorageService } from 'src/app/morador/moradores/morador-storage.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LandPageComponent } from './land-page/land-page.component';
import { LoginComponent } from './login/login.component';
import { MoradoresComponent } from './morador/moradores/moradores.component';
import { MoradoresDetalheComponent } from './morador/moradores-detalhe/moradores-detalhe.component';
import { MoradorCadastroComponent } from './morador/morador-cadastro/morador-cadastro.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LandPageComponent,
    LoginComponent,
    MoradoresComponent,
    MoradoresDetalheComponent,
    MoradorCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MoradorStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
