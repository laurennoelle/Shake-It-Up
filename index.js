const baseUrl = 'http://www.thecocktaildb.com/api/json/v1/1'

function init(){
    fetch('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(res => res.json())
    .then(data => console.log(data))
}

init()