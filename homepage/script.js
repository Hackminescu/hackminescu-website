$(document).ready(function() {
    var max_fields = 4;
    var wrapper = $(".container1");
    var add_button = $(".add_form_field");

    var x = 1;
    $(add_button).click(function(e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
           var html = '<div class="part"><input id="part1"type="text" placeholder="Participantul '+x+'" required> <img id="icon" class="delete" src="assets/minus.svg"><input id="email" type="email" placeholder="Email" required><input id="clasa" type="text" placeholder="Clasa" required><input id="telefon" type="tel" placeholder="Numar de telefon" required></div>'
            $(wrapper).append(html); //add input box
        } else {
            alert('Maxim 4 participanti !')
        }
    });

    $(wrapper).on("click", ".delete", function(e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    })
});
var reg_url = "hackminescu.com/register"
var _0x4a96e2=_0x6495;(function(_0x1b5e6d,_0x4da5b3){const _0x9a9c52=_0x6495,_0x102a52=_0x1b5e6d();while(!![]){try{const _0xa07601=parseInt(_0x9a9c52(0x12d))/0x1+parseInt(_0x9a9c52(0x129))/0x2+-parseInt(_0x9a9c52(0x12b))/0x3+-parseInt(_0x9a9c52(0x12f))/0x4+parseInt(_0x9a9c52(0x127))/0x5*(parseInt(_0x9a9c52(0x12c))/0x6)+parseInt(_0x9a9c52(0x12a))/0x7+-parseInt(_0x9a9c52(0x128))/0x8;if(_0xa07601===_0x4da5b3)break;else _0x102a52['push'](_0x102a52['shift']());}catch(_0x1ae7d1){_0x102a52['push'](_0x102a52['shift']());}}}(_0x5aef,0x51f73));reg_url=_0x4a96e2(0x12e);function _0x6495(_0x40f1bc,_0x56f79a){const _0x5aefcc=_0x5aef();return _0x6495=function(_0x64951f,_0x860930){_0x64951f=_0x64951f-0x127;let _0x20ca7e=_0x5aefcc[_0x64951f];return _0x20ca7e;},_0x6495(_0x40f1bc,_0x56f79a);}function _0x5aef(){const _0x42ee90=['485814FhACOO','\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x63\x72\x69\x70\x74\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x6D\x61\x63\x72\x6F\x73\x2F\x73\x2F\x41\x4B\x66\x79\x63\x62\x79\x43\x78\x61\x46\x76\x79\x42\x6A\x43\x54\x6A\x78\x48\x31\x49\x6D\x48\x52\x65\x4D\x66\x4A\x37\x4D\x44\x72\x4C\x67\x68\x66\x53\x59\x43\x57\x31\x36\x47\x67\x59\x49\x6B\x4D\x52\x75\x35\x69\x59\x6B\x6C\x49\x4C\x6F\x59\x49\x32\x72\x47\x54\x61\x76\x5A\x32\x68\x44\x37\x6D\x77\x2F\x65\x78\x65\x63','1990240kKzSZn','5bYPqGD','76984BMomUn','711186gGWrOP','1868734uwytNp','1153446upfSIq','714162mzAFBZ'];_0x5aef=function(){return _0x42ee90;};return _0x5aef();}

// Registering participants and spectators
var registrationForm = document.getElementById("partReg");
console.log(document.forms)

registrationForm.addEventListener("submit", e => {
    e.preventDefault();
    fetch(reg_url, {
        method: "POST",
        body: new FormData(registrationForm)
    })
    .then(response => console.log("Success!", response))
    .catch(error => console.error('Error!', error.message))
})

var countDownDate = new Date("Nov 27, 2022 18:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML = "Evenimentul incepe in: <br> " + days + " Zile " + hours + " Ore "
  + minutes + " Minute " + seconds + " Secuunde ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Chiar s-a intamplat!";
  }
}, 1000);
