// Controller para Login (componentização: classe LoginForm)
class LoginForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // cria shadow DOM
  }

  connectedCallback() {
    this.render();
    this.init();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        /* Estilos do formulário, podem usar Bootstrap via link externo ou custom */
        form {
          display: flex;
          flex-direction: column;
          
        }
        .form-label {
          margin-top: 10px;
        }
        .btn {
          margin-top: 20px;
          border-radius: 25px;
        }
      </style>
      <form id="loginForm">
        <label class="form-label" for="username">Usuário</label>
        <input type="text" id="username" placeholder="Digite seu usuário" required />
        <label class="form-label" for="password">Senha</label>
        <input type="password" id="password" placeholder="Digite sua senha" required />
        <button type="submit" class="btn btn-primary">Entrar</button>
      </form>
    `;
  }

  init() {
    const form = this.shadowRoot.getElementById('loginForm');
    form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = this.shadowRoot.getElementById('username').value;
    const password = this.shadowRoot.getElementById('password').value;

    if (username === 'admin' && password === '123') {
      sessionStorage.setItem('loggedIn', 'true');
      window.location.href = 'cadastro.html';
    } else {
      Swal.fire({ icon: 'error', title: 'Credenciais inválidas!', text: 'Usuário: admin, Senha: 123' });
    }
  }
}

customElements.define('login-form', LoginForm);