const raioMaior = 100
const raioMenor = 10
let angulo = 0 
let listaDeCoordenadasY = new Array(250)

function setup(){
    createCanvas(600,600)
}

function draw(){

    translate(width/4,height/2)
    background(126)

    stroke(1)
    fill(255)
    ellipse(0, 0, 2*raioMaior, 2*raioMaior)
    
    coordenadaX = (raioMaior)*cos(angulo)
    coordenadaY = (raioMaior)*sin(angulo)
    
    //basicamente uma fila
    if(listaDeCoordenadasY.length < 250){
        listaDeCoordenadasY.unshift(coordenadaY)
    }
    else{
        listaDeCoordenadasY.pop()
        listaDeCoordenadasY.unshift(coordenadaY)
    }
    
    fill("#ff0000")
    ellipse(coordenadaX,coordenadaY, 2*raioMenor, 2*raioMenor)
    
    stroke(0,255,0)
    fill(0,255,0)
    line(coordenadaX,coordenadaY, 200,coordenadaY)
    ellipse(200,coordenadaY, 2*raioMenor, 2*raioMenor)

    stroke(0)
    fill(0,255,0)
    for(let i = 0; i < listaDeCoordenadasY.length; i++){
        ellipse(200 + i, listaDeCoordenadasY[i], 5, 5)
    }
    angulo += 0.07
}