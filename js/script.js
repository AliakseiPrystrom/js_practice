"use strict";

const numberOfFilms = +prompt('How much film you already watched?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {

    const firstQuestion = prompt('What the lates film did you watch?'),
        secondQuestion = prompt('What rait are you giving to that film?');

    if (firstQuestion != null && secondQuestion != null && firstQuestion != '' && secondQuestion != '' && firstQuestion.length < 50) {
        personalMovieDB.movies[firstQuestion] = secondQuestion;
        console.log('Done');
    } else {
        console.log('Err');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Not much movies');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Fine');
} else if (personalMovieDB.count >= 30) {
    console.log('Good value');
} else {
    console.log('Err');
}








