import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnderecoService } from './endereco.service';
import { SnackBarService } from './snack-bar.service';
import { ViaCepService } from './via-cep.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [

  ],
  providers: [
    EnderecoService,
    SnackBarService,
    ViaCepService
  ]
})
export class ServicesModule { }
