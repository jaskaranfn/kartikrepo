// server.js

// Import necessary modules
const express = require('express');
const firebase = require('firebase');

// Initialize Firebase app with your Firebase project configuration
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID'
};
firebase.initializeApp(firebaseConfig);

// Create an Express app
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint for teacher login
app.post('/teacher/login', (req, res) => {
  const { email, password } = req.body;

  // Authenticate user using Firebase Authentication
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      res.status(200).send('Teacher login successful');
    })
    .catch(error => {
      res.status(400).send(error.message);
    });
});

// Endpoint for student login
app.post('/student/login', (req, res) => {
  const { email, password } = req.body;

  // Authenticate user using Firebase Authentication
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      res.status(200).send('Student login successful');
    })
    .catch(error => {
      res.status(400).send(error.message);
    });
});

// Endpoint for sending messages
app.post('/send/message', (req, res) => {
  const { message } = req.body;

  // Save message to Firebase Realtime Database
  firebase.database().ref('messages').push({
    message: message,
    timestamp: Date.now()
  })
    .then(() => {
      res.status(200).send('Message sent successfully');
    })
    .catch(error => {
      res.status(400).send(error.message);
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
