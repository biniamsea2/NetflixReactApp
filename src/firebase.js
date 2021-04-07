import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDT-Rmt7jTbpg-w7SDcDrrrAWnC9ty4GYc",
    authDomain: "netflixreactapp-e9ea8.firebaseapp.com",
    projectId: "netflixreactapp-e9ea8",
    storageBucket: "netflixreactapp-e9ea8.appspot.com",
    messagingSenderId: "839369404898",
    appId: "1:839369404898:web:5196a0feaac219d76889bb"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

// you can only have one default export
  export {auth};
  export default db;