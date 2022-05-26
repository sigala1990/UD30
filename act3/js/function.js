var mensaje = ["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"];

for (let index = 0; index < mensaje.length; index++) {
    const element = mensaje[index];
    console.log(element);
}


mensaje.forEach(function(elemento, indice, array) {
    console.log(elemento);
});
