/* When clicking apply in iframe, make page change in browser and not just in the iframe. */
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

/* Sidebar button */
function openNav() {
  document.getElementById("navigation").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("navigation").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}