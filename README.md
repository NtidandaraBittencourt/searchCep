# Teste Front-end - SCCON

Este projeto é uma aplicação Angular utilizando a versão 6, com material Angular para busca de CEPs usando a API ViaCEP. Ele segue a estrutura modular, utilizando Lazy Loading e Reactive Forms.

## Instruções para rodar o projeto

1. Clone o repositório: `https://github.com/NtidandaraBittencourt/searchCep`
2. Instale as dependências: `npm install`
3. Rode o servidor de desenvolvimento: `ng serve`
4. Rode o NPM json serve: `json-server --watch db.json --port 3000`
4. Acesse o projeto em `http://localhost:4200`

## Principais Funcionalidades

- Busca de CEP com validação e máscara
- Listagem de endereços pesquisados com opção de exclusão
- Persistência dos dados no `NPM json serve`

## Principais recursos e desafios

#### Principais recursos

- Componentes: (Onde estão descritos os componentes utilizados nesse teste(busca-cep, lista-endereco, home), reutilizaveis(Header, footer, loading, snack-bar, table))

- Módulos: Modulos que agrupam os componentes, serviços e shared, deixando a gestão e entendimento da applicação mais assertiva e mais fácil de ler.

- Diretivas: ngIf, ngFor e ngClass, pra controle de apresentação de elementos e estilo.

- Serviços e ID: serviços pra requisições, criação de uma classe abstrata pra requisição e gestão das requisições HTTP, e  um service pra controle dos alerts pro usuários.

- Rotas: Configuração do roteamento entre as paginas da aplicação, concentrando em duas rotas, a de HOME e de BUSCA-CEP,, que centraliza os seus respectivos componentes.

- Data Binding: Combinando a logica desenvolvida nos components, com o template html.

- Formulário: Seguindo o solicitado no PDF, foi utilizado o Reactive Form.

- HTTP Client: Pra fazer as requisições pra API

- Lazy Loading: Carregamento de cada modulo separadamente.


#### Desafios
- Estrutura de roteamento, por ser diferente deu um pouco de trabalho;
- Extrair a logo do PDF
- Criar uma classe abstrata pra requisições HTTP, entender o conceito e implementação utilizando Observable pra reativida, acabou dando um pouco mais de dificuldade pra entender o conceito e real utilidade
- As facillidades e modos de utilizar os RxJS, compreender quais as facilidades que ele apresenta ao manipular as eventsEmitters, e a propagação de dados.

####
