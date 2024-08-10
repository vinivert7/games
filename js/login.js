const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

// Inicialmente, desabilita o botão se o campo estiver vazio
button.setAttribute('disabled', '');

// Função para validar o campo de entrada
const validateInput = ({ target }) => {
  // Verifica se o campo não está vazio
  if (target.value.trim().length > 3) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
};

// Função para lidar com o envio do formulário
const handleSubmit = (event) => {
  // Impede o envio padrão do formulário
  event.preventDefault();

  // Armazena o nome do input no localStorage
  localStorage.setItem('player', input.value.trim());
  // Redireciona para a página do jogo
  window.location = 'game.html';
};

// Adiciona validação
input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
