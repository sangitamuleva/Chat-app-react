import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
   
      
            apiKey: "api key",
            authDomain: "",
            databaseURL: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: "",
            appId: "",
            measurementId: ""
    //   get it from firebase config
    
});

const db=firebaseApp.firestore();

export default db;

