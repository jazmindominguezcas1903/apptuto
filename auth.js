// auth.js - manejo simple de sesión con localStorage
// NOTA: para producción usar backend y hashing seguro.

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem('users') || '[]');
  } catch (e) {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

// En registro guardamos usuario básico (email + password plain en este ejemplo).
document.addEventListener('DOMContentLoaded', () => {
  const btnRegister = document.getElementById('btnRegister');
  if (btnRegister) {
    btnRegister.addEventListener('click', () => {
      const email = document.getElementById('regEmail').value.trim();
      const pass = document.getElementById('regPass').value;
      const name = document.getElementById('regName').value.trim();
      const msg = document.getElementById('regMsg');

      if (!email || !pass || pass.length < 6) {
        msg.textContent = 'Ingresa correo válido y contraseña de al menos 6 caracteres.';
        return;
      }

      const users = getUsers();
      if (users.find(u => u.email === email)) {
        msg.textContent = 'Ese correo ya está registrado.';
        return;
      }

      users.push({ email, pass, name });
      saveUsers(users);
      msg.style.color = 'green';
      msg.textContent = 'Registro exitoso. Redirigiendo...';
      setTimeout(() => location.href = 'index.html', 900);
    });
  }

  const btnLogin = document.getElementById('btnLogin');
  if (btnLogin) {
    btnLogin.addEventListener('click', () => {
      const email = document.getElementById('email').value.trim();
      const pass = document.getElementById('password').value;
      const msg = document.getElementById('authMsg');

      if (!email || !pass) {
        msg.textContent = 'Completa los campos.';
        return;
      }

      const users = getUsers();
      const user = users.find(u => u.email === email && u.pass === pass);
      if (!user) {
        msg.textContent = 'Credenciales incorrectas.';
        return;
      }

      // Guardar sesión mínima
      localStorage.setItem('sessionUser', JSON.stringify({ email: user.email, name: user.name || '' }));
      location.href = 'home.html';
    });
  }

  // En home, botón Salir
  const btnSalir = document.getElementById('btnSalir');
  if (btnSalir) {
    btnSalir.addEventListener('click', () => {
      localStorage.removeItem('sessionUser');
      location.href = 'index.html';
    });
  }

  // Protección de rutas: si estamos en home y no hay sesión, redirige
  const onHome = window.location.pathname.endsWith('home.html') || window.location.pathname === '/';
  if (window.location.pathname.endsWith('home.html')) {
    const sess = localStorage.getItem('sessionUser');
    if (!sess) {
      // No hay sesión => volver al login
      location.href = 'index.html';
    }
  }
});