import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import "semantic-ui-css/semantic.min.css";


 // Fire Base Connection Configuration
  const config = {
    apiKey: "AIzaSyAUxSQQyvQo4MejPf-ZMFkrtKscgYt70MM",
    authDomain: "bitnote-49190.firebaseapp.com",
    databaseURL: "https://bitnote-49190.firebaseio.com",
    projectId: "bitnote-49190",
    storageBucket: "bitnote-49190.appspot.com",
    messagingSenderId: "176955867904",
    appId: "1:176955867904:web:36e519145d5dcc29eb69e5",
    measurementId: "G-FH3Y2YH0LZ"
  };

  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();

  
  ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
