function slider() {
    const signinButton = document.querySelector('.b-signin');
    const signupButton = document.querySelector('.b-signup');
    const formular = document.querySelector('.formular');
    const body = document.querySelector('body');

    signupButton.addEventListener ('click', () => {
        formular.classList.add('activ');
    });
    signinButton.addEventListener ('click', () => {
        formular.classList.remove('activ');
    });
}
slider();