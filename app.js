var url = document.URL
var params = new URLSearchParams(window.location.search)
var text = document.getElementById('getData')
var iframeYT = document.getElementById('iframeYT')
if (params!='null'){
  var idYT = params.get('id')
  var siYT = params.get('si')
  text.innerHTML='Con parámetros | '+params+' | '+idYT+' | '+siYT
  if(idYT && siYT){
    text.innerHTML='Parámetros Completos | '+idYT+' | '+siYT
    var urlYT = `https://www.youtube.com/embed/${idYT}?si=${siYT}?autoplay=1&mute=1&loop=1`
    iframeYT.src=urlYT
    text.innerHTML=urlYT

  }
}else{
  text.innerHTML='Sin Datos'+" | "+params
}


// text.innerHTML=params.get('id')

// iframeYT.src='https://www.youtube.com/embed/Z63jUnZN1lw?si=KW09ZEsFAZhSU6o-'

// https://youtu.be/Z63jUnZN1lw?si=KW09ZEsFAZhSU6o-

{/* <iframe  src="https://www.youtube.com/embed/Z63jUnZN1lw?si=KW09ZEsFAZhSU6o-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
// <iframe width="560" height="315" src="https://www.youtube.com/embed/m9SMT5ipbxk?si=6RVAtqR-9C8LfHvT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>