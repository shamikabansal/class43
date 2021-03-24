var speechRecogination = window.webkitSpeechRecognition;
var recognition = new speechRecogination();

function start() {
document.getElementById('textbox').innerHTML="";
recognition.start();
}
