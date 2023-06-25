git commit -m document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Aqui você pode adicionar a lógica de autenticação com os dados fornecidos pelo usuário
    
    console.log("Username: " + username);
    console.log("Password: " + password);
  });
  