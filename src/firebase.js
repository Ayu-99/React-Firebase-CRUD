import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDrkmEI55HJWb7BqKtvUi_T_VzmmyuUIT0",
    authDomain: "react-crud-94fe0.firebaseapp.com",
    databaseURL: "https://react-crud-94fe0-default-rtdb.firebaseio.com",
    projectId: "react-crud-94fe0",
    storageBucket: "react-crud-94fe0.appspot.com",
    messagingSenderId: "14392380040",
    appId: "1:14392380040:web:a5edf2e3301b863aa7ed3d"
  };
  // Initialize Firebase
var fireDb=firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
