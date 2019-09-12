
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
var videos = document.getElementsByTagName('video');

function checkScroll() {

  for(var i = 0; i < vidoes.length; i++) {

  } 
}
