const contagem = document.getElementById("countlabel");
const aumentar = document.getElementById("aumentar");
const zerar = document.getElementById("zerar");
const diminuir = document.getElementById("diminuir");
let count = 0;

aumentar.onclick = function () {
  count++;
  countlabel.textContent = count;
}

zerar.onclick = function () {
  count = 0;
  countlabel.textContent = count;
}

diminuir.onclick = function () {
  count--;
  countlabel.textContent = count;
}
