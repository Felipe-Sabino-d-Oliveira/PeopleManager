// Utilitário para validações gerais
export class Validator {
  static isEmailValid(email) {
    const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return regex.test(email);
  }
  static isCepValid(cep) {
    return cep.replace(/\D/g, '').length === 8;
  }
  static formatPhone(telefone) {
    // Formata telefone brasileiro
    const cleaned = telefone.replace(/\D/g, '');
    if (cleaned.length === 11) {
      return `(${cleaned.slice(0,2)}) ${cleaned.slice(2,7)}-${cleaned.slice(7)}`;
    }
    return telefone;
  }
  static showAlert(message, type = 'error') {
    // Usa SweetAlert2 se disponível, senão alert simples
    if (typeof Swal !== 'undefined') {
      Swal.fire({ icon: type, title: message });
    } else {
      alert(message);
    }
  }
}