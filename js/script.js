// Hamburger Menu

var menu = document.querySelector('.nav');
var hamburger = document.querySelector('.hamburger');
var menuItems = document.querySelectorAll('.nav ul li');

hamburger.addEventListener('click', function () {
    menu.classList.toggle('show');
    hamburger.classList.toggle('show');
});


// Editor

ClassicEditor
    .create(document.querySelector('#editor'))
    .then(editor => {
        console.log(editor);
    })
    .catch(error => {
        console.error(error);
    });


// DropDown and Modal

function myFunction() {
    document.getElementById('dropdown-content').classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('modal');
    var openModalBtn = document.getElementById('openModal');
    var closeBtn = document.getElementsByClassName('close')[0];
    var CloseBtn = document.getElementsByClassName('btn-close')[0];

    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    CloseBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    modal.style.display = 'none'; // Hide the modal when the page is loaded

    window.addEventListener('click', function (event) {
        if (!event.target.matches('.dropbtn')) {
            var drop = document.getElementById('dropdown-content');
            if (drop.classList.contains('show')) {
                drop.classList.remove('show');
            }
        }
    });
});