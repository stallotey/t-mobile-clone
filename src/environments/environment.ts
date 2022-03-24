// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM0IByHUC2Q9hJVdU8aZlaibze_UUtoaU",
  authDomain: "t-mobile-clone.firebaseapp.com",
  databaseURL: "https://t-mobile-clone-default-rtdb.firebaseio.com",
  projectId: "t-mobile-clone",
  storageBucket: "t-mobile-clone.appspot.com",
  messagingSenderId: "256221671200",
  appId: "1:256221671200:web:e2548a1988d12eaeacf145",
  measurementId: "G-Q3NWHG07SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
