import { initializeApp } from 'firebase/app'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBSZB-CmomA5mdjICWXAc9YQBH_OlSqQpc",
    authDomain: "initialproject-de653.firebaseapp.com",
    projectId: "initialproject-de653",
    storageBucket: "initialproject-de653.appspot.com",
    messagingSenderId: "608495829670",
    appId: "1:608495829670:web:601cddca9968c8d0526a67"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const collectionRef = collection(db, 'books');

getDocs(collectionRef).then((snapShot) => {
    let books = [];
    snapShot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id })
    })

    console.log(books)
}).catch((err) => {
    console.log(err)
})




