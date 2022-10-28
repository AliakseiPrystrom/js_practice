"use strict";

const numberOfFilms = prompt('How much film you already watched?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('What the lates film did you watch?'),
    b = prompt('What rait are you giving to that film?'),
    c = prompt('What the lates film did you watch?'),
    d = prompt('What rait are you giving to that film?');

    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;
    
console.log(personalMovieDB);