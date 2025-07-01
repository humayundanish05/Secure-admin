document.addEventListener("DOMContentLoaded", function () {
  alert("📦 login.js loaded successfully!");

  const loginBtn = document.getElementById("loginBtn");

  if (!loginBtn) {
    alert("❌ loginBtn not found in DOM!");
    return;
  }

  loginBtn.addEventListener("click", function () {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    alert("🧪 You entered: " + user + " / " + pass);

    if (user === "admin" && pass === "1234") {
      alert("✅ Login successful!");
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "dashboard.html";
    } else {
      alert("❌ Invalid login");
    }
  });
});
