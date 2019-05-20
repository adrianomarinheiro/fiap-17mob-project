function initializeFirebase() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyCzq3LDjM-fhLgLEqnJ_ffSDrSZZWY8Gt4",
        authDomain: "news-d4ac3.firebaseapp.com",
        databaseURL: "https://news-d4ac3.firebaseio.com",
        projectId: "news-d4ac3",
        storageBucket: "news-d4ac3.appspot.com",
        messagingSenderId: "419130403383",
        appId: "1:419130403383:web:0b6eade8c5d6d4d3"
    };
    // Initialize Firebase
    var app = firebase.initializeApp(firebaseConfig);
    var storageRef = firebase.storage();
}

window.onload = function () {
    initializeFirebase()
}