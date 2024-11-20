import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgjvpquqnp9UIRq3t66vKOaaUv7uvD5ww",
  authDomain: "projectorangetestphase.firebaseapp.com",
  projectId: "projectorangetestphase",
  storageBucket: "projectorangetestphase.firebasestorage.app",
  messagingSenderId: "1042653613547",
  appId: "1:1042653613547:web:e66b9707bba79bbd1f9dae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch(console.error);

export { app, auth };
