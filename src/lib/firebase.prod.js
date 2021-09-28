import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyAZXKRRA0GlN6YeKAbGmvcfQtbP6npHWGk",
  authDomain: "netflix-diego.firebaseapp.com",
  projectId: "netflix-diego",
  storageBucket: "netflix-diego.appspot.com",
  messagingSenderId: "429500825310",
  appId: "1:429500825310:web:30a832f591c487c4c58c4f",
  measurementId: "G-NYJW86MYLT"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
