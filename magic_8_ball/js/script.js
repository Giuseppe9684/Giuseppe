//alert("JS works")
function magic8ball() {
    askAQuestion();
    shake();
    getAFortune();
}


function askAQuestion() {
   // alert("ask a yes/no question and recieve a fortune")
}
function shake () {
    //alert("I'm shaking")
}
function getAFortune() {
//random
//to choose an anwser
//list of anwsers
    var fortunes = ["yes", "no", "maybe"]
    var num = randomNumber(fortunes.length)
    displayFortune(fortunes[num])
}

function displayFortune(fortune) {
    //alert(fortune)
    document
    .getElementById("fortune")
    .innerHTML = fortune
}
function randomNumber(n) {
    return Math.floor(Math.random() * n)
}