import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAxzYtbLCUFGi6M3gp68FgtSw3Hq6Z0Oek",
  authDomain: "statickets-1b432.firebaseapp.com",
  databaseURL: "https://statickets-1b432-default-rtdb.firebaseio.com",
  projectId: "statickets-1b432",
  storageBucket: "statickets-1b432.firebasestorage.app",
  messagingSenderId: "37589654012",
  appId: "1:37589654012:web:088ba44cd4360efc22fa79",
}

const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
