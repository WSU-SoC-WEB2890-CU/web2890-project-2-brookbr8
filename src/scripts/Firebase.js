import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const app = initializeApp({});

export const db = getDatabase(
  app,
  "https://portfolio-form-1037a-default-rtdb.firebaseio.com/"
);
