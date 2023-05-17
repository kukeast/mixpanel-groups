import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCFLMlkt7MLHO-Z6fAjcvU0sa9y5q8lrkE",
    authDomain: "mixpanel-groups.firebaseapp.com",
    projectId: "mixpanel-groups",
    storageBucket: "mixpanel-groups.appspot.com",
    messagingSenderId: "727562055625",
    appId: "1:727562055625:web:051bcae26366762565c218"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

