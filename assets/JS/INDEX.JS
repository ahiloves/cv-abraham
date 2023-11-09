document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const modeToggle = document.getElementById('modeToggle');
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');
  const mySidebar = document.getElementById('mySidebar');
  const mainContent = document.getElementById('main');

  // Función para manejar el clic en el icono de modo nocturno/día
  modeToggle.addEventListener('click', function () {
    body.classList.toggle('dark');

    // Guardar el estado actual en localStorage para recordar la preferencia del usuario
    const isDarkMode = body.classList.contains('dark');
    localStorage.setItem('darkMode', isDarkMode);
  });

  // Función para manejar el clic en el icono de menú
  openBtn.addEventListener('click', function () {
    mySidebar.style.width = '250px';
    mainContent.style.marginLeft = '250px';
  });

  closeBtn.addEventListener('click', function () {
    mySidebar.style.width = '0';
    mainContent.style.marginLeft = '0';
  });

  // Verificar si el usuario ya ha seleccionado el modo oscuro anteriormente
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode === 'true') {
    body.classList.add('dark');
  }
});