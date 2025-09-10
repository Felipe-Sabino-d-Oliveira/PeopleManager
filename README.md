# Sistema de Cadastro de Pessoas

Este projeto é uma aplicação web simples para cadastro, listagem e gerenciamento básico de pessoas, utilizando HTML, CSS, JavaScript e Bootstrap. A aplicação segue boas práticas de desenvolvimento orientado a objetos (OO), componentização e UX/UI, além de integrar a API dos Correios para preenchimento automático de endereço a partir do CEP.

---

## Funcionalidades

- **Tela de Login:** Simples autenticação simulada (usuário: `admin`, senha: `123`).
- **Cadastro de Pessoas:** Formulário com validação, preenchimento automático de endereço via CEP (API ViaCEP).
- **Listagem:** Visualização dos registros cadastrados com opções para exclusão (edição básica não implementada).
- **Armazenamento:** Dados persistidos no `localStorage` do navegador.
- **Boas práticas:** Uso de classes, modularização, feedback visual, responsividade e acessibilidade.

---

## Tecnologias Utilizadas

- **HTML5, CSS3 e JavaScript (ES6+)**
- **Bootstrap 5:** Framework CSS para responsividade e componentes prontos.
- **SweetAlert2:** Alertas e modais customizados.
- **ViaCEP API:** Consulta de endereço via CEP.
- **LocalStorage:** Armazenamento local para simular banco de dados.
- **Axios (opcional):** Para requisições HTTP (pode ser substituído por fetch).

---

## Estrutura do Projeto
/PeopleManager/ │ ├── /public/ │ ├── index.html # Tela de Login │ ├── cadastro.html # Tela de Cadastro │ ├── listagem.html # Tela de Listagem │ └── /assets/ │ ├── /css/ │ │ └── styles.css # Estilos customizados │ └── /js/ │ ├── app.js │ ├── login.js │ ├── cadastro.js │ └── listagem.js │ ├── /src/ │ ├── /models/ │ │ └── Pessoa.js # Classe Pessoa │ ├── /services/ │ │ └── ApiCorreios.js # Serviço para API dos Correios │ └── /utils/ │ └── Validator.js # Validações e utilitários │ └── README.md

---

## Como Executar

- Clone este repositório:

git clone https://github.com/seu-usuario/sistema-cadastro.git
cd sistema-cadastro

Abra o arquivo public/index.html em seu navegador preferido (Google Chrome, Firefox, Edge, etc).
Nota: Por ser uma aplicação front-end pura, não é necessário servidor backend para rodar localmente.

---

## Uso
- Faça login com usuário admin e senha 12-
- Cadastre pessoas preenchendo o formulário. Ao informar o CEP, o endereço será preenchido automaticamente.
- Visualize, exclua registros na tela de listagem.
- Os dados ficam salvos no navegador via localStorage.

---

## Boas Práticas Aplicadas
- Componentização: Classes JavaScript para encapsular lógica e manipulação do DOM.
- Validação: Campos obrigatórios e formatos validados no front-end.
- Feedback: Alertas claros e responsivos com SweetAlert-
- Responsividade: Layout adaptável para dispositivos móveis e desktops via Bootstrap.
- Acessibilidade: Uso de labels, placeholders e navegação intuitiva.
- Modularização: Separação clara entre modelos, serviços e utilitários.

---

## Possíveis Melhorias Futuras
- Implementar edição completa dos registros.
- Adicionar autenticação real com backend.
- Usar bundlers (Webpack, Parcel) para modularização avançada.
- Implementar testes automatizados.
- Melhorar acessibilidade (ARIA, navegação por teclado).
- Adicionar paginação e filtros na listagem.

---

## Referências
- Bootstrap 5
- SweetAlert2
- ViaCEP API
- MDN Web Docs - LocalStorage
## Autor
Felipe Sabino de Oliveira Lima - fsabino006@gmail.com