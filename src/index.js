import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBSZB-CmomA5mdjICWXAc9YQBH_OlSqQpc",
    authDomain: "initialproject-de653.firebaseapp.com",
    projectId: "initialproject-de653",
    storageBucket: "initialproject-de653.appspot.com",
    messagingSenderId: "608495829670",
    appId: "1:608495829670:web:242f5db96202f0c1526a67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const collectionRef = collection(db, "blogs");

getDocs(collectionRef).then((data) => {
    let arr = [];
    data.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
    })
    console.log(arr)
})

const addForm = document.querySelector(".add");
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addDocs();
})
const deleteForm = document.querySelector(".delete");
deleteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    deleteDoc(doc(db, 'blogs', deleteForm.delete.value)).then(data => {
        console.log("Data deleted", data)
    }).catch(err => {
        console.log("Error occured", err)
    })
})
const addDocs = async () => {
    try {
        const res = await addDoc(collectionRef, {
            title: addForm.title.value,
            description: addForm.desc.value
        })

        if (res) {
            addForm.reset();
            console.log("Form data submitted successfully")
        }

    } catch (e) {
        console.log("Error occured!", e)
    }
}

