const materias = [
  // Semestre 1
  { nombre: "EDU-100 Fundamentos de la Investigación", id: "edu100", prerreq: [] },
  { nombre: "EDU-101 Estadística Educativa", id: "edu101", prerreq: [] },
  { nombre: "EDU-102 Epistemología de la Educación", id: "edu102", prerreq: [] },
  { nombre: "EDU-103 Desarrollo Humano y Educación de la Niñez y la Adolescencia", id: "edu103", prerreq: [] },
  { nombre: "EDU-104 Historia de la Educación", id: "edu104", prerreq: [] },
  { nombre: "Mat Tec. I", id: "mat1", prerreq: [] },

  // Semestre 2
  { nombre: "EDU-105 Investigación Educativa Cuantitativa", id: "edu105", prerreq: ["edu100", "edu101"] },
  { nombre: "EDU-106 Estadística Educativa II", id: "edu106", prerreq: ["edu101"] },
  { nombre: "EDU-107 Filosofía de la Educación", id: "edu107", prerreq: ["edu102"] },
  { nombre: "EDU-108 Desarrollo Humano y Educación de la Juventud y el Adulto", id: "edu108", prerreq: ["edu103"] },
  { nombre: "EDU-109 Legislación Educativa y Aplicada", id: "edu109", prerreq: ["edu104"] },
  { nombre: "Mat Tec. II", id: "mat2", prerreq: ["mat1"] },
  { nombre: "Idioma I", id: "idioma1", prerreq: [] },

  // Semestre 3
  { nombre: "EDU-110 Investigación Educativa Cualitativa", id: "edu110", prerreq: ["edu105"] },
  { nombre: "EDU-111 Informática aplicada a la Investigación", id: "edu111", prerreq: ["edu105", "edu106"] },
  { nombre: "EDU-112 Pedagogía", id: "edu112", prerreq: ["edu107"] },
  { nombre: "EDU-113 Didáctica General", id: "edu113", prerreq: ["edu107"] },
  { nombre: "EDU-114 Psicología Educativa I", id: "edu114", prerreq: ["edu108"] },
  { nombre: "Mat Tec. III", id: "mat3", prerreq: ["mat2"] },
  { nombre: "Idioma II", id: "idioma2", prerreq: ["idioma1"] },

  // Semestre 4
  { nombre: "EDU-115 Investigación Educativa Mixta", id: "edu115", prerreq: ["edu110", "edu111"] },
  { nombre: "EDU-116 Didáctica Socio Crítica", id: "edu116", prerreq: ["edu112", "edu113"] },
  { nombre: "EDU-117 Educación de la Diversidad", id: "edu117", prerreq: ["edu113"] },
  { nombre: "EDU-118 Psicología Educativa II", id: "edu118", prerreq: ["edu114"] },
  { nombre: "EDU-119 Sociología de la Educación", id: "edu119", prerreq: ["edu109"] },
  { nombre: "Mat Tec. IV", id: "mat4", prerreq: ["mat3"] },
  { nombre: "Idioma III", id: "idioma3", prerreq: ["idioma2"] },

  // Semestre 5
  { nombre: "EDU-120 Diagnóstico Educativo Institucional", id: "edu120", prerreq: ["edu115"] },
  { nombre: "EDU-121 Diseño Curricular", id: "edu121", prerreq: ["edu116", "edu119"] },
  { nombre: "EDU-122 Evaluación de Aprendizajes", id: "edu122", prerreq: ["edu112", "edu113"] },
  { nombre: "EDU-123 Diagnóstico Psicopedagógico", id: "edu123", prerreq: ["edu118"] },
  { nombre: "EDU-124 Antropología de la Educación", id: "edu124", prerreq: ["edu119"] },
  { nombre: "Mat Tec. V", id: "mat5", prerreq: ["mat4"] },
  { nombre: "Idioma IV", id: "idioma4", prerreq: ["idioma3"] },

  // Semestre 6
  { nombre: "EDU-125 Sistematización de Experiencias Educativas", id: "edu125", prerreq: ["edu120"] },
  { nombre: "EDU-126 Desarrollo y Evaluación Curricular", id: "edu126", prerreq: ["edu121"] },
  { nombre: "EDU-127 Proyectos Educativos Institucionales", id: "edu127", prerreq: ["edu121"] },
  { nombre: "EDU-128 Neurociencias y Educación", id: "edu128", prerreq: ["edu123"] },
  { nombre: "EDU-129 Educación Internacionalizada", id: "edu129", prerreq: ["edu124"] },
  { nombre: "Mat Tec. VI", id: "mat6", prerreq: ["mat5"] },
  { nombre: "EDU-700 Práctica Profesional I", id: "edu700", prerreq: ["todo_quinto"] }
];

document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('contenedor-materias');

  materias.forEach((mat) => {
    const div = document.createElement('div');
    div.classList.add('materia');
    div.id = mat.id;
    div.textContent = mat.nombre;
    div.setAttribute('data-prerreq', mat.prerreq.join(','));
    div.onclick = () => resaltarPrerrequisitos(mat.id);
    contenedor.appendChild(div);
  });
});

function resaltarPrerrequisitos(id) {
  document.querySelectorAll('.materia').forEach(el => {
    el.classList.remove('resaltado', 'tachado');
  });

  const activa = document.getElementById(id);
  activa.classList.add('resaltado', 'tachado');

  const prereqs = activa.getAttribute('data-prerreq');

  if (prereqs === "todo_quinto") {
    materias.forEach(mat => {
      const idx = materias.findIndex(m => m.id === mat.id);
      if (idx <= 34) {
        document.getElementById(mat.id).classList.add('resaltado');
      }
    });
  } else if (prereqs) {
    prereqs.split(',').forEach(pr => {
      const prElem = document.getElementById(pr.trim());
      if (prElem) {
        prElem.classList.add('resaltado');
      }
    });
  }
}
