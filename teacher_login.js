// teacher_login.js
document.getElementById('teacherLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('teacherEmail').value;
    const password = document.getElementById('teacherPassword').value;
  
    // Authenticate user using Firebase Authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Teacher login successful');
        window.location.href = 'send_message.html'; // Redirect to message sending page
      })
      .catch(error => {
        console.error('Teacher login failed:', error.message);
      });
  });
  