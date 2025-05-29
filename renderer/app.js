document.getElementById("registerBtn").addEventListener("click", async () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const success = await window.authAPI.register(username, password);
  alert(success ? "Inscription réussie" : "Erreur : nom déjà pris");
});

document.getElementById("loginBtn").addEventListener("click", async () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const token = await window.authAPI.login(username, password);
  if (token) {
    alert("Connexion réussie !");
    localStorage.setItem("token", token);
  } else {
    alert("Identifiants invalides !");
  }
});