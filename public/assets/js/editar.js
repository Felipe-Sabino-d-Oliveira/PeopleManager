import { app } from './app.js';

// Função para obter parâmetros da URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

class Editar {
  constructor() {
    this.form = document.getElementById('cadastroForm'); // ajuste para o id do seu form
    this.editId = getQueryParam('edit');
    if (this.editId) {
      this.loadPessoa();
      this.init();
    }
  }

  loadPessoa() {
    const pessoas = app.loadPessoas();
    this.pessoa = pessoas.find(p => p.id === this.editId);
    if (!this.pessoa) {
      alert('Pessoa não encontrada para edição.');
      window.location.href = 'listagem.html';
      return;
    }
    this.fillForm();
  }

  fillForm() {
    // Preencha os campos do formulário com os dados da pessoa
    this.form.nome.value = this.pessoa.nome || '';
    this.form.email.value = this.pessoa.email || '';
    this.form.telefone.value = this.pessoa.telefone || '';
    this.form.cep.value = this.pessoa.cep || '';
    this.form.logradouro.value = this.pessoa.logradouro || '';
    this.form.bairro.value = this.pessoa.bairro || '';
    this.form.cidade.value = this.pessoa.cidade || '';
    this.form.uf.value = this.pessoa.uf || '';
    // ... preencha outros campos conforme seu formulário
  }

  init() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleSubmit(e) {
    e.preventDefault();

    // Atualize os dados da pessoa com os valores do formulário
    this.pessoa.nome = this.form.nome.value.trim();
    this.pessoa.email = this.form.email.value.trim();
    this.pessoa.telefone = this.form.telefone.value.trim();
    this.pessoa.cep = this.form.cep.value.trim();
    this.pessoa.logradouro = this.form.logradouro.value.trim();
    this.pessoa.bairro = this.form.bairro.value.trim();
    this.pessoa.cidade = this.form.cidade.value.trim();
    this.pessoa.uf = this.form.uf.value.trim();
    // ... atualize outros campos conforme seu formulário

    // Salvar no localStorage
    const pessoas = app.loadPessoas();
    const index = pessoas.findIndex(p => p.id === this.editId);
    if (index !== -1) {
      pessoas[index] = this.pessoa;
      app.savePessoas(pessoas);
      Swal.fire('Sucesso', 'Cadastro atualizado com sucesso!', 'success').then(() => {
        window.location.href = 'listagem.html';
      });
    } else {
      Swal.fire('Erro', 'Não foi possível atualizar o cadastro.', 'error');
    }
  }
}

// Instancia a classe se estiver na página de cadastro
if (document.getElementById('cadastroForm')) {
  new Editar();
}