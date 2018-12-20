const axios = require('axios');

const BASE_URL = 'https://swapi.co/api/people';

const searchTerm = process.argv[2];
searchTermArray = [];

//console.log(searchTerm);
count = 0;
function populateSearchArray() {
    url = `${BASE_URL}`;
    axios.get(url)
    .then( (result) => {
        //console.log(result.data.results);
        for (let i = 0; i < result.data.results.length; i++) {
            searchTermArray.push(result.data.results[i].name);
            count++;
        }
    })
}

function findIndexOfSearchTerm() {
    for (let i=0; i < searchTermArray.length; i++ ) {
        if (searchTermArray[i].contains(searchTerm)) {
            console.log(`I found the Search term at ${i + 1}`)
        }
    }
}
/*let count = 1;
function apiCall() {
    for (let i = 1; i < 15; i++) {
        url = `${BASE_URL}/${i}`;
        axios.get(url)
        .then((result) => {
            searchTermArray.push(result.data.name);
            count++;
            console.log(result.data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }
    if (count > 75) {
        console.log(searchTermArray);
    }
};
     */
populateSearchArray()

if (count > 5) {
    findIndexOfSearchTerm();
}