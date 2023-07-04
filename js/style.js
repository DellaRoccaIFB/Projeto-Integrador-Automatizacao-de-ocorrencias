document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Aqui você pode adicionar a lógica de autenticação com os dados fornecidos pelo usuário
    
    console.log("Username: " + username);
    console.log("Password: " + password);
  });
  // Localize a div com a classe "LogoIF"
  var logoDiv = document.querySelector('.LogoIF');

  // Crie um elemento de imagem
  var logoImg = document.createElement('img');
  logoImg.src = 'caminho/para/sua/imagem.png';
  logoImg.alt = 'Logo';

  // Defina o estilo para centralizar a imagem
  logoImg.style.display = 'block';
  logoImg.style.margin = 'auto';
  logoImg.style.position = 'absolute';
  logoImg.style.top = '0';
  logoImg.style.bottom = '0';
  logoImg.style.left = '0';
  logoImg.style.right = '0';

  // Insira a imagem dentro da div "LogoIF"
  logoDiv.appendChild(logoImg);

  function acessar() {
    // Aqui você pode adicionar a lógica para o evento de clique do botão "Acessar"
    // Por exemplo, redirecionar o usuário para outra página ou executar outras ações
    window.location.href = "BemVindo.html";
}