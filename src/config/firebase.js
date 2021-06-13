import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyApHlM_LM_6uS4sRYbeHuRP464-t4_Yfcc",
  authDomain: "tensorsearch.firebaseapp.com",
  projectId: "tensorsearch",
  storageBucket: "tensorsearch.appspot.com",
  messagingSenderId: "927606363719",
  appId: "1:927606363719:web:643e179fdb1d8c7ded4362",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
