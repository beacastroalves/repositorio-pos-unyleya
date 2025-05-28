// Variaveis do formulário e inputs
const form = document.getElementById('inscricaoForm');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const confirmarSenhaInput = document.getElementById('confirmarSenha');
const areaInteresseSelect = document.getElementById('areaInteresse');

// Variaveis dos erros
const nomeError = document.getElementById('nomeError');
const emailError = document.getElementById('emailError');
const senhaError = document.getElementById('senhaError');
const confirmarSenhaError = document.getElementById('confirmarSenhaError');
const areaInteresseError = document.getElementById('areaInteresseError');

document.addEventListener('DOMContentLoaded', function() {
  // Função para exibir mensagem de erro
  function mostrarErro(element, message) {
    element.textContent = message;
  }

  // Função para limpar mensagem de erro
  function limparErro(element) {
    element.textContent = '';
  }

  // Função para validar o nome
  function validarNome() {
    if (nomeInput.value.trim() === '') {
      mostrarErro(nomeError, 'O nome é obrigatório.');
      return false;
    } else {
      limparErro(nomeError);
      return true;
    }
  }

  // Função para validar o email
  function validarEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === '') {
      mostrarErro(emailError, 'O e-mail é obrigatório.');
      return false;

    } else if (!emailRegex.test(emailInput.value)) {
      mostrarErro(emailError, 'Por favor, insira um e-mail válido.');
      return false;

    } else {
      limparErro(emailError);
      return true;
    }
  }

  // Função para validar a senha
  function validarSenha() {
    if (senhaInput.value.length < 6) {
      mostrarErro(senhaError, 'A senha deve ter no mínimo 6 caracteres.');
      return false;

    } else {
      limparErro(senhaError);
      return true;
    }
  }

  // Função para validar a confirmação de senha
  function validarConfirmarSenha() {
    if (confirmarSenhaInput.value === '') {
      mostrarErro(confirmarSenhaError, 'A confirmação de senha é obrigatória.');
      return false;

    } else if (confirmarSenhaInput.value !== senhaInput.value) {
      mostrarErro(confirmarSenhaError, 'As senhas não coincidem.');
      return false;

    } else {
      limparErro(confirmarSenhaError);
      return true;
    }
  }

  // Função para validar a área de interesse
  function validarAreaInteresse() {
    if (areaInteresseSelect.value === '') {
      mostrarErro(areaInteresseError, 'Por favor, selecione uma área de interesse.');
      return false;

    } else {
      limparErro(areaInteresseError);
      return true;
    }
  }

  // Adicionar listeners para validação em tempo real (opcional, mas recomendado)
  nomeInput.addEventListener('input', validarNome);
  emailInput.addEventListener('input', validarEmail);
  senhaInput.addEventListener('input', validarSenha);
  confirmarSenhaInput.addEventListener('input', validarConfirmarSenha);
  areaInteresseSelect.addEventListener('change', validarAreaInteresse);

  // Adicionar um listener para o evento de submit do formulário
  form.addEventListener('submit', function(event) {
    // Previne o envio padrão do formulário
    event.preventDefault();

    // Executar as validações
    const isNomeValid = validarNome();
    const isEmailValid = validarEmail();
    const isSenhaValid = validarSenha();
    const isConfirmarSenhaValid = validarConfirmarSenha();
    const isAreaInteresseValid = validarAreaInteresse();

    // Se todas as validações passarem, o formulário pode ser enviado
    if (isNomeValid && isEmailValid && isSenhaValid && isConfirmarSenhaValid && isAreaInteresseValid) {
      alert('Formulário enviado com sucesso!');
      window.location.href = '/'
      // form.submit();
    } else {
      alert('Por favor, corrija os erros no formulário.');
    }
  });
});