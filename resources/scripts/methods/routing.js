document.getElementById('myIframe').addEventListener('load', function() {
    var iframeDoc = document.getElementById('toApplications').contentWindow.document;
    var links = iframeDoc.querySelectorAll('a');
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = link.href;
      });
    });
});

function openNav() {
  document.getElementById("navigation").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("navigation").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}