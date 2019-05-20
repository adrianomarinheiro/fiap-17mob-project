
function btmAtualizarFoto() {

    var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        targetWidth: 720,
        correctOrientation: true
    }

    navigator.camera.getPicture((image_data) => {
        var image = document.getElementById('img-user');
        image.src = "data:image/jpeg;base64," + image_data;
        document.getElementById('img-user').src = image.src
        var user = firebase.auth().currentUser;
        var selfieRef = firebase.storage().ref(user.uid + '/profilePicture/');
        selfieRef.putString(image.src, 'data_url').then(function (snapshot) {
            console.log('Uploaded a data_url string!', snapshot);
            snapshot.ref.getDownloadURL().then(function (downloadURL) {
                console.log('File available at', downloadURL);
                user.updateProfile({
                    displayName: document.getElementById('nomePerfil').value,
                    photoURL: downloadURL
                }).then(function () {
                    console.log('currentUser:', firebase.auth().currentUser)
                    console.log('displayName:', firebase.auth().currentUser.displayName)
                    console.log('photoURL:', firebase.auth().currentUser.photoURL)
                    alert('Perfil atualizado com sucesso!')
                }).catch(function (error) {
                });
            });
        });
    },
        (error) => {
            console.log(error)
        }, options)

}

function btmVoltarHome() {
    window.location.href = "home.html"
}