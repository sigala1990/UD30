let num = prompt("Pasa un numero");
isParOImpar(num);


function isParOImpar(num){
    if (num % 2 == 0 ) {
        console.log("es par")
    } else {
        console.log("es impar")
    }
}