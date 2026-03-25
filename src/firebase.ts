import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrMbDTlEASTDmiya9SkF2nKFf4_Z35Acw",
  authDomain: "hack-a1bc8.firebaseapp.com",
  projectId: "hack-a1bc8",
  storageBucket: "hack-a1bc8.firebasestorage.app",
  messagingSenderId: "462590056275",
  appId: "1:462590056275:web:20d639d7c053852b1cf3a6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);