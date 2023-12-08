function validateEmail() {
    // Obtenha o valor do campo de e-mail
    var email = document.getElementById('email').value;

    // Crie uma expressão regular para validar o endereço de e-mail
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Teste se o e-mail atende à expressão regular
    if (emailRegex.test(email)) {
        window.location.replace("index__success.html")
    } else {
        var erroEmail = document.getElementById("error_e")
        erroEmail.style.display = "block";

        var errorEmail = document.getElementById("email")
        errorEmail.style.border = "1px solid #ff6257";
        errorEmail.style.color = "#ff6257";
    }
}