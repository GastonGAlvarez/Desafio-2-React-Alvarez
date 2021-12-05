import firebase from "firebase"
import 'firebase/firestore'
 
const firebaseConfig = {
    apiKey: "AIzaSyB6LBeomKb-KIWyOxOVt7_WmY9QH4JcXy4",
    authDomain: "ash-e-commerce.firebaseapp.com",
    projectId: "ash-e-commerce",
    storageBucket: "ash-e-commerce.appspot.com",
    messagingSenderId: "631477570117",
    appId: "1:631477570117:web:13eaf6300888f79488712c"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){    
    return firebase.firestore(app)
}

