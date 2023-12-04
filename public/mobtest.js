var mobile = 0;
if (navigator.userAgent.match(/Android/i) ||
navigator.userAgent.match(/webOS/i) ||
navigator.userAgent.match(/iPhone/i) ||
navigator.userAgent.match(/iPad/i) ||
navigator.userAgent.match(/iPod/i) ||
navigator.userAgent.match(/BlackBerry/i) ||
navigator.userAgent.match(/Windows Phone/i)) {
    document.getElementById("CSSfile").innerHTML = '\<link rel="stylesheet" href="stylesm.css"\>';
    mobile = 1;
}
else
{
    document.getElementById("CSSfile").innerHTML = '\<link rel="stylesheet" href="styles.css"\>';
}
