var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let dni = window.prompt("Introduce tu Dni");
let letra_usuario_dni = prompt('Introduce la letra del DNI: ');
let letradevuelta = letras[dni % 23];

if (dni < 0 || dni > 99999999) {
    window.alert("Numero no valido");
} else {
    console.log(letras[dni % 23]);
    if (letradevuelta == letra_usuario_dni) {
        document.getElementById('text').innerHTML = `Dni introducido es:  ${dni} y la letra es: ${letra_usuario_dni}`;
    } else {
        window.alert("Dni incorrecto");
    }
}
