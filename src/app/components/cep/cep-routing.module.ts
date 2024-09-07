import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaCepComponent } from './busca-cep/busca-cep.component';

const routes: Routes = [
  {
    path: '',
    component: BuscaCepComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CepRoutingModule {}
