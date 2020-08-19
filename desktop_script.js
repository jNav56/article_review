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
    var url = "https://www.facebook.com/sharer.php?href=" + document.location + "&p[title]=" + document.title;
    window.open(url,'_blank');
    // alert(url);
})

var twitterShare = document.getElementsByClassName("twitter");
twitterShare[0].addEventListener("click", function() {
    var url = "https://twitter.com/intent/tweet?text=" + document.title + "&url=" + document.location;
    window.open(url,'_blank');
})

var pinterestShare = document.getElementsByClassName("pinterest");
pinterestShare[0].addEventListener("click", function() {
    var url = "http://pinterest.com/pin/create/button/?url=" + document.location + "&description=" + document.title;
    window.open(url,'_blank');
})