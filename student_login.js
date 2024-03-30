// student_login.js
document.getElementById('studentLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('studentEmail').value;
    const password = document.getElementById('studentPassword').value;
  
    // Authenticate user using Firebase Authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Student login successful');
        // Add your logic for student dashboard redirection or other actions
      })
      .catch(error => {
        console.error('Student login failed:', error.message);
      });
  });
  