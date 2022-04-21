const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(film => film.rating >= 8);
}

function showListOfFilms(arr) {
    return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
}

showListOfFilms(films);

function setFilmsIds(arr) {
    return arr.map((film, i) => {
        film.id = i;
        return film;
    });
}

const tranformedArray = setFilmsIds(films);

// При срабатывании every на первом фильме он натыкается на id = 0;
// 0 - это неправда в логическом ключе, поэтому и весь метод возвращает false
// Учитывайте этот момент
function checkFilms(arr) {
    return arr.every(film => film.id || film.id === 0 ? true : false)
}

// Еще короче, так как условие все равне вернет true или false:
// function checkFilms(arr) {
//     return arr.every(film => film.id || film.id === 0)
// }

// Максимально коротко, но еще читаемо:
// const checkFilms = (arr) => arr.every(film => film.id || film.id === 0)

checkFilms(tranformedArray);