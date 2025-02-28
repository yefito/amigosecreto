// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos =[];
function agregarTexto(elemento , texto){
    document.querySelector(elemento).innerHTML=texto;
}
function agregarAmigo(){
    let input = document.getElementById('amigo');
    let nombre = input.value;

  if (nombre.trim() === '') {
    alert('Por favor, inserte un nombre.');
    return;
  }
  listaAmigos.push(nombre);
  input.value = '';
  actualizarLista(listaAmigos);
}
function actualizarLista(amigos){
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML= "";

  for(let i = 0; i < amigos.length; i++){
    let nuevoNombre =document.createElement('li');
    nuevoNombre.textContent = amigos[i];
    lista.appendChild(nuevoNombre);
  }
}

function sortearAmigo(amigos){
    if (amigos.length ===0){
      document.getElementById('resultado').innerHTML = "No hay amigos disponibles para sortear.";
      return;
    }
    let indiceAleatorio= Math.floor(Math.random() * amigos.length);
    let amigoSorteado =amigos[indiceAleatorio];
    document.getElementById('resultado').innerHTML = `El amigo secreto es: ${amigoSorteado} 🥳🎉`;
  }

document.getElementById('botonSortear').addEventListener('click', function() {
  sortearAmigo(listaAmigos)
});