import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    onSnapshot,
    query,
    where,
    orderBy,
    serverTimestamp,
    getDoc,
    updateDoc
} from "firebase/firestore";

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

// getDocs(collectionRef).then((data) => {

// })
// const q = query(collectionRef, where('title', '==', 'basket ball'), orderBy('description', 'desc'));
// fetching the data and ordering them also with specification 
const specificTitle = query(collectionRef, where('title', '==', 'Machine Learning Examples and Applications'), orderBy('createdAt'));

const allData = query(collectionRef, orderBy('createdAt', 'desc'))

onSnapshot(specificTitle, (data) => {
    let arr = [];
    data.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
    })
    console.log(arr)
})
//====================================================
// This  is a general search we use onSnapshot instead of getDocs because with snapshot data will gete updated imediately when you delete or add
onSnapshot(allData, (data) => {
    let arr = [];
    data.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
    })
    console.log(arr)
})
//====================================================
// All logic about adding a blogs to the firebase.

const addForm = document.querySelector(".add");
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!addForm.title.value || !addForm.desc.value) {
        console.log("Empt form can't be submitted!")
        return
    }
    addDocs();
})
const addDocs = async () => {
    try {
        const res = await addDoc(collectionRef, {
            title: addForm.title.value,
            description: addForm.desc.value,
            createdAt: serverTimestamp()
        })
        if (res) {
            addForm.reset();
            console.log("Form data submitted successfully")
        }
    } catch (e) {
        console.log("Error occured!", e)
    }
}
//This is about selecting deleteForm and delete a blog by providing an ID
const deleteForm = document.querySelector(".delete");
deleteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!deleteForm.delete.value) {
        console.log("Empety form can't be submitted!")
        return
    }
    deleteDoc(doc(db, 'blogs', deleteForm.delete.value)).then(data => {
        console.log("Data deleted", data)
    }).catch(err => {
        console.log("Error occured", err)
    })
})
// The following is about to get a single blog with Id
const singleRef = doc(db, "blogs", "dPrxjZOuKhlJHdXsac4g");

getDoc(singleRef).then((doc) => {
    console.log(doc.data(), doc.id)
}).catch(err => {
    console.log(err)
})

//UPDATE the blog by first selecting update form and update by providing an ID
const updateForm = document.querySelector(".update");
updateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!updateForm.update.value) {
        console.log("Empty form,,,, Can't be updated..")
        return
    }
    const dataToUpdate = doc(db, 'blogs', updateForm.update.value);
    updateDoc(dataToUpdate, {
        title: "UPDATED TITLE BY ERIC NKAKA"
    }).then(() => {
        console.log("Data updated success!!!")
        updateForm.reset();
    }).catch(err => console.log(err))

})

/***  *************************************************************
  





 * ******************************************************************** ****/