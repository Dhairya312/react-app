let searchBtn = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchBtn.classList.toggle('active');
    notification.classList.remove('active');
    cart.classList.remove('active');
}

let loginFormBtn = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () => {
    loginFormBtn.classList.toggle('active');
    notification.classList.remove('active');
    cart.classList.remove('active');
    searchBtn.classList.remove('active');
    form.classList.remove('hide');
    otpForm.classList.add('hide');
}
document.querySelector('#mobile-login-btn').onclick = () => {
    loginFormBtn.classList.toggle('active');
    notification.classList.remove('active');
    cart.classList.remove('active');
    searchBtn.classList.remove('active');
    form.classList.remove('hide');
    otpForm.classList.add('hide');
}
document.querySelector('#close-login-btn').onclick = () => {
    loginFormBtn.classList.toggle('active');
    notification.classList.remove('active');
    cart.classList.remove('active');
    searchBtn.classList.remove('active');
    form.classList.remove('hide');
    otpForm.classList.add('hide');
}

let cart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
    cart.classList.toggle('active');
    notification.classList.remove('active');
    searchBtn.classList.remove('active');
    nav.classList.remove('active');
}

document.querySelector('#cart-mobile-btn').onclick = () => {
    cart.classList.toggle('active');
    notification.classList.remove('active');
    searchBtn.classList.remove('active');
    nav.classList.remove('active');
}

let nav = document.querySelector('.d_tp_mobile_header .navbar');
document.querySelector('#menu-btn').onclick = () => {
    nav.classList.toggle('active');
    notification.classList.remove('active');
    cart.classList.remove('active');
    searchBtn.classList.remove('active');
}

let notification = document.querySelector('.notification');
document.querySelector("#notification-btn").onclick = () => {
    notification.classList.toggle('active');
    cart.classList.remove('active');
    searchBtn.classList.remove('active');
    nav.classList.remove('active');
}
document.querySelector('#mobile-notification-btn').onclick = () => {
    notification.classList.toggle('active');
    cart.classList.remove('active');
    searchBtn.classList.remove('active');
    nav.classList.remove('active');
}

let form = document.querySelector('.login-form-container .non-valid');
let otpForm = document.querySelector('.login-form-container .valid');
document.querySelector("#otp-send").onclick = () => {
    form.classList.add('hide');
    otpForm.classList.remove('hide');
}

const loader = () => {
    document.querySelector('.loader-container').classList.add('fade-out');
}

const fadeOut = () => {
    setTimeout(loader, 2000);
}

window.onload = () => {
    if (window.scrollY > 70) {
        document.querySelector('.d_tp_header').classList.add('active');
    } else {
        document.querySelector('.d_tp_header').classList.remove('active');
    }

    // fadeOut();
}

window.onscroll = () => {
    if (window.scrollY > 70) {
        document.querySelector('.d_tp_header').classList.add('active');
    } else {
        document.querySelector('.d_tp_header').classList.remove('active');
    }
    notification.classList.remove('active');
    cart.classList.remove('active');
    searchBtn.classList.remove('active');
    nav.classList.remove('active');
}

// Swiper
let swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
