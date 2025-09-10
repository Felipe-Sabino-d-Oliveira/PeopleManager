// Define a classe Pessoa usando OO para representar entidade
export class Pessoa {
  constructor(id, nome, email, telefone, cep, logradouro, bairro, cidade, uf) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.cep = cep;
    this.logradouro = logradouro;
    this.bairro = bairro;
    this.cidade = cidade;
    this.uf = uf;
  }
  // Método para validar os campos obrigatórios (exemplo de encapsulamento)
  validar() {
    const erros = [];
    if (!this.nome) erros.push('Nome é obrigatório');
    if (!this.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(this.email)) erros.push('Email inválido');
    if (!this.cep) erros.push('CEP é obrigatório');
    return erros;
  }
  // Método para converter para objeto simples (para storage)
  toObj() {
    return { ...this };
  }
  // Static method para criar pessoa a partir de objeto
  static fromObj(obj) {
    return new Pessoa(obj.id, obj.nome, obj.email, obj.telefone, obj.cep, obj.logradouro, obj.bairro, obj.cidade, obj.uf);
  }
}