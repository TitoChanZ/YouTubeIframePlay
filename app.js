var url = document.URL
var params = new URLSearchParams(window.location.search)
var text = document.getElementById('getData')
// var iframeYT = document.getElementById('iframeYT')

// Parámetros Para Reproducir
var playYtType = null
var idYT = null
var idYtPlayList = null
var indexYtPlay = null

var player;

function onYouTubeIframeAPIReady() {
  if (params!='null'){
    playYtType = params.get('playType')
    idYT = params.get('id')
    idYtPlayList = params.get('playList')
    indexYtPlay = params.get('indexPlay')
    // text.innerHTML='Con parámetros | '+params+' | '+idYT
    text.innerHTML='Parámetros Completos | '+idYT
    var urlYT = `https://www.youtube.com/?id=${idYT}`
    text.innerHTML=urlYT
    player = new YT.Player('player', {
      // videoId: '',  // ID del video de YouTube
      playerVars: {
        'autoplay': 0,           // Reproducción automática (opcional)
        'loop': 1,               // Repetir playlist (opcional)
        'modestbranding': 1,     // Quitar marca de YouTube (opcional)
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    })
  }else{
    text.innerHTML='Sin Datos'+" | "+params
  }
    
}

function onPlayerReady(event) {
    // Iniciar el video automáticamente
    // player.setShuffle(true)
    // player.nextVideo()
    // event.target.playVideo();
    if(playYtType==0 && idYT ){
      text.innerHTML="Video cargado por id: "+idYT
      playYtById(idYT)
    }else if(playYtType==1 && idYtPlayList ){
      playYtList(idYtPlayList,indexYtPlay)
    }
    // playYtList('PLT5y5w-8B2ArLlpSxhO-F_LpMUpA8-jBp',4)
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
      console.log('El video está reproduciéndose');
  } else if (event.data == YT.PlayerState.PAUSED) {
      console.log('El video está pausado');
  }
  // targetFrame.contentWindow.postMessage("eventosDeYt", targetOrigin)
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

function playYtList(idList,index){
  player.loadPlaylist({
    listType: 'playlist',
    list: idList,
    index: index,        
    // startSeconds: 120, 
  })
}

function playYtById(id){
  player.loadVideoById({videoId:id})
}









// setTimeout(()=>{player.playVideo();},3000)

// if (player) {
//   player.pauseVideo();  // Pausa el video
//   console.log('Pause');
// }

// juoRKH4YWrA  DVRST, STM - Electric Dream
// gyXy0m-4bvE  NU'EST(뉴이스트) _ FACE(페이스)
// PLT5y5w-8B2ArLlpSxhO-F_LpMUpA8-jBp PlayListId