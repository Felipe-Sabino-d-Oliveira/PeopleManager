// Importar módulos
import { Pessoa } from '/src/models/Pessoa.js';
import { app } from './app.js';
import { Component } from './app.js';

class ListagemTable {
  constructor() {
    // Seleciona o tbody pelo id novo
    this.tableBody = document.getElementById('tabelaPessoasBody');
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    const pessoas = app.loadPessoas();
    const rows = pessoas.map(p => this.createRow(p)).join('');
    // Passa o id correto do tbody para renderizar
    Component.render('tabelaPessoasBody', rows);
  }

  createRow(pessoa) {
    return `
      <tr>
        <td>${pessoa.id}</td>
        <td>${pessoa.nome}</td>
        <td>${pessoa.email}</td>
        <td>${pessoa.telefone || '-'}</td>
        <td>${pessoa.cep || '-'}</td>
        <td>${pessoa.logradouro}, ${pessoa.bairro}, ${pessoa.cidade}-${pessoa.uf}</td>
        <td>
          <button class="btn btn-sm btn-warning" onclick="editar(${pessoa.id})">Editar</button>
          <button class="btn btn-sm btn-danger" onclick="deletar(${pessoa.id})">Deletar</button>
        </td>
      </tr>
    `;
  }
}

// Funções globais para editar e deletar (devido à simplicidade)
window.editar = (id) => {
  Swal.fire('Editar não implementado na versão simples. Use cadastro para atualizar.');
};

window.deletar = (id) => {
  if (confirm('Confirma exclusão?')) {
    const pessoas = app.loadPessoas();
    app.savePessoas(pessoas.filter(p => p.id !== id.toString()));
    new ListagemTable().render(); // Re-renderizar
  }
};

// Instanciar somente se a tabela existir
if (document.getElementById('tabelaPessoas')) {
  new ListagemTable();
}