let currentUser = null;

function login() {
  firebase.auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then(onAuth);
}

function signup() {
  firebase.auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then(res => {
      firebase.database().ref("profiles/" + res.user.uid).set({
        username: username.value
      });
      onAuth(res);
    });
}

function onAuth(res) {
  currentUser = res.user;
  player.id = res.user.uid;
  document.getElementById("auth").style.display = "none";
  checkAdmin(player.id);
  startNetworking();
}
