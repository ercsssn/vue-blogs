import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAmr_VkLnUdIsdN0SSauCOcWDg1FirjvyM",
    authDomain: "hiveblogs-11397.firebaseapp.com",
    projectId: "hiveblogs-11397",
    storageBucket: "hiveblogs-11397.appspot.com",
    messagingSenderId: "1047645843318",
    appId: "1:1047645843318:web:de8b895ec6d7473ed49457"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();
