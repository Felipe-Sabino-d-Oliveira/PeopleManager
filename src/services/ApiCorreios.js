// Serviço para integração com API dos Correios (usando ViaCEP)
export class ApiCorreios {
  constructor() {
    this.BASE_URL = 'https://viacep.com.br/ws/';
  }
  // Método assíncrono para buscar endereço pelo CEP
  async buscarEndereco(cep) {
    if (!cep || cep.replace(/\D/g, '').length !== 8) return null;
    try {
      const response = await fetch(`${this.BASE_URL}${cep}/json/`);
      if (!response.ok) throw new Error('Erro na requisição');
      const data = await response.json();
      if (data.erro) return null; // CEP não encontrado
      return {
        cep: data.cep,
        logradouro: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        uf: data.uf
      };
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      return null;
    }
  }
}