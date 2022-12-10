// const addMovieModal = document.querySelector('#add-modal')
// const addMovieModal = document.body.children[1]
// const backdrop = document.body.firstElementChild
const addMovieModal = document.getElementById('add-modal')
const startAddMovieButton = document.querySelector('header button')
const backdrop = document.getElementById('backdrop')
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive')

const toggleBackdrop= () => {
    backdrop.classList.toggle('visible')
}

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible') // 'visible' is defined in app.css modal class
    toggleBackdrop()
}

const cancelAddButton = () => {
    toggleMovieModal()
}

const backdropClickHandler = () => {
    toggleMovieModal()
}

startAddMovieButton.addEventListener('click', toggleMovieModal)
backdrop.addEventListener('click', backdropClickHandler)
cancelAddMovieButton.addEventListener('click', cancelAddButton)