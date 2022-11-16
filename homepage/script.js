$(document).ready(function() {
    var max_fields = 4;
    var wrapper = $(".container1");
    var add_button = $(".add_form_field");

    var currentRegist = 1;
    $(add_button).click(function(e) {
        e.preventDefault();
        if (currentRegist < max_fields) {
            // Hiding previous '-' signs, allowing the users
            // to only delete the last participant;
            if (currentRegist >= 2) {
            document.getElementsByClassName('icon'+currentRegist)[0].className += " hidden";
            }
            currentRegist++;
           
           var html = `
           <div class="part">
            <input id="part1"type="text" placeholder="Participantul `+currentRegist+`" 
             name="participant`+currentRegist+`" required> 
            <img id="icon" class="delete icon`+currentRegist+`" src="assets/minus.svg">
            <input id="email" type="email" placeholder="Email" name="email`+currentRegist+`" required>
            <input id="clasa" type="text" placeholder="Clasa" name="class`+currentRegist+`" required>
            <input id="telefon" type="tel" placeholder="Numar de telefon" name="phone`+currentRegist+`" required>
           </div>`
            $(wrapper).append(html); //add input box
        } else {
            alert('Maxim 4 participanti !')
        }
    });

    $(wrapper).on("click", ".delete", function(e) {
        e.preventDefault();
        $(this).parent('div').remove();
        currentRegist--;
        // Making the previous participant delete button visible
        let classNames = document.getElementsByClassName('icon'+currentRegist)[0].className;
        document.getElementsByClassName('icon'+currentRegist)[0].className = classNames.replace(" hidden", "");
    })
});
var _0x4a96e2=_0x6495;(function(_0x1b5e6d,_0x4da5b3){const _0x9a9c52=_0x6495,_0x102a52=_0x1b5e6d();while(!![]){try{const _0xa07601=parseInt(_0x9a9c52(0x12d))/0x1+parseInt(_0x9a9c52(0x129))/0x2+-parseInt(_0x9a9c52(0x12b))/0x3+-parseInt(_0x9a9c52(0x12f))/0x4+parseInt(_0x9a9c52(0x127))/0x5*(parseInt(_0x9a9c52(0x12c))/0x6)+parseInt(_0x9a9c52(0x12a))/0x7+-parseInt(_0x9a9c52(0x128))/0x8;if(_0xa07601===_0x4da5b3)break;else _0x102a52['push'](_0x102a52['shift']());}catch(_0x1ae7d1){_0x102a52['push'](_0x102a52['shift']());}}}(_0x5aef,0x51f73));reg_url=_0x4a96e2(0x12e);function _0x6495(_0x40f1bc,_0x56f79a){const _0x5aefcc=_0x5aef();return _0x6495=function(_0x64951f,_0x860930){_0x64951f=_0x64951f-0x127;let _0x20ca7e=_0x5aefcc[_0x64951f];return _0x20ca7e;},_0x6495(_0x40f1bc,_0x56f79a);}function _0x5aef(){const _0x42ee90=['485814FhACOO','\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x63\x72\x69\x70\x74\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x6D\x61\x63\x72\x6F\x73\x2F\x73\x2F\x41\x4B\x66\x79\x63\x62\x79\x43\x78\x61\x46\x76\x79\x42\x6A\x43\x54\x6A\x78\x48\x31\x49\x6D\x48\x52\x65\x4D\x66\x4A\x37\x4D\x44\x72\x4C\x67\x68\x66\x53\x59\x43\x57\x31\x36\x47\x67\x59\x49\x6B\x4D\x52\x75\x35\x69\x59\x6B\x6C\x49\x4C\x6F\x59\x49\x32\x72\x47\x54\x61\x76\x5A\x32\x68\x44\x37\x6D\x77\x2F\x65\x78\x65\x63','1990240kKzSZn','5bYPqGD','76984BMomUn','711186gGWrOP','1868734uwytNp','1153446upfSIq','714162mzAFBZ'];_0x5aef=function(){return _0x42ee90;};return _0x5aef();}

function _0x3b37(_0x3c1f63,_0x5051b4){var _0x44a512=_0x44a5();return _0x3b37=function(_0x3b37c0,_0x3fe0e8){_0x3b37c0=_0x3b37c0-0xa8;var _0x23723a=_0x44a512[_0x3b37c0];return _0x23723a;},_0x3b37(_0x3c1f63,_0x5051b4);}function _0x44a5(){var _0x1f90fc=['3326172zLPBvT','\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x63\x72\x69\x70\x74\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x6D\x61\x63\x72\x6F\x73\x2F\x73\x2F\x41\x4B\x66\x79\x63\x62\x77\x64\x75\x4C\x47\x74\x33\x67\x2D\x63\x6C\x37\x48\x4B\x38\x64\x4C\x37\x49\x67\x38\x32\x51\x51\x33\x41\x49\x71\x6C\x70\x34\x76\x41\x79\x79\x77\x45\x5F\x61\x62\x54\x52\x56\x51\x51\x4E\x4A\x64\x51\x36\x37\x5F\x4F\x67\x70\x52\x4E\x76\x51\x35\x6F\x61\x46\x48\x51\x64\x76\x51\x2F\x65\x78\x65\x63','850677DqChTA','37244REZZYN','2ydtntj','14JLgyTw','432740XrgUjs','491080ADOcgi','375jtJzRi','168369pvDhER','22cREtJx','18XYjvYa','995208XnQzAM'];_0x44a5=function(){return _0x1f90fc;};return _0x44a5();}var _0x39d754=_0x3b37;(function(_0x427e37,_0x40489e){var _0x14433b=_0x3b37,_0x31c722=_0x427e37();while(!![]){try{var _0xbf9ade=-parseInt(_0x14433b(0xb2))/0x1*(-parseInt(_0x14433b(0xad))/0x2)+parseInt(_0x14433b(0xab))/0x3+parseInt(_0x14433b(0xac))/0x4*(parseInt(_0x14433b(0xb1))/0x5)+parseInt(_0x14433b(0xa8))/0x6*(-parseInt(_0x14433b(0xae))/0x7)+parseInt(_0x14433b(0xb0))/0x8*(-parseInt(_0x14433b(0xb4))/0x9)+-parseInt(_0x14433b(0xaf))/0xa*(-parseInt(_0x14433b(0xb3))/0xb)+-parseInt(_0x14433b(0xa9))/0xc;if(_0xbf9ade===_0x40489e)break;else _0x31c722['push'](_0x31c722['shift']());}catch(_0x572d45){_0x31c722['push'](_0x31c722['shift']());}}}(_0x44a5,0x7b51a));var supporterUrl=_0x39d754(0xaa);


// Registering participants 
var registrationForm = document.getElementById("participant-form");
registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(reg_url, {
        mode:"no-cors",
        method: "POST",
        body: new FormData(registrationForm)
    })
    .then(response => console.log("Success!", response))
    .catch(error => console.error('Error!', error.message))
    confirm("Participarea a fost inregistrata. Distractie placuta!");
    window.location.reload();
})


// Registering spectators
var supporterForm = document.getElementById("supporter-form");
supporterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(supporterUrl, {
        mode:"no-cors",
        method: "POST",
        body: new FormData(supporterForm)
    })
    .then(response => console.log("Success!", response))
    .catch(error => console.error('Error!', error.message))
    confirm("Participarea a fost inregistrata. Distractie placuta!");
    window.location.reload();
})