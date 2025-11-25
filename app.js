// Simple KaiOS-compatible launcher behavior.
// It builds URLs to open YouTube Music mobile pages in the browser.
(function(){
  function openUrl(url) {
    // KaiOS apps often use window.open to launch the browser
    try { window.open(url, "_blank"); }
    catch(e) { location.href = url; }
  }

  document.getElementById('searchBtn').addEventListener('click', function(){
    var q = document.getElementById('q').value.trim();
    if(!q) { alert('Enter a search term'); return; }
    var url = 'https://music.youtube.com/search?q=' + encodeURIComponent(q);
    openUrl(url);
  });

  document.getElementById('openTrending').addEventListener('click', function(){
    openUrl('https://music.youtube.com/explore');
  });

  document.getElementById('openLibrary').addEventListener('click', function(){
    openUrl('https://music.youtube.com/library');
  });

  document.getElementById('openTopCharts').addEventListener('click', function(){
    openUrl('https://music.youtube.com/playlist?list=PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI'); // example chart playlist
  });

  // keyboard fallback for KaiOS feature phones: handle soft keys (Left/Right/Center) if desired
  window.addEventListener('keydown', function(e){
    // center key / enter -> search
    if(e.key === 'Enter') {
      document.getElementById('searchBtn').click();
    }
  });
})();