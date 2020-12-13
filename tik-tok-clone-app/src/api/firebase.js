import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCdXEcQj5Sb8clwG3Yv8B3qzS5x7aM3J6w",
    authDomain: "tik-tok-clone-app-30a90.firebaseapp.com",
    projectId: "tik-tok-clone-app-30a90",
    storageBucket: "tik-tok-clone-app-30a90.appspot.com",
    messagingSenderId: "131712977646",
    appId: "1:131712977646:web:3c20580eada2226d5741ff",
    measurementId: "G-KG4DDENGNZ"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db