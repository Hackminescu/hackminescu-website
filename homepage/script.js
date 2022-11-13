$(document).ready(function() {
    var max_fields = 4;
    var wrapper = $(".container1");
    var add_button = $(".add_form_field");

    var x = 1;
    $(add_button).click(function(e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
           var html = '<div  class="align"><input type="text" placeholder="Participantul '+x+'" name="participant'+x+'" required> <img id="icon" class="delete" src="assets/minus.svg"></div>'
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
