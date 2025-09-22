onload = () => {
  document.body.classList.remove("container");
};
    const abrirBtn = document.getElementById('abrirBtn');
    const intro = document.getElementById('intro');
    const regalo = document.getElementById('regalo');

    abrirBtn.addEventListener('click', () => {
      // Oculta el contenedor inicial
      intro.classList.add('oculto');
      // Muestra el segundo con una pequeña demora para que se vea la transición
      setTimeout(() => {
        regalo.classList.remove('oculto');
      }, 300);
    });