// Funções
function btmLogin() {
    var email = document.getElementById('emailLogin').value
    var password = document.getElementById('senhaLogin').value

    //firebase method
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(success){
        console.log(success)
        window.location.href = "home.html"
    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
    });
}

function btmCadastrar() {
    window.location.href = "cadastro.html"
}