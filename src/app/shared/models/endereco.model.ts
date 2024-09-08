export interface Endereco {
  [x: string]: any;
  id: string;
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  estado: string;
  ddd: string;
  uf: string;
}