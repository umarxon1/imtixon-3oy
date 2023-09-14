const moviesIdURL = +new URLSearchParams(window.location.search).get("movieId")
const wrapper = document.querySelector(".wrapper")
const sviper = document.querySelector(".sviper")
const trendingMovies = document.querySelector(".trending-movies")
const action = document.querySelector(".action-movie")
const actionMulti = document.querySelector(".action-multi")
const cartoonsCard = document.querySelector(".cartoons-card")


const options = {
    method:"GET",
    headers:{
        accept:'application/json',
        Authorization:' Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTE2NzU0OTc1ZjFiYjY4NTY5N2I4MzFjZjRjOTBkYSIsInN1YiI6IjY1MDEzNGY0ZWZlYTdhMDExYWI4Njg3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2k33v9oGZINdjZYqHt-aM6d-B9sSgOc5qXNlchnBS-4'
    }
}
console.log(moviesIdURL);
//fetch 1
fetch(`https://api.themoviedb.org/3/discover/tv`, options)
.then(response => response.json())
.then(data => movieid(data))

function movieid(data){
    const fragment = document.createDocumentFragment()
data.results.forEach(el => {
    if(el.id == moviesIdURL){
        const div = document.createElement("div")
        const titleDiv = document.createElement("div")
        div.innerHTML = `
        <img class="img" src="https://image.tmdb.org/t/p/original/${el.poster_path}"/>
        `
        titleDiv.innerHTML = `
        <h2>Movie title<h2/>
        <h3>${el.overview}<h/3>
        <div class="boxx">
        <div class="vote-box">
        <div class="starbox">
        <img class="star" src="../images/star.png"/>
         <h4>${el.vote_average}</h4>
        </div>
        <p>${el.vote_count} kishi ovoz bergan</p>
        <span>Tili: ${el.original_language.toUpperCase()}</span>
        </div>
        <h5>Chiqarilgan Sana: ${el.first_air_date}</h5>
        </div>
        `
        fragment.appendChild(div)
        fragment.appendChild(titleDiv)

    }

})
wrapper.appendChild(fragment)
}

// fetch 2
fetch(`https://api.themoviedb.org/3/discover/movie?&with_genres=28`, options)
.then(response => response.json())
.then(data => movieid(data))

function movieid(data){
    const fragment = document.createDocumentFragment()
data.results.forEach(el => {
    if(el.id == moviesIdURL){
        const div = document.createElement("div")
        const titleDiv = document.createElement("div")
        div.innerHTML = `
        <img class="img" src="https://image.tmdb.org/t/p/original/${el.poster_path}"/>
        `
        titleDiv.innerHTML = `
        <h2>Movie title<h2/>
        <h3>${el.overview}<h/3>
        <div class="boxx">
        <div class="vote-box">
        <div class="starbox">
        <img class="star" src="../images/star.png"/>
         <h4>${el.vote_average}</h4>
        </div>
        <p>${el.vote_count} kishi ovoz bergan</p>
        <span>Tili: ${el.original_language.toUpperCase()}</span>
        </div>
        <h5>Chiqarilgan Sana: ${el.release_date}</h5>
        </div>
        `
        fragment.appendChild(div)
        fragment.appendChild(titleDiv)

    }

})
wrapper.appendChild(fragment)
}

//fetch 3

fetch(`https://api.themoviedb.org/3/discover/movie?&with_genres=12`, options)
.then(response => response.json())
.then(data => movieid(data))

function movieid(data){
    const fragment = document.createDocumentFragment()
data.results.forEach(el => {
    if(el.id == moviesIdURL ){
        console.log(el);
        const div = document.createElement("div")
        const titleDiv = document.createElement("div")
        div.innerHTML = `
        <img class="img" src="https://image.tmdb.org/t/p/original/${el.poster_path}"/>
        `
        titleDiv.innerHTML = `
        <h2>Movie title<h2/>
        <h3>${el.overview}<h/3>
        <div class="boxx">
        <div class="vote-box">
        <div class="starbox">
        <img class="star" src="../images/star.png"/>
         <h4>${el.vote_average}</h4>
        </div>
        <p>${el.vote_count} kishi ovoz bergan</p>
        <span>Tili: ${el.original_language.toUpperCase()}</span>
        </div>
        <h5>Chiqarilgan Sana: ${el.release_date}</h5>
        </div>
        `
        fragment.appendChild(div)
        fragment.appendChild(titleDiv)

    }

})
wrapper.appendChild(fragment)
}
// fetch 4
fetch(`https://api.themoviedb.org/3/discover/movie?&with_genres=35`, options)
.then(response => response.json())
.then(data => movieid(data))

function movieid(data){
    const fragment = document.createDocumentFragment()
data.results.forEach(el => {
    if(el.id == moviesIdURL ){
        console.log(el);
        const div = document.createElement("div")
        const titleDiv = document.createElement("div")
        div.innerHTML = `
        <img class="img" src="https://image.tmdb.org/t/p/original/${el.poster_path}"/>
        `
        titleDiv.innerHTML = `
        <h2>Movie title<h2/>
        <h3>${el.overview}<h/3>
        <div class="boxx">
        <div class="vote-box">
        <div class="starbox">
        <img class="star" src="../images/star.png"/>
         <h4>${el.vote_average}</h4>
        </div>
        <p>${el.vote_count} kishi ovoz bergan</p>
        <span>Tili: ${el.original_language.toUpperCase()}</span>
        </div>
        <h5>Chiqarilgan Sana: ${el.release_date}</h5>
        </div>
        `
        fragment.appendChild(div)
        fragment.appendChild(titleDiv)

    }

})
wrapper.appendChild(fragment)
}

// fetch 5
fetch(`https://api.themoviedb.org/3/discover/movie?&with_genres=16`, options)
.then(response => response.json())
.then(data => movieid(data))

function movieid(data){
    const fragment = document.createDocumentFragment()
data.results.forEach(el => {
    if(el.id == moviesIdURL ){
        console.log(el);
        const div = document.createElement("div")
        const titleDiv = document.createElement("div")
        div.innerHTML = `
        <img class="img" src="https://image.tmdb.org/t/p/original/${el.poster_path}"/>
        `
        titleDiv.innerHTML = `
        <h2>Movie title<h2/>
        <h3>${el.overview}<h/3>
        <div class="boxx">
        <div class="vote-box">
        <div class="starbox">
        <img class="star" src="../images/star.png"/>
         <h4>${el.vote_average}</h4>
        </div>
        <p>${el.vote_count} kishi ovoz bergan</p>
        <span>Tili: ${el.original_language.toUpperCase()}</span>
        </div>
        <h5>Chiqarilgan Sana: ${el.release_date}</h5>
        </div>
        `
        fragment.appendChild(div)
        fragment.appendChild(titleDiv)

    }

})
wrapper.appendChild(fragment)
}
// fetch banner
fetch(`https://api.themoviedb.org/3/movie/top_rated?&with_networks=213`, options)
.then(response => response.json())
.then(data => movieid(data))

function movieid(data){
    const fragment = document.createDocumentFragment()
data.results.forEach((el) => {
    if(el.id == moviesIdURL){
        console.log(el);
        const div = document.createElement("div")
        const titleDiv = document.createElement("div")
        div.innerHTML = `
        <img class="img" src="https://image.tmdb.org/t/p/original/${el.poster_path}"/>
        `
        titleDiv.innerHTML = `
        <h2>Movie title<h2/>
        <h3>${el.overview}<h/3>
        <div class="boxx">
        <div class="vote-box">
        <div class="starbox">
        <img class="star" src="../images/star.png"/>
         <h4>${el.vote_average}</h4>
        </div>
        <p>${el.vote_count} kishi ovoz bergan</p>
        <span>Tili: ${el.original_language.toUpperCase()}</span>
        </div>
        <h5>Chiqarilgan Sana: ${el.release_date
        }</h5>
        </div>
        `
        fragment.appendChild(div)
        fragment.appendChild(titleDiv)

    }

})
wrapper.appendChild(fragment)
}

// fetch - 1
fetch("https://api.themoviedb.org/3/discover/tv", options)
.then(response => response.json())
.then(data => moviesRender(data))

function moviesRender(movie){
    const moviesFragment = document.createDocumentFragment()
movie.results.map(movie => {
    const div =document.createElement("div")
    div.className ="movie-card"
    div.innerHTML = `
    <a href="../pages/movies.html?movieId=${movie.id}">
    <img class="movieImg" src="https://image.tmdb.org/t/p/original/${movie.poster_path}"/>
    <a/>
    <div class="title-box">
    <h3>${movie.name}</h3>
    </div>
    `
    moviesFragment.appendChild(div)
})
 sviper.appendChild(moviesFragment)
}

// fetch - 2
fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=28", options)
.then(response => response.json())
.then(data => trendingMoviesRender(data))

function trendingMoviesRender(movie){
    const moviesFragment = document.createDocumentFragment()
movie.results.map(movie => {
    const div =document.createElement("div")
    div.className ="tranding-movie-card"
    div.innerHTML = `
    <a href="../pages/movies.html?movieId=${movie.id}">
    <img class="trend-movie-img" src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}"/>
    <a/>
    `
    moviesFragment.appendChild(div)
})
trendingMovies.appendChild(moviesFragment)
}

// fetch - 3
fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=12", options)
.then(response => response.json())
.then(data => trendingRender(data))

function trendingRender(movie){
    const moviesFragment = document.createDocumentFragment()
movie.results.map(movie => {
    const div =document.createElement("div")
    div.className ="tranding-movie-card"
    div.innerHTML = `
    <a href="../pages/movies.html?movieId=${movie.id}">
    <img class="trend-movie-img" src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}"/>
    <a/>
    `
    moviesFragment.appendChild(div)
})
action.appendChild(moviesFragment)
}

// fetch - 4
fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=35", options)
.then(response => response.json())
.then(data => multi(data))

function multi(movie){
    const moviesFragment = document.createDocumentFragment()
movie.results.map(movie => {
    const div =document.createElement("div")
    div.className ="tranding-movie-card"
    div.innerHTML = `
    <a href="../pages/movies.html?movieId=${movie.id}">
    <img class="trend-movie-img" src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}"/>
    <a/>
    `
    moviesFragment.appendChild(div)
})
actionMulti.appendChild(moviesFragment)
}

// fetch - 5
fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=16", options)
.then(response => response.json())
.then(data => cartoonsRender(data))

function cartoonsRender(movie){
    const moviesFragment = document.createDocumentFragment()
movie.results.map(movie => {
    const div =document.createElement("div")
    div.className ="tranding-movie-card"
    div.innerHTML = `
    <a href="../pages/movies.html?movieId=${movie.id}">
    <img class="trend-movie-img" src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}"/>
    <a/>
    `
    moviesFragment.appendChild(div)
})
cartoonsCard.appendChild(moviesFragment)
}