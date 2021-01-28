const form = document.querySelector('form');
const searchInput = document.querySelector('input')
const apiURL="https://animescrapperr.herokuapp.com"
const resultList=document.querySelector('.info')
form.addEventListener('submit', search);

function search(event){
    event.preventDefault();
    console.log("foi!")
    resultList.innerHTML="";

    const searchTerm=searchInput.value;
    getAnime(searchTerm).then(show)
}

function getAnime(searchTerm){
    return fetch(`${apiURL}/search/${searchTerm}`).then(
        res=>res.json())
}

function show(results){
    results.forEach(movie=> {
        const ul=document.createElement('ul')
        const li=document.createElement('li');
        const img=document.createElement('img');
        img.src=movie.poster;
        const a = document.createElement('a');
        a.href = 'movie.html?url='+movie.url;
        a.textContent=movie.title;
        li.appendChild(a);
        li.appendChild(img);
        ul.appendChild(li)
        resultList.appendChild(ul); 
    });    
}
