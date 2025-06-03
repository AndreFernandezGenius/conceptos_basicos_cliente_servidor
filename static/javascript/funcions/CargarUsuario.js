async function cargarUsuarios() {
  try {
    const respuesta = await fetch('/api/usuarios');
    const datos = await respuesta.json();

    const lista = document.getElementById('lista-usuarios');

    for (let i = 0; i < datos.length; i++) {
      const usuario = JSON.parse(atob(datos[i]));
      const li = document.createElement('li');
      li.textContent = `${usuario.nombre} (${usuario.correo})`;
      lista.appendChild(li);
    }

  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
  }
}

cargarUsuarios();
