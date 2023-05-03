// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let result = [];

    for (movie of moviesArray){
        result.push(movie.director);
    }
    return result;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let result = 0;

    for (movie of moviesArray){
        movie.director == "Steven Spielberg" && movie.genre.includes("Drama") ? result++ : "";
        
    }

    return moviesArray.length == 0 ? 0 : result;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let result = 0;

    for ( movie of moviesArray){
        if(movie.score == "" || movie.score === undefined){
            result+=0;
        }else {
            result+=movie.score;        
        }
    }
    let average = result/moviesArray.length
    
    return moviesArray.length == 0 ? 0 : Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let result = 0;
    let length = 0;
    for ( movie of moviesArray){
        
        if(movie.genre.includes('Drama')){
            length+=1;
            result+=movie.score;        
        }
    }
    if(length==0){
        return 0;
    }
    let average = result/length;
    return moviesArray.length == 0 ? 0 : Number(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArray = [];

    for (let movie of moviesArray) {
            newArray.push(movie);
    }
    console.log(newArray);
    console.log("-------------------------")
    newArray = newArray.sort((a, b) =>
            a.year - b.year);
    console.log(newArray);
    return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArray = [];

    for (let movie of moviesArray) {
        newArray.push(movie.title);

        if(newArray.length == 20) {
            return newArray;
        }
        newArray = newArray.sort();
    }
    return newArray;
}

