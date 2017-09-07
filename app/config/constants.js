import firebase from 'firebase'

var config = {
  apiKey: "0000000000000000000000000000000",
  authDomain: "yokedin-00000.firebaseapp.com",
  databaseURL: "https://yokedin-00000.firebaseio.com",
  projectId: "yokedin-00000",
  storageBucket: "yokedin-00000.appspot.com",
  messagingSenderId: "000000000000"
};
firebase.initializeApp(config);

const ref = firebase.database().ref()
const firebaseAuth = firebase.auth()
const facebookProvider = firebase.auth.FacebookAuthProvider

export {
  ref,
  firebaseAuth,
  facebookProvider,
}
