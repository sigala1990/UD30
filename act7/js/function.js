let num = prompt("introduce un valor");
let resultado= 1;
for (let index = num; index > 1; index--) {
    resultado = resultado * index;
}
console.log(resultado);