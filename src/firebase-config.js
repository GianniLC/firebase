import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD4nF4WQeJ8RRUwt6L-UtSCpRM6UJHgK2c",
    authDomain: "netflixclone-a88d2.firebaseapp.com",
    projectId: "netflixclone-a88d2",
    storageBucket: "netflixclone-a88d2.appspot.com",
    messagingSenderId: "768726073257",
    appId: "1:768726073257:web:0674b91afd3b35000d8eb8",
    measurementId: "G-SE1HQQCLE3"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);