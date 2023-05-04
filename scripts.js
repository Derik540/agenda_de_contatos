const botao = document.getElementById('mostrar-formulario');
const formulario = document.getElementById('formulario');
const botaoEnviar = document.getElementById('blt-enviar');
let linhas = '';
let numeroDeTelefone = []
let NomesDeContato = []

botao.addEventListener('click', function () {
  formulario.style.display = 'block';
})

function FechaPopUp() {
  document.addEventListener('click', function (e) {
    if (!formulario.contains(e.target)) {
      formulario.style.display = 'none'
    }
  })
}

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  FechaPopUp()
  Crialinhas();
  AtualizaTabela();
});

function Crialinhas() {
  let inputNome = document.getElementById('nome');
  let inputTele = document.getElementById('tel');

  if (numeroDeTelefone.includes(inputTele.value)) {
    alert(`O número de Telefone:${inputTele.value} já existe`)
  } else {

    NomesDeContato.push(String(inputNome.value))
    numeroDeTelefone.push(inputTele.value)

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTele.value}</td>`
    linha += '</tr>';

    linhas += linha;

  }

  inputNome.value = '';
  inputTele.value = '';

}

function AtualizaTabela() {
  const CorpoTabela = document.querySelector('tbody')
  CorpoTabela.innerHTML = linhas;
}
