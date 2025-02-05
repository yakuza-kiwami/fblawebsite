/*
document.getElementById("listwindow").addEventListener('load', function() {
    var iframeDoc = document.getElementById('toApplications').contentWindow.document;
    var links = iframeDoc.querySelectorAll('a');
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = link.href;
      });
    });
});
*/

function sortPostings(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}