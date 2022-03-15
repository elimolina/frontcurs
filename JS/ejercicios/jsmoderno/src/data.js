// exercici 1 array de tots els directors

function getAllDirectors(array) {
    const directors = array.map(({director}) => director);
    return directors;
}

function getDirectorsOnce(array) {
    const directores = array.map(item=>{
        return [item.director,item]
    })
    const directorsMap = new Map(directores);
    const unicos = [...directorsMap.values()]
    const direcOrdenados = unicos.sort((a,b) => a.director.localCompare(b.director))
    return direcOrdenados

}

// Exercici 2 Pelis d'un director

function getMoviesFromDirector(director) {
    const films = movies.filter(film => film.director === director);
    return films;
}

// Exercici 3 la puntuació mitja d'un diretor

function moviesAverageOfDirector(director) {

    // filtrar totes les pelis del director seleccionat
    const filmsBydirector = movies.filter(movie => movie.director == director);
    console.log("director" + director);
    console.log(filmsBydirector);

    const scores = filmsBydirector.reduce((contador, filmBydirector) => {
        console.log("film" + filmBydirector.tittle + "score: " + filmsBydirector.score + "sumatori score" + (contador + ));
        return contador + filmsBydirector.score;
    }, 0);
    
}

        //calcular la media reduciéndolo a dos decimáles

        const media = parseFloat(scores/ parseInt)



// Exercici 4 ordena títulos alfabéticamente

function orderAphabetically(arry) {
    //ordenamos con javascript moderno
    // array.sort((a,b) => a.title < title ? -1:1);


    // javascript classico

    array.sort(function (movie1, movie2) {
        if (movie1.title > movie2.title) {
            return 1;
        }
        if (movie1.title < movie2.title) {
            return -1;
        }
        return 0
    )};
}


// exercici 5 ordenar por año 

const 