import {
  getAuth,
  onAuthStateChanged,
} from "../login and register/login(new)/firebaseAuth.js";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    // https://firebase.google.com/docs/reference/js/auth.user
  } else {
    window.location.href =
      "http://127.0.0.1:5500/san-pham-cuoi-khoa-2-master/login%20and%20register/login(new)/index.html";
  }
});

var logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener("click", function () {
  // localStorage.removeItem("user");
  window.location.href =
    "http://127.0.0.1:5500/san-pham-cuoi-khoa-2-master/login%20and%20register/login(new)/index.html";
});
