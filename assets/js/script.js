const toggleButton = document.getElementsByClassName('toggle_button')[0]
const navbar = document.getElementsByTagName('ul')[0]

toggleButton.addEventListener('click', () => {
navbar.classList.toggle('active')
})