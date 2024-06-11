function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
 
function showModal() {
  document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('myModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}