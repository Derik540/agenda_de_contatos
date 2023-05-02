const botao = document.getElementById('mostrar-formulario');
const formulario = document.getElementById('formulario');
const botaoEnviar = document.getElementById('blt-enviar');
let linhas = '';

function fechaJanela () {
const conteiner = document.getElementById('conteiner')
conteiner.addEventListener('click', function(e){
  if (!formulario.contains(e.target) && !e.target.matches('.conteiner')){
      formulario.style.display = 'nome'
  }
})

}

botao.addEventListener('click', function () {
  formulario.style.display = 'block';
});

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  Crialinhas();
  fechaJanela()
  AtualizaTabela();
});

function Crialinhas() {
  let inputNome = document.getElementById('nome');
  let inputTele = document.getElementById('tel');

  let linha = '<tr>';
  linha += `<td>${inputNome.value}</td>`;
  linha += `<td>${inputTele.value}</td>`;
  linha += '</tr>';

  linhas += linha;

  inputNome.value = '';
  inputTele.value = '';
}

function AtualizaTabela() {
  const CorpoTabela = document.querySelector('tbody')
  CorpoTabela.innerHTML = linhas;
}



