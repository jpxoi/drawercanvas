var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
};

document.addEventListener("keydown",dibujarTeclado);
var cuadrito = document.getElementById("areaDeDibujo")
var papel = cuadrito.getContext("2d")

dibujarLinea("red",x-1,y-1,x+1,y+1,papel);
var x = 300;
var y = 300;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento)
{
    colorcito = "green";
    var movimiento = 10;

    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(colorcito,x,y,x,y - movimiento,papel);
            y = y - movimiento;
            console.log("Tecla arriba")
        break;

        case teclas.DOWN:
            dibujarLinea(colorcito,x,y,x,y + movimiento,papel);
            y = y + movimiento;
            console.log("Tecla abajo")
        break;

        case teclas.LEFT:
            dibujarLinea(colorcito,x,y,x - movimiento,y,papel);
            x = x - movimiento;
            console.log("Tecla izquierda")
        break;

        case teclas.RIGHT:
            dibujarLinea(colorcito,x,y,x + movimiento,y,papel);
            x = x + movimiento;
            console.log("Tecla derecha")
        break;

        default:
            console.log("Otra tecla")
    }
}