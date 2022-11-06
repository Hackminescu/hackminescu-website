const animatie = () =>{
    const meniu = document.querySelector('.meniu');
    const nav = document.querySelector('.nav-links');
    const navLink = document.querySelectorAll('.nav-links li')

   meniu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLink.forEach((link,index) => {
        if(link.style.animation){
            link.style.animation = ``;
        } else {
            link.style.animation = `fade 0.5s ease forwards ${index/7 + 0.4}s`
        }

        });
        meniu.classList.toggle('toggle');
   });
}
var countDownDate = new Date("Jan 5, 2023 18:00:00").getTime();

var x = setInterval(function() {


  var now = new Date().getTime();


  var distance = countDownDate - now;


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("timer").innerHTML = "Starts in: " + days + "D " + hours + "H "
  + minutes + "M " + seconds + "S ";


  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Chiar s-a intamplat!";
  }

}, 1000);

    animatie();


