import firebase from "firebase";

const config = {
    apiKey: "AIzaSyAvGgUubnVwKFz-501uYQ1rtF_23Y8AJXg",
    authDomain: "project-tinder-85675.firebaseapp.com",
    projectId: "project-tinder-85675",
    storageBucket: "project-tinder-85675.appspot.com",
    messagingSenderId: "500344612123",
    appId: "1:500344612123:web:0ee2674fd8199cc1981fbe",
    measurementId: "G-WP4H3Q8JT4"
};

firebase.initializeApp(config);
firebase.analytics();

export default firebase
