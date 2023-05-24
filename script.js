const score = document.getElementById("text");
const button = document.getElementById("butt")

var element = document.getElementById("aboba");
element.textContent = "Милан - самый лучший город он лучше рима я не видел города нигде такого клёвого😘";
element.style.fontSize = "20px";
element.style.position = "relative";
element.style.top = "550px";



 button.style.left = 55 + '%';
let a = "Милан - самый лучший город? 🤨";

score.textContent = a;

 var audio2 = new Audio("https://cdn.discordapp.com/attachments/844973270239150080/1110940587068244040/Milan-luchshii-gorod.mp3");

       function playAudio() {
            audio2.play();
       }

        var button2 = document.getElementById("butt2");
        button2.addEventListener("click", playAudio);

function addNumber(){
   // a++;
   score.textContent = a;

    const x = Math.floor(Math.random() * 90);
    const y = Math.floor(Math.random() * 90);
    button.style.left = x + '%';
    button.style.top = y + '%';
    var PipeSound = document.getElementById("pipe-sound");
    PipeSound.currentTime = 0;
    PipeSound.play();

}