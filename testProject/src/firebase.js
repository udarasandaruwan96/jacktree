import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "ytproject-8a89d.firebaseapp.com",
  projectId: "ytproject-8a89d",
  storageBucket: "ytproject-8a89d.appspot.com",
  messagingSenderId: "935989730426",
  appId: "1:935989730426:web:f22968215c6ba2215d2fc3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
 