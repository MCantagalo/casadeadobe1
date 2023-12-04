var wrongHost;
if (typeof wrongHostTest === 'function') {wrongHost = wrongHostTest();} else {wrongHost = 1;};
if (wrongHost) {
    var warningHTML = "<h1 style='text-align:center;'><br><br>Este modelo pertence a empresa Siasano:<br>"
    warningHTML += "<a href='https://www.siasano.com'>SIASANO</a></h1>",
    document.querySelector('html').innerHTML = warningHTML;
}
$(document).ready(function() {
});