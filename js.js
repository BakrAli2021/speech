let input = document.querySelector('.inputbx input'),
    btn = document.querySelector('.inputbx .icon'),
    icon = document.querySelector('.inputbx .icon i');
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SpeechRecognition) {
    alert("NOt Supported with this broweser please change to Chrome");
} else {
    let recognition = new SpeechRecognition();
    btn.addEventListener("click", () => {
        // icon.classList.toggle('fa-microphone-slash');
        if (icon.classList.contains('fa-microphone')) {

            recognition.start()

        } else {

            recognition.stop();
        }

    });
    recognition.onstart = function() {
        icon.classList.replace('fa-microphone', 'fa-microphone-slash');

    }
    recognition.onend = function() {
        icon.classList.replace('fa-microphone-slash', 'fa-microphone');
        input.value = "";
    }
    recognition.addEventListener('result', function(event) {

        let transcript = event.results[0][0].transcript;
        input.value = transcript;
        /* setTimeout(() => {
             search(transcript);
         }, 2000)*/
        input.style.backgroundColor = transcript;
    })
}

function search(searchvalue) {
    window.location.href = `https://www.google.com/search?q=${searchvalue}`;
}
