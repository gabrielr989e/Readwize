document.addEventListener('DOMContentLoaded', function () {
  // Navegar a la página de registro
  document.querySelector('.btn-start').addEventListener('click', function () {
    document.querySelector('.splash-screen').classList.add('hidden');
    document.getElementById('register-page').classList.remove('hidden');
  });

  // Mostrar el menú después de registrarse
  document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username && email && password) {
      alert('Registro exitoso');
      document.getElementById('register-page').classList.add('hidden');
      document.getElementById('new-menu-section').classList.remove('hidden');
    } else {
      alert('Por favor completa todos los campos');
    }
  });

  // Manejo de la racha
  const streakCountEl = document.getElementById('streak-count');
  let streakCount = parseInt(localStorage.getItem('streakCount')) || 0;
  streakCountEl.textContent = streakCount;

  // Frase motivacional aleatoria
  const motivationalQuoteEl = document.getElementById('motivational-quote');
  const quotes = [
    "La lectura es para la mente lo que el ejercicio es para el cuerpo.",
    "Un libro es un sueño que tienes en tus manos.",
    "Hoy es un buen día para comenzar un nuevo libro."
  ];
  motivationalQuoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];

  // Función para cambiar entre secciones
  function navigateToSection(sectionId) {
    const sections = document.querySelectorAll('.hidden, .visible');
    sections.forEach(section => section.classList.add('hidden'));

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.remove('hidden');
      targetSection.classList.add('visible');
    }
  }

  // Agregar evento al icono de Inicio
  document.querySelector('.menu-item:nth-child(1)').addEventListener('click', () => {
    navigateToSection('inicio-section');
  });

  // Agregar evento al icono de Mis Libros
  document.querySelector('.menu-item:nth-child(2)').addEventListener('click', () => {
    navigateToSection('mis-libros-section');
  });

  // Botón para iniciar sesión de lectura
  document.querySelector('.btn-start-reading').addEventListener('click', function () {
    streakCount++;
    localStorage.setItem('streakCount', streakCount);
    alert('¡Has comenzado una nueva sesión de lectura!');
    streakCountEl.textContent = streakCount;
  });
});
document.addEventListener('DOMContentLoaded', function () {
  // Función para agregar un libro
  document.getElementById('addBookForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('book-title').value.trim();
    const author = document.getElementById('book-author').value.trim();
    const genre = document.getElementById('book-genre').value.trim();

    if (title && author && genre) {
      addBookToLibrary(title, author, genre);
      clearBookForm();
    } else {
      alert('Por favor completa todos los campos.');
    }
  });

  // Función para agregar libro a la biblioteca
  function addBookToLibrary(title, author, genre) {
    const bookItem = document.createElement('div');
    bookItem.classList.add('book-item');
    
    bookItem.innerHTML = `
      <img src="https://via.placeholder.com/120" alt="Cover of ${title}">
      <h3>${title}</h3>
      <p>Autor: ${author}</p>
      <p>Género: ${genre}</p>
      <button class="btn-progress">Comenzar</button>
    `;
    
    document.querySelector('.book-list').appendChild(bookItem);
  }

  // Limpiar el formulario de agregar libro
  function clearBookForm() {
    document.getElementById('book-title').value = '';
    document.getElementById('book-author').value = '';
    document.getElementById('book-genre').value = '';
  }

  // Simulación de escáner de código QR
  document.getElementById('qr-scan').addEventListener('click', function () {
    alert('Escáner de QR no implementado aún');
  });

  // Función para agregar progreso de lectura
  document.querySelector('.book-list').addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-progress')) {
      const progressItem = event.target.closest('.book-item');
      const progressBar = document.createElement('div');
      progressBar.classList.add('progress-bar');
      progressBar.innerHTML = `<span style="width: 50%"></span>`;
      
      progressItem.appendChild(progressBar);
      event.target.disabled = true;  // Desactivar el botón después de hacer clic
    }
  });

  // Notas de los libros
  document.getElementById('notes-textarea').addEventListener('input', function () {
    localStorage.setItem('bookNotes', this.value);
  });
});




document.addEventListener('DOMContentLoaded', function () {
  // Manejo de la racha
  const streakCountEl = document.getElementById('streak-count');
  let streakCount = parseInt(localStorage.getItem('streakCount')) || 0;
  streakCountEl.textContent = streakCount;

  // Función para cambiar entre secciones
  function navigateToSection(sectionId) {
    const sections = document.querySelectorAll('.hidden, .visible');
    sections.forEach(section => section.classList.add('hidden'));

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.remove('hidden');
      targetSection.classList.add('visible');
    }
  }

  // Agregar evento al icono de Desafíos
  document.querySelector('.menu-item:nth-child(3)').addEventListener('click', () => {
    navigateToSection('desafios-section');
  });

  // Agregar evento al icono de Mis Libros
  document.querySelector('.menu-item:nth-child(2)').addEventListener('click', () => {
    navigateToSection('mis-libros-section');
  });

  // Botón para comenzar un desafío
  document.querySelector('.btn-start-challenge').addEventListener('click', function () {
    streakCount++;
    localStorage.setItem('streakCount', streakCount);
    alert('¡Has comenzado un nuevo desafío!');
    streakCountEl.textContent = streakCount;
  });
});



document.addEventListener('DOMContentLoaded', function () {
  // Navegar a la sección de Logros desde el menú
  document.querySelector('.menu-item:nth-child(4)').addEventListener('click', () => {
    navigateToSection('logros-section');
  });

  // Función para navegar entre secciones
  function navigateToSection(sectionId) {
    const sections = document.querySelectorAll('.hidden, .visible');
    sections.forEach(section => section.classList.add('hidden'));

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.remove('hidden');
      targetSection.classList.add('visible');
    }
  }

  // Variables de los logros (estos valores pueden ser dinámicos según los datos de usuario)
  let streakDays = 30;  // Ejemplo de días de racha (esto se puede cambiar dinámicamente)

  // Función para actualizar la sección de logros con los datos actuales
  function updateAchievements() {
    // Insignias de logros
    const badges = document.querySelectorAll('.badge-card');

    // Actualizar la insignia de "5 días de racha"
    if (streakDays >= 5) {
      badges[0].classList.add('achieved'); // Bronce
    }

    // Actualizar la insignia de "10 días de racha"
    if (streakDays >= 10) {
      badges[1].classList.add('achieved'); // Plata
    }

    // Actualizar la insignia de "20 días de racha"
    if (streakDays >= 20) {
      badges[2].classList.add('achieved'); // Oro
    }

    // Actualizar la insignia de "30 días de racha"
    if (streakDays >= 30) {
      badges[3].classList.add('achieved'); // Diamante
    }

    // Actualizar las metas cumplidas
    const goalsList = document.querySelector('.completed-goals ul');
    if (streakDays >= 5) {
      goalsList.innerHTML += '<li>📚 5 días de lectura consecutivos</li>';
    }
    if (streakDays >= 10) {
      goalsList.innerHTML += '<li>📖 10 días de lectura consecutivos</li>';
    }
    if (streakDays >= 20) {
      goalsList.innerHTML += '<li>⏳ 20 días de lectura consecutivos</li>';
    }
    if (streakDays >= 30) {
      goalsList.innerHTML += '<li>🏆 30 días de lectura consecutivos</li>';
    }

    // Logros destacados
    const featuredList = document.querySelector('.featured-achievements ul');
    featuredList.innerHTML = `
      <li>🔥 Mayor racha conseguida: ${streakDays} días consecutivos</li>
      <li>🏆 Mejor lector del mes</li>
    `;
  }

  // Llamar a la función para actualizar los logros al cargar la página
  updateAchievements();
});



