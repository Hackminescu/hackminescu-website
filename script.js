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
    animatie();


