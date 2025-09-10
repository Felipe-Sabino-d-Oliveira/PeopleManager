// Importa se estiver usando módulos, mas aqui usa functions diretamente devido a compatibilidade
// Controller para Login (componentização: classe LoginForm)
class LoginForm extends HTMLElement {
  constructor() {
    super();
    this.form = document.getElementById('loginForm');
    this.init();
  }
  init() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }
  handleSubmit(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Simulação simples: usuário 'admin', senha '123'
    if (username === 'admin' && password === '123') {
      sessionStorage.setItem('loggedIn', 'true');
      window.location.href = 'cadastro.html'; // Redirecionar para cadastro
    } else {
      Swal.fire({ icon: 'error', title: 'Credenciais inválidas!', text: 'Usuário: admin, Senha: 123' });
    }
  }
}
// Instanciar se o form existir
if (document.getElementById('loginForm')) {
  new LoginForm();
}