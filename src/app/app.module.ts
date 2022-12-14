import { MoradorStorageService } from 'src/app/services/morador-storage.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LandPageComponent } from './land-page/land-page.component';
import { MoradoresComponent } from './morador/moradores/moradores.component';
import { MoradorCadastroComponent } from './morador/morador-cadastro/morador-cadastro.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LandPageComponent,
    MoradoresComponent,
    MoradorCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MoradorStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
