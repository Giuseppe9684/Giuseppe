function askQuestion() {
    var q = prompt("how much wood could a wood chuck chuck if a wood chuck could chuck wood");
    if (q !=null) {
        document.getElementById('question').innerHTML='Yikes! ' + q + ' is a lot of wood'
    }
}

function showImage(){
    var image=document.getElementById('surprise');
    image.src = "images/cat.gif";
}