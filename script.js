function login() {
  const name = document.getElementById("name").value.trim();
  const rank = parseInt(document.getElementById("rank").value);
  const level = document.getElementById("level").value.trim();
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (!name || !rank || !level || !pass) {
    error.innerText = "All fields required!";
    return;
  }

  let correctPassword = "";

  if (rank >= 1 && rank <= 6) {
    correctPassword = "ghost@" + level;
  } 
  else if (rank >= 7 && rank <= 10) {
    correctPassword = "mastervip@" + level;
  } 
  else {
    error.innerText = "Rank must be 1 to 10!";
    return;
  }

  if (pass !== correctPassword) {
    error.innerText = "Wrong password!";
    return;
  }

  // save login
  localStorage.setItem("loggedIn", "yes");

  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
}

function logout() {
  localStorage.removeItem("loggedIn");
  location.reload();
}
