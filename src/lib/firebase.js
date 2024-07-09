import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-web-f4680.firebaseapp.com",
  projectId: "react-chat-web-f4680",
  storageBucket: "react-chat-web-f4680.appspot.com",
  messagingSenderId: "987383471022",
  appId: "1:987383471022:web:62d10e0763d5c86e08c63f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
