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
    return fetch(`${apiURL}/anime?url=${searchTerm}`).then(
        res=>res.json())
}

function show(results){
    console.log(results)
    results.forEach((movie,i)=> {
        const h3 = document.createElement('h2')
        h3.textContent="Temporada "+i+1;
        const ul = document.createElement('ul');
        ul.classList.add('season');
        info.appendChild(h3);
        info.appendChild(ul);
        console.log(movie)
        movie.forEach((e,i)=>{
            const li=document.createElement('li');
            const img=document.createElement('img');
            const a=document.createElement('a')
            img.src=e.img;
            a.href="video.html?url="+e.link;
            a.textContent=e.num;
            li.appendChild(a);
            li.appendChild(img);
            ul.appendChild(li)
        })
        // const li=document.createElement('li');
        // const img=document.createElement('img');
        // img.src=movie.poster;
        // const a = document.createElement('a');
        // a.href = '/movie.html?url='+movie.url;
        // a.textContent=movie.title;
        // li.appendChild(a);
        // li.appendChild(img);
        // resultList.appendChild(li); 
    });    
}