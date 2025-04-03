let codigo: string = "";

const filtrar = (codigo: string) => {
  const reg1 = /<img src=(?<urlImagen>.*) \/>/gm;

  const coincidencias = codigo.match(reg1);
  

  if (coincidencias) {
    console.log("hay IMG", coincidencias);
    const arrayIMG: string[] = [...coincidencias]
    arrayIMG.map((elemento) => {
      const reg2 = /<img src=(?<urlImagen>.*) \/>/;
      const sacarImagen = reg2.exec(elemento)
      if(sacarImagen){
        const urlImagen = sacarImagen.groups?.urlImagen;
        if (urlImagen) {
          imprimirInfo(urlImagen);
        }
      }
    })
  } else {
    console.log("no hay IMG", coincidencias);
  }
};

const formulario = () => {
  const textArea = document.getElementById("textarea");
  const boton = document.getElementById("boton");
  const contenedor = document.getElementById("resultado");

  if (
    textArea &&
    textArea instanceof HTMLTextAreaElement &&
    boton &&
    boton instanceof HTMLButtonElement &&
    contenedor &&
    contenedor instanceof HTMLDivElement
  ) {
    boton.addEventListener("click", (event) => {
      event.preventDefault();
      console.log("vamos");
      contenedor.innerHTML = "";
      codigo = textArea.value;
      filtrar(codigo);
    });
  }
};

const imprimirParrafo = (texto: string): HTMLParagraphElement => {
  const crearTexto = document.createElement("p");
  crearTexto.textContent = `${texto}`;
  return crearTexto;
};

const imprimirInfo = (texto: string) => {
  const contenedor = document.getElementById("resultado");
  if (contenedor && contenedor instanceof HTMLDivElement) {
    const esCorrecto = imprimirParrafo(texto);
    contenedor.appendChild(esCorrecto);
  }
};

formulario();
