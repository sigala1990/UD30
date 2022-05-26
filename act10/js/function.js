let string_introducida = prompt('Introduce una cadena de texto: ');

function polindromo(cadena) {

    var low_no_spacing = cadena.toLowerCase().replace(/[\W ]/g, '');

    /**
     * [ and ] are the start and end of a character set.
     * \W means "non-word", as opposed to \w which will match a word.
     * _ is the "_" character.
     * / mark the beginning and end of a regular expression.
     * g means it's a global search.
     */

    //console.log(low_no_spacing);

    var reversed = low_no_spacing.split('').reverse().join(''); // split -> Fem un vector amb cada lletra de l'string, li fem la inversa i del vector tornem a passar a string

    //console.log(reversed);

    if (low_no_spacing == reversed) {
        parraf.innerHTML = `Frase Políndroma: ${string_introducida}`;
    }else{
        parraf.innerHTML = `No es frase Políndroma: ${string_introducida}`;
    }

}

let parraf = document.getElementById('cadena');

polindromo(string_introducida);