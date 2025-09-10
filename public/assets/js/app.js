// Arquivo principal: módulo base para commons e iniciadores
class App {
  constructor() {
    this.storageKey = 'pessoas';
  }
  // Carregar pessoas do localStorage
  loadPessoas() {
    return JSON.parse(localStorage.getItem(this.storageKey)) || [];
  }
  // Salvar pessoas no localStorage
  savePessoas(pessoas) {
    localStorage.setItem(this.storageKey, JSON.stringify(pessoas));
  }
  // Gerar ID único simples
  generateId() {
    return Date.now().toString();
  }
  // Função utilitária para mostrar loading
  showSpinner(button) {
    button.innerHTML = '<span class="spinner me-2"></span>Salvando...';
  }
  // Esconder loading e restaurar texto
  hideSpinner(button, text) {
    button.innerHTML = text;
  }
}
// Instancia app global (singleton)
const app = new App();
// Component base para formar reutilizáveis (componentização funcional)
class Component {
  static render(elementId, content) {
    document.getElementById(elementId).innerHTML = content;
  }
  static append(elementId, content) {
    document.getElementById(elementId).insertAdjacentHTML('beforeend', content);
  }
}
export { app, Component };