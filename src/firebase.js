import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDhR-jC-bOIMq-_IwJy74w9dEjFyHjPZ2w",
	authDomain: "my-chat-b2a97.firebaseapp.com",
	projectId: "my-chat-b2a97",
	storageBucket: "my-chat-b2a97.appspot.com",
	messagingSenderId: "967393877938",
	appId: "1:967393877938:web:bdb0a3b374205b5ad4ceab",
	measurementId: "G-R14XM7KVSE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
