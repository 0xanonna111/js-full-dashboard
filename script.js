// Theme persistence
const body = document.body;

if (localStorage.getItem("dashboard-theme") === "dark") {
  body.classList.add("dark");
}

function toggleTheme() {
  body.classList.toggle("dark");
  localStorage.setItem(
    "dashboard-theme",
    body.classList.contains("dark") ? "dark" : "light"
  );
}

// Fake dynamic stats (demo)
setInterval(() => {
  document.getElementById("orders").innerText =
    Math.floor(Math.random() * 500);
}, 4000);
