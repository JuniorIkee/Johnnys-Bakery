import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MasterpageComponent } from './estrutura/masterpage/masterpage.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { IngredienteComponent } from './ingrediente/ingrediente.component';
import { MarcaComponent } from './marca/marca.component';

const routes: Routes = [
  { path:"",
    component: MasterpageComponent,
    children:
    [
      { path:"", component: DashboardComponent},
      { path:"configuracoes", component: ConfiguracoesComponent},
      { path:"ingrediente", component: IngredienteComponent},
      { path:"fornecedor", component: FornecedorComponent},
      { path:"marca", component: MarcaComponent},
    ] 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
