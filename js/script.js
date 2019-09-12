
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

//play video when visible
var vid = document.getElementById("reelVideo");
vid.autoplay = true;
vid.load();


var pic = document.getElementById('bil')
var x = 1;
function changeImage() {
  if (x=1) {
    pic.style.backgroundImage = 'url("../Images/coffee.png")';
    x=3;

  }
  else {
    pic.style.backgroundImage = 'url("../Images/weed.png")';
    x = 1;

  }
}
