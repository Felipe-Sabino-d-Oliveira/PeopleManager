// Importar módulos (usando relative paths, mas em produção considerar bundler)
import { Pessoa } from '../../src/models/Pessoa.js';
import { ApiCorreios } from '../../src/services/ApiCorreios.js';
import { Validator } from '../../src/utils/Validator.js';
import { app } from './app.js';
class CadastroForm {
  constructor() {
    this.form = document.getElementById('cadastroForm');
    this.cepField = document.getElementById('cep');
    this.init();
  }
  init() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
    this.cepField.addEventListener('blur', this.buscarEndereco.bind(this));
    this.cepField.addEventListener('input', this.formatCep.bind(this));
    document.getElementById('telefone').addEventListener('input', this.formatTelefone.bind(this));
  }
  formatCep() {
    let cep = this.cepField.value.replace(/\D/g, '');
    cep = cep.replace(/(\d{5})(\d)/, '$1-$2');
    this.cepField.value = cep;
  }
  async buscarEndereco() {
    const cep = this.cepField.value.replace(/\D/g, '');
    if (!Validator.isCepValid(cep)) return;
    const api = new ApiCorreios();
    const endereco = await api.buscarEndereco(cep);
    if (endereco) {
      document.getElementById('logradouro').value = endereco.logradouro;
      document.getElementById('bairro').value = endereco.bairro;
      document.getElementById('cidade').value = endereco.cidade;
      document.getElementById('uf').value = endereco.uf;
    } else {
      Validator.showAlert('CEP não encontrado ou inválido');
    }
  }
  formatTelefone() {
    const telefone = document.getElementById('telefone');
    telefone.value = Validator.formatPhone(telefone.value);
  }
  async handleSubmit(e) {
    e.preventDefault();
    const pessoa = new Pessoa(
      app.generateId(),
      document.getElementById('nome').value,
      document.getElementById('email').value,
      document.getElementById('telefone').value,
      document.getElementById('cep').value,
      document.getElementById('logradouro').value,
      document.getElementById('bairro').value,
      document.getElementById('cidade').value,
      document.getElementById('uf').value
    );
    const erros = pessoa.validar();
    if (erros.length > 0) {
      Validator.showAlert(erros.join('\n'));
      return;
    }
    const pessoas = app.loadPessoas();
    pessoas.push(pessoa.toObj());
    app.savePessoas(pessoas);
    Validator.showAlert('Pessoa cadastrada com sucesso!', 'success');
    this.form.reset();
  }
}
// Instanciar se a página tiver o form
if (document.getElementById('cadastroForm')) {
  new CadastroForm();
}