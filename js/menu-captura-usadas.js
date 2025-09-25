// --- MENÚ HAMBURGUESA ---
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtn.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (window.innerWidth <= 480) { 
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
      sidebar.classList.remove("open");
      menuBtn.classList.remove("open");
    }
  }
});

