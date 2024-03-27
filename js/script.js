document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.querySelector('.search-form');
    const searchBtn = document.querySelector('#search-btn');

    searchBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        searchForm.classList.toggle('active');
    });
});
