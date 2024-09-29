
function toggleEnrollPopup() {
    var popup = document.getElementById('enrollPopup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.querySelector('.show-password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        passwordToggle.textContent = 'Show';
    }
}

function showLoading(event) {
    event.preventDefault();
    var button = document.querySelector('.login-button');
    button.classList.add('loading');

    setTimeout(function () {
        button.classList.remove('loading');
        animateLoginPage();
    }, 4000);
}

function animateLoginPage() {
    const card123 = document.querySelector('.card123');
    const enrollSection = document.querySelector('.enroll-section');
    const footer = document.querySelector('.footer');
    const houseImage = document.querySelector('.house-image img');
    const logoContainer = document.querySelector('.logo-container');
    const logo = document.querySelector('.logo-container img');

    card123.classList.add('hide-form');
    enrollSection.classList.add('hide-form');
    footer.classList.add('hide-form');

    setTimeout(() => {
        houseImage.classList.add('shrink-image');
    }, 1000);

    setTimeout(() => {
        logoContainer.classList.add('fixed');
        logo.style.transform = 'rotate(720deg) scale(1)';
    }, 2500);

    setTimeout(() => {
        logoContainer.classList.add('center-logo');
    }, 4000);

    setTimeout(() => {
        houseImage.style.display = 'none';
    }, 5500);
}

function startAnimation() {
    const startAnimation = document.querySelector('.start-animation');
    const startHouseImage = document.querySelector('.start-house-image');
    const startLogo = document.querySelector('.start-logo');
    const loginContainer = document.querySelector('.login-container');
    const loginForm = document.querySelector('.login-form');
    const houseImage = document.querySelector('.house-image');
    const logoContainer = document.querySelector('.logo-container');
    const card1 = document.querySelector('.card1');

    loginContainer.style.opacity = '0';
    loginContainer.style.display = 'flex';

    const img = new Image();
    img.onload = () => {
        setTimeout(() => {
            startHouseImage.classList.add('enlarge-house');
        }, 1000);

        setTimeout(() => {
            startLogo.classList.add('show-logo');
        }, 3000);

        setTimeout(() => {
            startLogo.classList.add('enlarge-logo');
        }, 5000);

        setTimeout(() => {
            startHouseImage.classList.add('shift-house');
            startLogo.classList.add('move-logo');
        }, 7000);

        setTimeout(() => {
            startAnimation.style.opacity = '0';
            loginContainer.style.opacity = '1';
            houseImage.style.opacity = '1';
            logoContainer.style.opacity = '1';
            setTimeout(() => {
                startAnimation.style.display = 'none';
                card1.classList.add('show-login-form');
            }, 1000);
        }, 9000);
    };
    img.src = 'housse.jpeg';
}

window.onload = startAnimation;
