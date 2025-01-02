import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";
import configData from "../../../config/default.json";

/**
 * @description Initializes Firebase configuration and authentication
 * @summary Sets up Firebase app with config and enables local persistence
 * @exports {object} app - The initialized Firebase app instance
 * @exports {object} auth - The Firebase authentication instance
 */

// Your web app's Firebase configuration

const firebaseConfig = configData.firebaseConfig;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch(console.error);

export { app, auth };
