/* eslint-disable no-unused-vars */
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBNHJVvLesW4S8hpLIOA9R9caTQSAXrGzY',
    authDomain: 'tiktok-mobile-clone.firebaseapp.com',
    projectId: 'tiktok-mobile-clone',
    storageBucket: 'tiktok-mobile-clone.appspot.com',
    messagingSenderId: '949512471065',
    appId: '1:949512471065:web:bed0aedd64323c51096088',
    measurementId: 'G-L6TS8HERL5',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
