// const addMovieModal = document.querySelector('#add-modal')
// const addMovieModal = document.body.children[1]
// const backdrop = document.body.firstElementChild
// const unserInputs1 = addMovieModal.getElementsByTagName('input')
const addMovieModal = document.getElementById('add-modal')
const startAddMovieButton = document.querySelector('header button')
const backdrop = document.getElementById('backdrop')
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive')
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling
const userInputs = addMovieModal.querySelectorAll('input')
const entryTextSection = document.getElementById('entry-text')
const deleteMovieModal = document.getElementById('delete-modal')

const movies = []

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block'
    } else {
        entryTextSection.style.display = 'none'
    }
}

const deleteMovie = movieId => {
    let movieIndex = 0
    for (const movie of movies) {
        if (movie.id === movieId) {
            break
        }
        movieIndex++
    }
    movies.splice(movieIndex, 1) // remove 1 item out of array
    const listRoot = document.getElementById('movie-list')
    listRoot.children[movieIndex].remove()
    // listRoot.removeChild(listRoot.children[movieIndex])
}

const closeMovieDeletionModal = () => {
    toggleBackdrop()
    deleteMovieModal.classList.remove('visible')
}

const deleteMovieHandler = (movieId) => {
    deleteMovieModal.classList.add('visible')
    toggleBackdrop()
    // deleteMovie(movieId)
}

const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li') // tao 'li'
    newMovieElement.className = 'movie-element' // add class for 'li' - lay ra from app.css
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}" />
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id))
    const listRoot = document.getElementById('movie-list')
    listRoot.append(newMovieElement)
}

const toggleBackdrop= () => {
    backdrop.classList.toggle('visible')
}

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible')
}

const showMovieModal = () => {
    addMovieModal.classList.add('visible') // 'visible' is defined in app.css modal class
    toggleBackdrop()
}

const clearMovieInput = () => {
    // userInputs[0].value = ''
    // userInputs[1].value = ''
    // userInputs[2].value = ''
    for (const userInput of userInputs) {
        userInput.value = ''
    }
}

const cancelAddButtonHandler = () => {
    closeMovieModal()
    clearMovieInput()
}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value
    const imageURLInput = userInputs[1].value
    const ratingValue = userInputs[2].value

    if (
        titleValue.trim() === '' || 
        imageURLInput.trim() === '' || 
        ratingValue.trim() === '' ||
        +ratingValue < 1 || // + to covert string number to number
        +ratingValue > 5
    ) {
        alert('Please enter valid values (rating between 1 and 5)')
        return
    }

    const newMovie = {
        id: Math.random().toString(),
        title: titleValue, // title: up to you name this
        image: imageURLInput,  // title: up to you name this
        rating: ratingValue  // title: up to you name this
    }

    movies.push(newMovie)
    console.log(movies);
    closeMovieModal()
    toggleBackdrop()
    clearMovieInput()
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating)
    updateUI()
}

const backdropClickHandler = () => {
    closeMovieModal()
    closeMovieDeletionModal()
}

startAddMovieButton.addEventListener('click', showMovieModal)
backdrop.addEventListener('click', backdropClickHandler)
cancelAddMovieButton.addEventListener('click', cancelAddButtonHandler)
confirmAddMovieButton.addEventListener('click', addMovieHandler)