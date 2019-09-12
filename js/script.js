
// progressbar oppe i toppen
document.addEventListener(
  "scroll",
  function() {
    var scrollTop =
      document.documentElement["scrollTop"] || document.body["scrollTop"];
    var scrollBottom =
      (document.documentElement["scrollHeight"] ||
        document.body["scrollHeight"]) - document.documentElement.clientHeight;
    scrollPercent = scrollTop / scrollBottom * 100 + "%";
    document.getElementById("progress").style.setProperty("--scroll", scrollPercent);
  },
  { passive: true }
);

//autoplay frontpage video
var vid = document.getElementById("reelVideo");
vid.autoplay = true;
vid.load();


//autoplay second video when in viewport
/**
 * fil: audio.js
 * purpose: play audio when the containing div is visible
 **/

// eventlistener: a window scroll
window.addEventListener("scroll", function() { // detect scroll event

  var mySound = document.getElementById("myaudio"); // select audio id
  var lyd = document.getElementById("lyd");
  console.log("Er div #lyd synlig? " + elFllVsbl(lyd)); // test

// Below: start and stop audio
  if (elFllVsbl(lyd)) { // if the #lyd div is visible then
    if (!(mySound.curentTime > 0)) {
      mySound.play(); // play audio
    }
  } else {
    mySound.pause();
    mySound.currentTime = 0; // rewind the sound
  }
})

// this function will check whether a tag is visible
function elFllVsbl(el) {
  return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}

/*
NB: the audio / video tags will allways return true,
solution: place the tag in a div and test for that div.
*/


//billedeskift
var pic = document.getElementById('polaroid')
var x = 1;
function changeImage() {
  if (x===1) {
    pic.style.backgroundImage = 'url("/images/polaroid02.png")';
    x=2;

  }
  else if(x===2) {
    pic.style.backgroundImage = 'url("/images/polaroid03.png")';
    x = 3;

  }

  else if (x===3) {
    pic.style.backgroundImage = 'url("/images/polaroid.png")';
    x=1;
  }
}
