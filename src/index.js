var button = document.getElementById("button");

button.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('get','https://api.themoviedb.org/3/movie/200?api_key=60d70c72ef8913b3400910c0f869e6b6')
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
        console.log(ourData.title);
        console.log(ourData.tagline);
    };
    ourRequest.send();
});

// Enter random integer to enter into URL 
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  

function renderHTML(data) {

}
