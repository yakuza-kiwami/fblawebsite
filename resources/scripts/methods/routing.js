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