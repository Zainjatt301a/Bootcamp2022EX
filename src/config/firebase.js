// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, setDoc, doc, getDocs } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGVhTCfeCyM8r40VlGtBkVXbAlgSAuLQc",
    authDomain: "taskonebootcamp.firebaseapp.com",
    projectId: "taskonebootcamp",
    storageBucket: "taskonebootcamp.appspot.com",
    messagingSenderId: "722384995064",
    appId: "1:722384995064:web:c1fff6b79ec65a577a310d",
    measurementId: "G-114JLRY6GZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const post = (description, like) => {
    addDoc(collection(db, "Posts"), {
        description,
        like
    }).then(() => {
        alert("Post Done")
    }).catch(() => {
        alert("Something went wrong")
    })
}

async function getPost() {
    const querySnapshot = await getDocs(collection(db, "Posts"))
    const posts = []

    querySnapshot.forEach((doc) => {
        posts.push(doc.data())
    })
    return posts
    console.log(posts, "Postss");
}


export {
    post,
    getPost
}