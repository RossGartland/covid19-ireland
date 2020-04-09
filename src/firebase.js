import firebase from "firebase/app";
import 'firebase/firestore';

require("dotenv").config();

const app = ({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: "covid-19-ireland",
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGIN_SENDER_ID,
  appId: process.env.APP_ID,
});

firebase.initializeApp(app);

const db = firebase.firestore();

export {db};

export default firebase;
