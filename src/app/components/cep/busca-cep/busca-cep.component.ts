import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViaCepService } from 'src/app/services/via-cep.service';
import { Endereco } from 'src/app/shared/models/endereco.model';

@Component({
  selector: 'app-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.css']
})
export class BuscaCepComponent {
  cepForm: FormGroup;
  endereco: Endereco | undefined;
  
  constructor(private fb: FormBuilder, private viaCepService: ViaCepService) {
    this.cepForm = this.fb.group({
      cep: ['', [Validators.required, Validators.pattern('[0-9]{5}-?[0-9]{3}')]]
    });
  }

  buscarCep() {
    if (this.cepForm.valid) {
      const cep = this.cepForm.value.cep;
      this.viaCepService.buscaCep(cep).subscribe(data => {
        this.endereco = data;
      });
    }
  }
}
