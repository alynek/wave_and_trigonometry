const raioMaior = 150
const raioMenor = 10
let angulo = 0 

    function setup(){
        createCanvas(600,600)
    }
    
    function draw(){
    
        translate(width/2,height/2)
        background(126)

        stroke(0)
        fill(240)
        ellipse(0,0,2*raioMaior,2*raioMaior)

        coordenadaX = (raioMaior)*cos(angulo)
        coordenadaY = (raioMaior)*sin(angulo)
        fill("#ff0000")
        ellipse(coordenadaX,coordenadaY,2*raioMenor,2*raioMenor)
        
        stroke(0,255,0)
        line(coordenadaX,coordenadaY, 250,coordenadaY)
        angulo += 0.06
}