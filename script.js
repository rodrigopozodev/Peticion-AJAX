// Selecciona el botón del HTML
const button = document.querySelector('.request');

// Agrega un evento de clic al botón
button.addEventListener('click', () => {
  // Crea una nueva instancia de XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // Abre una conexión con el endpoint utilizando el método GET
  xhr.open('GET', 'https://www.boredapi.com/api/activity/');

  // Envía la petición
  xhr.send();

  // Maneja la respuesta
  xhr.onload = () => {
    if (xhr.status === 200) {
      // Convierte la respuesta en un objeto JSON
      const response = JSON.parse(xhr.responseText);

      // Selecciona el elemento del HTML donde se mostrará la actividad
      const activityElement = document.querySelector('.activity');

      // Actualiza el contenido del elemento con la actividad
      activityElement.textContent = response.activity;
      activityElement.style.display = "block";
    } else {
      // Maneja el error
      console.error('Error:', xhr.status);
    }
  };
});
