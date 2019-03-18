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

export default $firestore