"using strict"

const NumberOfFilms = +prompt("Сколько фильмов вы смотрели?", "" )


const personalMovieDB = {
    connt: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt("Насколько оцените его?", ""),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d  = prompt("Насколько оцените его?", "");


    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

    console.log(personalMovieDB);
