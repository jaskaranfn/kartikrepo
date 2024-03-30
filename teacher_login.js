// teacher_login.js
document.addEventListener('DOMContentLoaded', function () {
  const googleSignInButton = document.getElementById('googleSignInButton');

  // Render Google sign-in button
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    'prompt': 'select_account'
  });

  googleSignInButton.addEventListener('click', function () {
    firebase.auth().signInWithRedirect(provider);
  });
});
