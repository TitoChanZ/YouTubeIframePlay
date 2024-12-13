var url = document.URL
var params = new URLSearchParams(window.location.search)
var text = document.getElementById('getData')
// var iframeYT = document.getElementById('iframeYT')



var player;

function onYouTubeIframeAPIReady() {
  if (params!='null'){
    var idYT = params.get('id')
    text.innerHTML='Con parámetros | '+params+' | '+idYT
    if(idYT){
      text.innerHTML='Parámetros Completos | '+idYT
      var urlYT = `https://www.youtube.com/?id=${idYT}`
      text.innerHTML=urlYT
      player = new YT.Player('player', {
          
          videoId: idYT,  // Reemplaza 'VIDEO_ID' con el ID del video de YouTube
          events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
          }
      });
  
    }
  }else{
    text.innerHTML='Sin Datos'+" | "+params
  }
    
}

function onPlayerReady(event) {
    // Si quieres iniciar el video automáticamente
    event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
      console.log('El video está reproduciéndose');
  } else if (event.data == YT.PlayerState.PAUSED) {
      console.log('El video está pausado');
  }
}
window.addEventListener('message', function(event) {
  // if (event.origin === 'https://mi-dominio-con-cifrado.com') {
      if (event.data === 'play') {
          player.playVideo();  // Reproducir el video
      } else if (event.data === 'pause') {
          player.pauseVideo();  // Pausar el video
      }
  // }
  console.log("[https] "+event.data)
});

// setTimeout(()=>{player.playVideo();},3000)

// if (player) {
//   player.pauseVideo();  // Pausa el video
//   console.log('Pause');
// }

// juoRKH4YWrA  DVRST, STM - Electric Dream
// gyXy0m-4bvE  NU'EST(뉴이스트) _ FACE(페이스)