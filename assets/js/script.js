const toggleButton = document.getElementsByClassName('toggle_button')[0]
const navbar = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
navbar.classList.toggle('active')
})

window.addEventListener("scroll", function(){
    const navBar = document.querySelector(".navbar");
    navBar.classList.toggle("sticky", window.scrollY > 0);
}) 