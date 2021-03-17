import firebase from 'firebase/app'
 import 'firebase/storage';
 import 'firebase/firestore';
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDsMn-KAGMPq3KG-lSx2i10vWbr1Xg_UgU",
    authDomain: "gravity-store-b09fc.firebaseapp.com",
    projectId: "gravity-store-b09fc",
    storageBucket: "gravity-store-b09fc.appspot.com",
    messagingSenderId: "992714093291",
    appId: "1:992714093291:web:947878d66554ded39244ae"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};