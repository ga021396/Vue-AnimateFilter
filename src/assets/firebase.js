// src/db.js

import firebase from 'firebase/app'
import 'firebase/firestore'


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAOsja00FEM9p1HR0xvnSe0aMwuVm_D7TE",
    authDomain: "animefilter.firebaseapp.com",
    databaseURL: "https://animefilter.firebaseio.com",
    projectId: "animefilter",
    storageBucket: "animefilter.appspot.com",
    messagingSenderId: "527533106109"
  };
  firebase.initializeApp(config);
  //--
  const $firestore = firebase.firestore();
  const doc =$firestore.doc("users/user01")
  doc.set({
          name: "cliff",
          gender: "male",
          born: 1996,
          cake:'good'
      })
      .then(function (docRef) {
          console.log("Document written with ID: ", docRef);
      })
      .catch(function (error) {
          console.error("Error adding document: ", error);
      });
  doc.get().then((doc)=>console.log(doc))
    

export default $firestore