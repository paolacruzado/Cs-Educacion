function resaltarPrerrequisitos(id) {
  // Quitar todo el resaltado anterior
  document.querySelectorAll('.materia').forEach(el => el.classList.remove('resaltado'));

  // Resaltar la materia seleccionada
  document.getElementById(id).classList.add('resaltado');

  // Revisar si tiene prerrequisitos
  const materia = document.getElementById(id);
  const prereqs = materia.getAttribute('data-prerreq');

  if (prereqs) {
    prereqs.split(',').forEach(pr => {
      const prElem = document.getElementById(pr.trim());
      if (prElem) {
        prElem.classList.add('resaltado');
      }
    });
  }
}
