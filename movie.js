const apiURL="https://animescrapperr.herokuapp.com"
const animeUrl = window.location.search.match(/url=(.*)/)[1];
const info = document.querySelector('.info')

console.log(animeUrl)
search();
function search(){
    const searchTerm=animeUrl;
    getAnime(searchTerm).then(show)
}

function getAnime(searchTerm){
    return fetch(`${apiURL}/anime?url=${searchTerm}`).then(
        res=>res.json()
    )
}

function show(results){
    let temp=1;
    results.forEach((e,i)=> {
      
            if(e.num=="Episodio 1"){
                info.innerHTML+=`
                <div class=season-title><h3>Temporada `+ temp+`</h3></div>
            `;
            temp++;
            }
            info.innerHTML+=`
            <div class="anime">

                <div class="title-anime">
                    <a href="video.html?url=`+e.link+`">
                        <p>`+e.num+`</p>
                    </a>
                 </div>
                 <div class="info-anime">
                    <div class="img-anime">
                        <a href="video.html?url=`+e.link+`">
                            <img src="`+e.img+`">
                        </a>
                    </div>
                 </div>

            </div>

        `
        console.log(e)


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