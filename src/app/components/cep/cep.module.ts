import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaCepComponent } from './busca-cep/busca-cep.component';
import { ListaEnderecosComponent } from './lista-enderecos/lista-enderecos.component';
import { CepRoutingModule } from './cep-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CepRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgxMaskModule.forRoot(),
    SharedModule,
    MatSnackBarModule
  ],
  declarations: [BuscaCepComponent, ListaEnderecosComponent]
})
export class CepModule { }
