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
