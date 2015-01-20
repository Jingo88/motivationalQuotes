var button = document.querySelector('button');

button.addEventListener('click', function(){
	randomQuote();
});

function randomQuote(){
    var url = "http://localhost:3000/"
    var xhr = new XMLHttpRequest();
    
    xhr.addEventListener('load', function(e) {
        var d = xhr.responseText
        var parsed = JSON.parse(d)
        console.log(parsed);
    })
    xhr.open("GET", url);
    xhr.send();
}