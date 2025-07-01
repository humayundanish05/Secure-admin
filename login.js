document.addEventListener("DOMContentLoaded", function () {
  alert("Login JS Loaded ✅");

  document.getElementById("loginBtn").addEventListener("click", function () {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    alert("Username: " + user + "\\nPassword: " + pass); // Debug check

    if (user === "admin" && pass === "1234") {
      alert("Login successful");
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid login");
    }
  });
});
