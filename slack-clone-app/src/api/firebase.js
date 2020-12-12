import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBGKjl87xfKn9XkaMK-dn1sJEJUtXPY-kc",
  authDomain: "slack-clone-app-603fc.firebaseapp.com",
  databaseURL: "https://slack-clone-app-603fc.firebaseio.com",
  projectId: "slack-clone-app-603fc",
  storageBucket: "slack-clone-app-603fc.appspot.com",
  messagingSenderId: "514302983530",
  appId: "1:514302983530:web:ec9a39d2b821e6a7a77913",
  measurementId: "G-T970TK0RR5",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
