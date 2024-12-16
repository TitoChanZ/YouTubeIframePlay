var url = document.URL
var params = new URLSearchParams(window.location.search)
var text = document.getElementById('getData')
// var iframeYT = document.getElementById('iframeYT')



var player;

function onYouTubeIframeAPIReady() {
  if (params!='null'){
    var idYT = params.get('id')
    var playList = params.get('playList')
    text.innerHTML='Con parámetros | '+params+' | '+idYT
    if(idYT){
      text.innerHTML='Parámetros Completos | '+idYT
      var urlYT = `https://www.youtube.com/?id=${idYT}`
      text.innerHTML=urlYT
      player = new YT.Player('player', {
          
          videoId: idYT,  // ID del video de YouTube
          playerVars: {
            'playlist': playList,  // ID de la playlist (reemplaza con tu lista)
            'autoplay': 1,           // Reproducción automática (opcional)
            'loop': 1,               // Repetir playlist (opcional)
            'modestbranding': 1,     // Quitar marca de YouTube (opcional)
          },
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
    // Iniciar el video automáticamente
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
  // if (event.origin === 'https://titochanz.github.io/') {
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
// PLT5y5w-8B2ArLlpSxhO-F_LpMUpA8-jBp PlayListId