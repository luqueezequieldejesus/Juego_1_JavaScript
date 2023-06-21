const WIDTH = 1000;
const HEIGHT = 500;

let objetivo = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGHT)
};




let mapa = document.getElementById('mapa');
let $distancia = document.getElementById('distancia');
let clicks = 0;



mapa.addEventListener('click', function (e){
   let distancia = getdistancia(e, objetivo) ;
    clicks++;
   let segundaDistancia = distanciaAlTesoro(distancia);

   $distancia.innerHTML = `<h1>${segundaDistancia}</h1>`;

    if(distancia < 20){
        alert("Ganaste!!!" + "En solo : " + clicks);
    location.reload();
    }






})