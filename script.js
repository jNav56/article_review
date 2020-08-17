//Javascript file
var shareButton = document.getElementsByClassName("button");
shareButton[0].addEventListener("click", function() {
    var share = document.getElementsByClassName("share");
    if (share[0].style.display === "none") {
        share[0].style.display = "block";
    } else {
        share[0].style.display = "none";
    }
})

var facebookShare = document.getElementsByClassName("facebook");
facebookShare[0].addEventListener("click", function() {

})

var twitterShare = document.getElementsByClassName("twitter");
twitterShare[0].addEventListener("click", function() {

})

var pinterestShare = document.getElementsByClassName("pinterest");
pinterestShare[0].addEventListener("click", function() {
    alert("yo dawg");
})
