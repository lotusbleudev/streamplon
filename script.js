let films = [
    {
        "name": "creed",
        "src": "./images/creed.png"
    },
    {
        "name": "fight club",
        "src": "./images/fightclub.png"
    },
    {
        "name": "avatar",
        "src": "./images/avatar.png"
    },
    {
        "name": "dunes",
        "src": "./images/dunes.png"
    },
    {
        "name": "creed",
        "src": "./images/creed.png"
    }
]
let series = [
    {
        "name": "game of thrones",
        "src": "./images/got.png"
    },
    {
        "name": "casa de papel",
        "src": "./images/casadepapel.png"
    },
    {
        "name": "breaking bad",
        "src": "./images/breakingbad.png"
    },
    {
        "name": "gossip girl",
        "src": "./images/gossip.png"
    },
    {
        "name": "game of thrones",
        "src": "./images/got.png"
    }
]
let mangas = [
    {
        "name": "one piece",
        "src": "./images/onepiece.png"
    },
    {
        "name": "death note",
        "src": "./images/deathnote.png"
    },
    {
        "name": "naruto",
        "src": "./images/naruto.png"
    },
    {
        "name": "sailor moon",
        "src": "./images/sailormoon.png"
    },
    {
        "name": "one piece",
        "src": "./images/onepiece.png"
    }
]

let bestof = [
    {
        "name": "fight club",
        "src": "./images/fightclub-big.png",
        "rank": "01"
    },
    {
        "name": "dunes",
        "src": "./images/dunes-big.png",
        "rank": "02"
    },
    {
        "name": "death note",
        "src": "./images/deathnote-big.png",
        "rank": "03"
    },
]

let maliste = document.getElementById('maliste');
let filmsDiv = document.getElementById('films')
let seriesDiv = document.getElementById('series')
let mangasDiv = document.getElementById('mangas')
let bestofDiv = document.getElementById('bestof')

function setMaListe(){
let html = `
<p class="categorie-title">Ma liste</p>
<div class="flex-card">
`
for (let i = 0; i < films.length; i++) {
    
    html += `
        <div class="card">
                    <img src="${films[i].src}" alt="">
                    <div class="card-infos">
                        <div>
                            <span class="material-symbols-outlined">
                                play_circle
                            </span>
                            <span class="material-symbols-outlined">
                                add_circle
                            </span>
                            <span class="material-symbols-outlined">
                                favorite
                            </span>
                        </div>
                        <p class="info-title">${films[i].name}</p>
                    </div>
                </div>
                `
            }
            return html;
}
function setFilms(){
    let html = `
    <p class="categorie-title">Films</p>
    <div class="flex-card">
    `
    for (let i = 0; i < films.length; i++) {
        
        html += `
            <div class="card">
                        <img src="${films[i].src}" alt="">
                        <div class="card-infos">
                            <div>
                                <span class="material-symbols-outlined">
                                    play_circle
                                </span>
                                <span class="material-symbols-outlined">
                                    add_circle
                                </span>
                                <span class="material-symbols-outlined">
                                    favorite
                                </span>
                            </div>
                            <p class="info-title">${films[i].name}</p>
                        </div>
                    </div>
                    `
                }
                return html;
    }
function setSeries(){
let html = `
<p class="categorie-title">Séries</p>
<div class="flex-card">
`
for (let i = 0; i < series.length; i++) {
    
    html += `
        <div class="card">
                    <img src="${series[i].src}" alt="">
                    <div class="card-infos">
                        <div>
                            <span class="material-symbols-outlined">
                                play_circle
                            </span>
                            <span class="material-symbols-outlined">
                                add_circle
                            </span>
                            <span class="material-symbols-outlined">
                                favorite
                            </span>
                        </div>
                        <p class="info-title">${series[i].name}</p>
                    </div>
                </div>
                `
            }
            return html;
}
function setMangas(){
    let html = `
    <p class="categorie-title">Mangas</p>
    <div class="flex-card">
    `
    for (let i = 0; i < mangas.length; i++) {
        
        html += `
            <div class="card">
                        <img src="${mangas[i].src}" alt="">
                        <div class="card-infos">
                            <div>
                                <span class="material-symbols-outlined">
                                    play_circle
                                </span>
                                <span class="material-symbols-outlined">
                                    add_circle
                                </span>
                                <span class="material-symbols-outlined">
                                    favorite
                                </span>
                            </div>
                            <p class="info-title">${mangas[i].name}</p>
                        </div>
                    </div>
                    `
                }
                return html;
    }
function setBestof(){
    let html = `
    <p class="categorie-title">Top 3</p>
            <div id="top">
    `

    for (let i = 0; i < bestof.length; i++) {
       html += `
       <div class="top">
            <p class="bo">${bestof[i].rank}</p>
            <img src="${bestof[i].src}" alt="">
        </div>
       `
        
    }
    html += "</div>"

    return html
}

bestofDiv.innerHTML = setBestof();
mangasDiv.innerHTML = setMangas();
filmsDiv.innerHTML = setFilms();
maliste.innerHTML = setMaListe();
seriesDiv.innerHTML = setSeries();



let cardInfos = document.getElementsByClassName('card-infos')
let card = document.getElementsByClassName('card')

console.log(card);

for (let i = 0; i < card.length; i++) {
    
    card[i].addEventListener('mouseenter', function(){
        cardInfos[i].style.display = 'flex'
    })
    
    card[i].addEventListener('mouseleave', function(){
        cardInfos[i].style.display = 'none'
    })
}


