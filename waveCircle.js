const raioMaior = 100
const raioMenor = 7
let angulo = 0 
let listaDeCoordenadasY = new Array(250)

function setup(){
    createCanvas(600,600)
}

function draw(){

    translate(width/4,height/2)
    background("#708090")

    strokeWeight(3)
    stroke(1)
    fill("#fffafa")
    ellipse(0, 0, 2*raioMaior, 2*raioMaior)

    fill(220)
    circle(0, 0, 3)
    
    coordenadaX = (raioMaior)*cos(angulo)
    coordenadaY = (raioMaior)*sin(angulo)
    
    strokeWeight(3)

    stroke("#c71585")
    text("Cosseno", coordenadaX, 0)
    line(0, 0, coordenadaX, 0)

    stroke("#6495ed")
    text("Seno", 0, coordenadaY)
    line(0, 0, 0, coordenadaY)

    stroke(180)
    line(0, 0, coordenadaX, coordenadaY)

    strokeWeight(1)
    //basicamente uma fila
    if(listaDeCoordenadasY.length < 250){
        listaDeCoordenadasY.unshift(coordenadaY)
    }
    else{
        listaDeCoordenadasY.pop()
        listaDeCoordenadasY.unshift(coordenadaY)
    }
    
    fill("#dc143c")
    ellipse(coordenadaX,coordenadaY, 2*raioMenor, 2*raioMenor)
    
    stroke(0,255,0)
    fill(0,255,0)
    line(coordenadaX,coordenadaY, 200,coordenadaY)
    ellipse(200,coordenadaY, 2*raioMenor, 2*raioMenor)

    stroke(0)
    fill("#7fff00")
    for(let i = 0; i < listaDeCoordenadasY.length; i++){
        ellipse(200 + i, listaDeCoordenadasY[i], 5, 5)
    }
    angulo -= 0.03
}