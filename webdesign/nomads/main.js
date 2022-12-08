const bottomReveal = document.querySelector(".bottomReveal")
const mainDiv = document.querySelector("main")
const section01 = document.querySelector(".design-section01");

function exit() {
    section01.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    });

    setTimeout(() => {
        bottomReveal.style.animationDirection = "reverse";
        mainDiv.classList.remove("bottomReveal");
        void mainDiv.offsetWidth;
        mainDiv.classList.add("bottomReveal");
    }, 600)

    setTimeout(() => {
        window.location = '../index.html'
    }, 1000)
}

var videoItems = document.querySelectorAll('.video-item');
videoItems.forEach(function(videoItem) {  
    var video = videoItem.querySelector('video');
    video.addEventListener('loadedmetadata', function(e){
        var videoAspectRatio = video.videoWidth / video.videoHeight;
        videoItem.style.flex = videoAspectRatio + ' 1 0%';
    });

});

var imageItems = document.querySelectorAll('.image-item');
imageItems.forEach(function(imageItem) {
  var img = imageItem.querySelector('img');
  var imgAspectRatio = img.naturalWidth / img.naturalHeight;
  
  imageItem.style.flex = imgAspectRatio + ' 1 0%';
});

