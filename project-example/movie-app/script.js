// DOM
const searchButton = document.querySelector("button#searchButton");
const searchInput  = document.querySelector("input#searchInput");
const loading = document.querySelector("div#loading");

// Search Button
searchButton.addEventListener("click", async function() {
    try {
        loading.classList.remove("d-none");
        searchValue = searchInput.value;
        const movies = await getMovies(searchValue);
        loading.classList.add("d-none");
        updateMovies(movies);
    } catch(error) {
        loading.classList.add("d-none");
        const rowMovies = document.querySelector("div#movies");
        rowMovies.innerHTML = notifAlert(error);
    }
});

// Event Binding
document.addEventListener("click", async function(e) {
    if(e.target.classList.contains("movie-detail-button")) {
        const imdbID = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbID);
        updateMovieDetail(movieDetail);
    }
});

// Get Movies
function getMovies(searchValue) {
    return fetch(`http://www.omdbapi.com/?apikey=83c6ce7c&s=${searchValue}`)
        .then(response => {
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if(data.Response === "False") {
                throw new Error(data.Error);
            }
            return data.Search;
        });
}

// Update Movies
function updateMovies(movies) {
    let colMovies = "";

    movies.forEach((movie) => (colMovies += cardMovie(movie)));

    const rowMovies = document.querySelector("div#movies");
    rowMovies.innerHTML = colMovies;
}

// Get Movie Detail
function getMovieDetail(imdbID) {
    return fetch(`http://www.omdbapi.com/?apikey=83c6ce7c&i=${imdbID}`)
        .then(response => response.json())
        .then(data => data);
}

// Update Movie Detail
function updateMovieDetail(movieDetail) {
    const detail = cardMovieDetail(movieDetail);
    const modalBody = document.querySelector("div#modalBody");
    modalBody.innerHTML = detail;
}

// Card Movie Template
function cardMovie(movie) {
    return `<div class="col-md-4 col-lg-3 mb-3">
                <div class="card">
                    <img src="${movie.Poster}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <p class="card-text">${movie.Year}</p>
                        <a href="#" class="btn btn-outline-primary movie-detail-button" data-bs-toggle="modal" data-bs-target="#detailMovie" data-imdbid="${movie.imdbID}">Detail</a>
                    </div>
                </div>
            </div>`;
}

// Card Movie Detail Template
function cardMovieDetail(movieDetail) {
    return `<div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${movieDetail.Poster}" class="img-fluid rounded-start w-100" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <div class="card">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <strong>Director: </strong>${movieDetail.Director}
                                    </li>
                                    <li class="list-group-item">
                                        <strong>Actors: </strong>${movieDetail.Actors}
                                    </li>
                                    <li class="list-group-item">
                                        <strong>Writer: </strong>${movieDetail.Writer}
                                    </li>
                                    <li class="list-group-item">
                                        <strong>Plot: </strong>${movieDetail.Plot}
                                    </li>
                                    <li class="list-group-item">
                                        <strong>Released: </strong>${movieDetail.Released}
                                    </li>
                                    <li class="list-group-item">
                                        <strong>Genre: </strong>${movieDetail.Genre}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
}

// Notification Alert Template
function notifAlert(error) {
    return `<h1 class="display-6 text-center text-danger mt-5">
                <p class="fst-italic">${error}</p>
            </h1>`;
}