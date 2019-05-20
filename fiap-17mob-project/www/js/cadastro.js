
// Funções
function btmRegistrar() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("psw").value;
    var passwordRepeat = document.getElementById("psw-repeat").value;

    if(password === passwordRepeat) {
        criarUsuario(email, password);
    } else {
        alert('As senhas não correspondem');
    }
}

function btmVoltarCadastro() {
    window.location.href = "login.html"
}

function criarUsuario(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(success){
        console.log('Login com sucesso', success);
        window.location.href = "login.html"
    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
        alert(errorMessage)
    });
}