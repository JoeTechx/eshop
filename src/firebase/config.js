import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyDh1CJTuFe7FLRWFZPhEZQD5k1s8HqLFcE",
  authDomain: "eshop-6fe04.firebaseapp.com",
  projectId: "eshop-6fe04",
  storageBucket: "eshop-6fe04.appspot.com",
  messagingSenderId: "936669559655",
  appId: "1:936669559655:web:bc4f404179811b0606cdc2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
