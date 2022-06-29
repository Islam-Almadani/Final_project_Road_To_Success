import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCvTAzEmEXCyNIppSFEXbMBtSUD002CNZ4",
  authDomain: "rtsdata-8fa1f.firebaseapp.com",
  projectId: "rtsdata-8fa1f",
  storageBucket: "rtsdata-8fa1f.appspot.com",
  messagingSenderId: "128086962952",
  appId: "1:128086962952:web:f8cc53cb8d71ab7b2832bd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
