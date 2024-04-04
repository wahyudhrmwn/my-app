import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABw6J5zcQp04fsW_LzNNinNO2xrvGjcdw",
  authDomain: "my-skripsi-4bf20.firebaseapp.com",
  projectId: "my-skripsi-4bf20",
  storageBucket: "my-skripsi-4bf20.appspot.com",
  messagingSenderId: "852094826517",
  appId: "1:852094826517:web:eae5f029a7760eb71ff61c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  auth
}