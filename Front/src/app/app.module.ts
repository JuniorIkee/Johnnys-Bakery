import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterpageComponent } from './estrutura/masterpage/masterpage.component';
import { MenuLateralComponent } from './estrutura/menu-lateral/menu-lateral.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IngredienteComponent } from './ingrediente/ingrediente.component';
import { FormsModule } from '@angular/forms';
import { MarcaComponent } from './marca/marca.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterpageComponent,
    MenuLateralComponent,
    ConfiguracoesComponent,
    DashboardComponent,
    IngredienteComponent,
    MarcaComponent,
    FornecedorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
