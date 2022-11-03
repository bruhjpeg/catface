// arrumando passar o mouse em cima do titulo

var titulo = document.getElementById('tituloh1')

titulo.addEventListener('mouseenter', entrandotitulo)
titulo.addEventListener('mouseout', saindotitulo)

function entrandotitulo() {
  titulo.style.color = 'white'
}

function saindotitulo() {
  titulo.style.color = 'black'
}

// arrumando a hora (depois tento)

var agora = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
// -------------------------------------
