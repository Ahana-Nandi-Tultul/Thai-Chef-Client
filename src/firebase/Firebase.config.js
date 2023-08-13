// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbqpydIlNOxoM4eryFmEwyj3XbniQ9sw0",
  authDomain: "thai-orchid-bristo-client.firebaseapp.com",
  projectId: "thai-orchid-bristo-client",
  storageBucket: "thai-orchid-bristo-client.appspot.com",
  messagingSenderId: "1087976890558",
  appId: "1:1087976890558:web:bbab9de9afd4010361feef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;