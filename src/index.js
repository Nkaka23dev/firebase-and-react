import { initializeApp } from 'firebase/app'
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore'

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

// const getData = async () => {
//     const data = await getDocs(collectionRef);
//     console.log(data.docs.map(value => {
//         return value.data();
//     }))
// }

getDocs(collectionRef).then((snapShot) => {
    let books = [];
    snapShot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id })
    })

    console.log(books)
}).catch((err) => {
    console.log(err)
})

const addBookForm = document.querySelector('.add');

addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addDoc(collectionRef, {
        author: addBookForm.author.value,
        title: addBookForm.title.value,
    }).then(() => {
        addBookForm.reset();
        console.log("data sent success.")
    }).catch((err) => {
        console.log("Error Occured", err)
    })
})

const deleteForm = document.querySelector('.delete');

deleteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const itemTodelete = doc(collectionRef, "books", deleteForm.id.value);
    deleteDoc()
})



