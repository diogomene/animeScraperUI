const apiURL="https://animescrapperr.herokuapp.com"
const animeUrl = window.location.search.match(/url=(.*)/)[1];
const info = document.querySelector('.info')

console.log(animeUrl)
search();
function search(){
    console.log("foi!")

    const searchTerm=animeUrl;
    getAnime(searchTerm).then(show)
}

function getAnime(searchTerm){
    return fetch(`${apiURL}/watch?url=${searchTerm}`).then(
        res=>res.json())
}

function show(results){
    const iframe =document.createElement('iframe');
    iframe.src=results;
    iframe.setAttribute('allowfullscreen','1')
        // const li=document.createElement('li');
        // const img=document.createElement('img');
        // img.src=movie.poster;
        // const a = document.createElement('a');
        // a.href = '/movie.html?url='+movie.url;
        // a.textContent=movie.title;
        // li.appendChild(a);
        // li.appendChild(img);
        // resultList.appendChild(li);
    info.appendChild(iframe)   
}