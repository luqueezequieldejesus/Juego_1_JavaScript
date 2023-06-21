function getRandomNumber(size){
    return Math.floor(Math.random() * size);

}

let getdistancia = (e, objetivo) => {
    let diferenciafx = e.offsetX - objetivo.x ;
    let diferenciafy = e.offsetY - objetivo.y;
    return Math.sqrt(( diferenciafx * diferenciafx) + (diferenciafy + diferenciafy)); 
}

let distanciaAlTesoro = distancia => {
    if(distancia < 30){
        return "HIRVENDO";
    }else if(distancia < 40){
        return "SUPER CALIENTE";
    }else if(distancia < 60){
        return "CALIENTE";
    }else if(distancia < 100){
        return "TIBIO";
    }else if(distancia <200){
        return "FRIO";
    }else if(distancia < 400){
        return "CONGELADO";
    }else {
        return "CONCHINCHINA";
    }
}




