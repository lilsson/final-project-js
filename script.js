
 let burgerButton = document.getElementById('togglebutton');
 let navBar = document.getElementById('navigation-ul');

 burgerButton.addEventListener('click',  function() {
    navBar.classList.toggle('toggle');
    burgerButton.classList.toggle('active');

})