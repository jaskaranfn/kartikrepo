// send_message.js
document.getElementById('sendMessageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const message = document.getElementById('messageInput').value;
  
    // Save message to Firebase Realtime Database
    firebase.database().ref('messages').push({
      message: message,
      timestamp: Date.now()
    })
      .then(() => {
        console.log('Message sent successfully');
        // Add your logic for success message or other actions
      })
      .catch(error => {
        console.error('Error sending message:', error.message);
      });
  });
  