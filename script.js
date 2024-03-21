const areaInicial = document.querySelector(".mensagemInicial");
const conteudoFinal = document.querySelector(".conteudo__resultado");

function criptografarTexto() {
  let texto = document.getElementById("conteudo__esquerda__texto").value;
  if (!verificarEntrada(texto)) return;
  let decodificandoTexto = texto
    .replace(/E/gi, "enter")
    .replace(/I/gi, "imes")
    .replace(/A/gi, "ai")
    .replace(/O/gi, "ober")
    .replace(/U/gi, "ufat");

  document.getElementById("conteudo__resultado__final").value =
    decodificandoTexto;
  alternar();
}

document
  .querySelector(".conteudo__esquerda__texto")
  .addEventListener("keydown", (e) => {
    console.log(e.key);
  });

function descriptografarTexto() {
  let texto = document.getElementById("conteudo__esquerda__texto").value;
  if (!verificarEntrada(texto)) return;
  let decodificandoTexto = texto
    .replace(/ENTER/gi, "e")
    .replace(/IMES/gi, "i")
    .replace(/AI/gi, "a")
    .replace(/OBER/gi, "o")
    .replace(/UFAT/gi, "u");

  document.getElementById("conteudo__resultado__final").value =
    decodificandoTexto;
  alternar();
}

function alternar() {
  areaInicial.classList.add("hidden");

  conteudoFinal.classList.remove("hidden");
}

function verificarEntrada(texto) {
  const regex = /^[a-z\s!;?.,]+$/;
  const valido = regex.test(texto);
  if (!valido) {
    alert(
      "Use apenas letras minúsculas, palavras sem acento e sem caracteres."
    );
  }
  return valido;
}

function copiarTexto() {
  let textoCopiado = document.getElementById(
    "conteudo__resultado__final"
  ).value;
  navigator.clipboard.writeText(textoCopiado).then(() => {
    alert("Copiado");
  });
}
