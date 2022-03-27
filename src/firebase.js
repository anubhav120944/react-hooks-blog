// import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyALfUElBnOHt3Bv4uMf-S4ncYD0QizDL24",
//   authDomain: "react-hooks-blog-d5bcc.firebaseapp.com",
//   projectId: "react-hooks-blog-d5bcc",
//   storageBucket: "react-hooks-blog-d5bcc.appspot.com",
//   messagingSenderId: "132853285365",
//   appId: "1:132853285365:web:bcb0d2ffe9f594f26120bc"
// };

// const auth = getAuth(app);
// const db = getFirestore(app);
// db.collection('todos').getDocs;
// const todosCol = collection(db, 'todos');
// const snapshot = await getDocs(todosCol);
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// onAuthStateChanged(auth, user => {
//     if(user != null){
//         console.log('logged in!');
//     }
//     else{
//         console.log('No user');
//     }
// })
// import firebase from 'firebase/app';
// import 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyALfUElBnOHt3Bv4uMf-S4ncYD0QizDL24",
//     authDomain: "react-hooks-blog-d5bcc.firebaseapp.com",
//     projectId: "react-hooks-blog-d5bcc",
//     storageBucket: "react-hooks-blog-d5bcc.appspot.com",
//     messagingSenderId: "132853285365",
//     appId: "1:132853285365:web:bcb0d2ffe9f594f26120bc"
//   };

// firebase.default.initializeApp(firebaseConfig);
// export const firestore = firebase.firestore();
/////////////////////////////////////////


import { initializeApp } from "firebase/app";
import {getFirestore,collection, addDoc, Timestamp, onSnapshot} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyALfUElBnOHt3Bv4uMf-S4ncYD0QizDL24",
    authDomain: "react-hooks-blog-d5bcc.firebaseapp.com",
    projectId: "react-hooks-blog-d5bcc",
    storageBucket: "react-hooks-blog-d5bcc.appspot.com",
    messagingSenderId: "132853285365",
    appId: "1:132853285365:web:bcb0d2ffe9f594f26120bc"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
export const colRef = collection(db,"posts");

export const addBlog = async(title,subTitle,content)=>{
  return addDoc(colRef,{
    title:title,
    subTitle:subTitle,
    content:content,
    createdAt:Timestamp.now()
  })

}
