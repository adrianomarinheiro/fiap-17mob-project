// Funções
function btmLogout() {
    firebase.auth().signOut().then(function () {
        window.location.href = "login.html"
    }).catch(function (error) {
        alert(error)
    });
}

function btmAlterarPerfil() {
    window.location.href = "perfil.html"
}

function btmNoticias() {
    window.location.href = "noticias.html"
}