// const addMovieModal = document.querySelector('#add-modal')
// const addMovieModal = document.body.children[1]
const addMovieModal = document.getElementById('add-modal')

const startAddMovieButton = document.querySelector('header button')

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible')
}

startAddMovieButton.addEventListener('click', toggleMovieModal)