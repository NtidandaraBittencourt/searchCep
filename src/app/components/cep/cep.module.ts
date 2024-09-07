import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaCepComponent } from './busca-cep/busca-cep.component';
import { ListaEnderecosComponent } from './lista-enderecos/lista-enderecos.component';
import { CepRoutingModule } from './cep-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CepRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BuscaCepComponent, ListaEnderecosComponent]
})
export class CepModule { }
