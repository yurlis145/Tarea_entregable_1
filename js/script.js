document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formulario');
  const nombre = document.getElementById('nombre');
  const motivo = document.getElementById('motivo');
  const correo = document.getElementById('correo');
  const mensaje = document.getElementById('mensaje-form');
  const bienvenida = document.getElementById('bienvenida');

  if (!form || !nombre || !motivo || !correo || !mensaje || !bienvenida) {
    console.error('Faltan elementos requeridos en el HTML. Revisa los IDs.');
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const n = nombre.value.trim();
    const m = motivo.value.trim();
    const c = correo.value.trim();

    if (!n || !m || !c) {
      mensaje.textContent = '⚠️ Por favor llena todos los campos.';
      mensaje.style.color = '#ffeb3b';
      bienvenida.textContent = '';
      return;
    }

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(c)) {
      mensaje.textContent = '⚠️ Ingresa un correo válido.';
      mensaje.style.color = '#ffeb3b';
      bienvenida.textContent = '';
      return;
    }

    mensaje.textContent = '✅ Usuario registrado correctamente.';
    mensaje.style.color = '#00e676';

    bienvenida.textContent = `Bienvenido, ${n}!`;

    setTimeout(() => form.reset(), 1000);
  });

  [nombre, motivo, correo].forEach(inp => {
    inp.addEventListener('input', () => {
      if (mensaje.textContent) mensaje.textContent = '';
      if (bienvenida.textContent && inp.id === 'nombre') bienvenida.textContent = '';
    });
  });
});
