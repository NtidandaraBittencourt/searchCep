import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnderecoService } from 'src/app/services/endereco.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { ViaCepService } from 'src/app/services/via-cep.service';
import { Endereco } from 'src/app/shared/models/endereco.model';

@Component({
  selector: 'app-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.scss']
})
export class BuscaCepComponent {
  buscaCepForm: FormGroup;
  endereco: Endereco | undefined;
  carregando: boolean = false;
  
  constructor(
    private formbuilder: FormBuilder, 
    private viaCepService: ViaCepService,
    private enderecoService: EnderecoService,
    private snackBarService: SnackBarService
  ) {
    this.buscaCepForm = this.formbuilder.group({
      cep: ['', [Validators.required, Validators.pattern('[0-9]{5}-?[0-9]{3}')]]
    });
  }

  buscarCep() {
    if (this.buscaCepForm.valid) {
      this.carregando= true;
      const cep = this.buscaCepForm.value.cep;
      this.viaCepService.buscaCep(cep).subscribe((data) => {
        if(data.erro) {
          this.hasError();
        } else {
          this.resetForm();
          this.endereco = data;
          this.salvarEndereco(data);
        }
        this.carregando = false;
      },
      error => {
        this.hasError()
        console.error('CEP não encontrado', error);
      }
    )}
  }

  resetForm() {
    const cepControl = this.buscaCepForm.get('cep');
    if (cepControl) {
      cepControl.markAsPristine();
      cepControl.markAsUntouched();
      cepControl.setErrors(null);
    }
  }

  hasError() {
    this.carregando = false;
    this.snackBarService.openSnackBar('CEP não encontrado', 'error');
    
  }

  salvarEndereco(endereco: Endereco) {
    this.enderecoService.salvarEndereco(endereco).subscribe(() =>{
      this.snackBarService.openSnackBar('CEP Adicionado a sua lista de endereços', 'success');
      this.enderecoService.notificarEnderecoAtualizado();
      this.carregando = false;
    }, error => {
      this.snackBarService.openSnackBar("Não foi possivel adicionar o CEP na sua lista", 'error');
      console.log('Erro ao salvar endereço', error);
      this.carregando = false;
    })
  }
}
