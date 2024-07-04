document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.querySelector('.search-form');
    const searchBtn = document.querySelector('#search-btn');

    searchBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        searchForm.classList.toggle('active');
        shoppingCart.classList.remove('active');
        loginform.classList.remove('active');
        navbar.classList.remove('active');

    });
});
document.addEventListener('DOMContentLoaded', function () {
    const shoppingCart = document.querySelector('.shopping-cart');
    const cartBtn = document.querySelector('#cart-btn');

    cartBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        shoppingCart.classList.toggle('active');
        searchForm.classList.remove('active');
        loginform.classList.remove('active');
        navbar.classList.remove('active');

    });
});

document.addEventListener('DOMContentLoaded', function () {
    const loginform = document.querySelector('.login-form');
    const userBtn = document.querySelector('#user-btn');

    userBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        loginform.classList.toggle('active');
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        navbar.classList.remove('active');

    });
});
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('#menu-btn');

    menuBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        loginform.classList.remove('active');
        navbar.classList.toggle('active');

    });
});
window.onscroll = () => {
    const searchForm = document.querySelector('.search-form');
    const shoppingCart = document.querySelector('.shopping-cart');
    const loginform = document.querySelector('.login-form');
    const navbar = document.querySelector('.navbar');

    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');

}




document.addEventListener('DOMContentLoaded', function () {
    var productSliders = document.querySelectorAll('.products-slider');

    productSliders.forEach(function (slider) {
        var swiper = new Swiper(slider, {
            // Optional Swiper options
            slidesPerView: 'auto',
            loop: true,
            spaceBetween: 20,
            // Add more options as needed

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 5000, // Delay between slides in milliseconds
                disableOnInteraction: false, // sEnable/disable autoplay on user interaction
            },
        });
    });
});




document.addEventListener('DOMContentLoaded', function () {
    var productSliders = document.querySelectorAll('.review-slider');

    productSliders.forEach(function (slider) {
        var swiper = new Swiper(slider, {
            // Optional Swiper options
            slidesPerView: 'auto',
            loop: true,
            spaceBetween: 20,
            // Add more options as needed

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 5000, // Delay between slides in milliseconds
                disableOnInteraction: false, // sEnable/disable autoplay on user interaction
            },
        });
    });
});



