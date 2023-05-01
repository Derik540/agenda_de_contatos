const botao = document.getElementById('mostrar-formulario');
const formulario = document.getElementById('formulario');
const botaoEnviar = document.getElementById('blt-enviar')

botao.addEventListener('click', function() {
  formulario.style.display = 'block';
});

botaoEnviar.addEventListener("click", function(){
  const nomeContato = document.getElementById('nome')
  
  

  const TelefoneContato = document.getElementById('tel')
  
  

  alert(`Nome:${nomeContato.value} Telefone:${TelefoneContato.value}`)

  
})
