const letter = document.getElementById('letter');
const editor = document.getElementById('editor');
const closeBtn = document.getElementById('closeEditor');

// Al hacer clic en la carta, abrir overlay
letter.addEventListener('click', () => {
    editor.style.display = 'flex';
});

// Cerrar overlay
closeBtn.addEventListener('click', () => {
    editor.style.display = 'none';
});
