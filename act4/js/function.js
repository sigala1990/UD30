var valores = [true, 5,false, "hola","adios",2];

var num = [];
var string = [];
var boolean = [];
for (let index = 0; index < valores.length; index++) {
    const element = valores[index];
    if(element == true || element == false){
        //console.log(element +" boolean")
        boolean.push(element);
    }
    else if(element / 1 == element){
       // console.log(element+" es num")
        num.push(element);
    }
    else {
       // console.log(element+" es string")
        string.push(element);
    }
}
var mayorText = "";
for (let index = 0; index < string.length; index++) {
    const element = string[index];
   
    if(element.length > mayorText.length ){
        mayorText = element;
    }
    
}
console.log(mayorText + " Es el texto mas grande" );

console.log(boolean);

console.log(num[0] + num[1]);
console.log(num[0] - num[1]);
console.log(num[0] * num[1]);
console.log(num[0] / num[1]);
console.log(num[0] % num[1]);
