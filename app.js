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
        resultList.innerHTML+=`
            <div class="anime">

                <div class="title-anime">
                    <a href="movie.html?url=`+movie.url+`">
                        <p>`+movie.title+`</p>
                    </a>
                 </div>
                 <div class="info-anime">
                    <div class="img-anime">
                        <a href="movie.html?url=`+movie.url+`">
                            <img src="`+movie.poster+`">
                        </a>
                    </div>
                 </div>

            </div>

        `
    });    
}
