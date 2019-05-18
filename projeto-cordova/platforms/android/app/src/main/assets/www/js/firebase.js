function register(){
    var name = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('emailregister').value;
    var password = document.getElementById('passwordregister').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(){
      verify()
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
}

function validate(){
    var emaillogin = document.getElementById('email').value;
    var passwordlogin = document.getElementById('password').value;
    

    firebase.auth().signInWithEmailAndPassword(emaillogin, passwordlogin)
    .then(function(){
      
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
}

function observador(){

  

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('Usuário ativo...')
            mostra(user);
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;

          
          
          console.log('****************')
          console.log(user.emailVerified)
          console.log('****************')

          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          console.log('Usuário inativo...')
          var conteudo = document.getElementById('content');
          conteudo.innerHTML = '';
        }
      });
      
}

window.onload = function() {
  observador();
};

function mostra(user){
    var user = user;
    var conteudo = document.getElementById('content');
    if(user.emailVerified){
      var content = document.getElementById("content");
      
      document.getElementById("inicio").classList.remove('page-active');
      document.getElementById("content").classList.add('page-active');
      conteudo.innerHTML =  `
      <p>Bem-vindo ${user.email}</p>
      
  
      <button btn btn-primary onclick="fechar()">Fechar</button>
      `;
    }
    
}

function fechar(){
  firebase.auth().signOut()
  .then(function(){
    document.getElementById("content").classList.remove('page-active');
    document.getElementById("inicio").classList.add('page-active');
    console.log('Saindo...')
  })
  .catch(function(error){
    console.log(error)
  })
}

function verify(){
  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
    // Email sent.
    
    console.log('Enviando e-mail...');
  }).catch(function(error) {
    // An error happened.
    console.log('Erro ao enviar e-mail...');
  });
}

function activePage(){
  $('.targetPage').click(function(){
      var target = $(this).attr('dt-page');
      $('#inicio').removeClass('page-active');
      $(target).addClass('page-active');
  });
}
activePage();
