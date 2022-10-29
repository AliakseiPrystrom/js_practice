"use strict";

let numberOfFilms;

function stat(){
    numberOfFilms = +prompt('How much film you already watched?');

    while(numberOfFilms =='' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('How much film you already watched?');
    }
}

stat();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
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
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log('Not much movies');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Fine');
    } else if (personalMovieDB.count >= 30) {
        console.log('Good value');
    } else {
        console.log('Err');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGeners() {
    for (let i = 1; i <= 3; i++) {
        const genr = prompt(`What your favorite gener № ${i}?`);
        personalMovieDB.genres[i-1]=genr;
    }
}
writeYourGeners();
