let h1Div = document.querySelector(".h1div");

let buttonDiv = document.querySelector(".buttonDiv");
let beerDiv = document.querySelector(".beerDiv");

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");

btn1.addEventListener("click", showBeers);
btn2.addEventListener("click", showBeers);
btn3.addEventListener("click", showBeers);
btn4.addEventListener("click", showBeers);
btn5.addEventListener("click", showBeers);

function showBeers(e) {
    console.log(e.target.innerHTML);
    beerDiv.innerHTML = "";
    fetch(`https://api.punkapi.com/v2/beers?page=${e.target.innerHTML }&per_page=10`)
        .then(res => res.json())
        .then(beer => {
            for (let i = 0; i < beer.length; i++) {
                let newBeerDiv = document.createElement("div");
                let nameBeer = document.createElement("h1");
                nameBeer.innerHTML = beer[i].name;
                let img = document.createElement("img");
                img.src = beer[i].image_url;
                let alcohol = document.createElement("h1");
                alcohol.innerHTML = beer[i].abv;

                newBeerDiv.appendChild(nameBeer);
                newBeerDiv.appendChild(img);
                newBeerDiv.appendChild(alcohol);
                beerDiv.appendChild(newBeerDiv);
            }
        })
}