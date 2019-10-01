 import firebase from 'firebase/app'
 import 'firebase/firestore'

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBqHDThTYbo6h2E9KRs-11p0lRF3omWpT0",
  authDomain: "api-project-676120069419.firebaseapp.com",
  databaseURL: "https://api-project-676120069419.firebaseio.com",
  projectId: "api-project-676120069419",
  storageBucket: "",
  messagingSenderId: "676120069419",
  appId: "1:676120069419:web:676bd7dfa6c350d1ab716e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const dbMenuAdd = db.collection('menuItems');