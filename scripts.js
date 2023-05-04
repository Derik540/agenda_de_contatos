const botao = document.getElementById('mostrar-formulario');
const formulario = document.getElementById('formulario');
const botaoEnviar = document.getElementById('blt-enviar');
let linhas = '';
let numeroDeTelefone = []
let NomesDeContato = []

function FechaPopUp() {
  document.addEventListener('click', function (e) {
    if (!formulario.contains(e.target)) {
      formulario.style.display = 'none'
    }
  })

}
botao.addEventListener('click', function () {
  formulario.style.display = 'block';
});

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  FechaPopUp()
  Crialinhas();
  AtualizaTabela();
});

function Crialinhas() {
  let inputNome = document.getElementById('nome');
  let inputTele = document.getElementById('tel');

  if(NomesDeContato.includes(inputNome.value)){
     alert(`Contato:${inputNome.value} já existe`)
}else{

 NomesDeContato.push(String(inputNome.value))
 numeroDeTelefone.push(parseInt(inputTele.value))

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


 







