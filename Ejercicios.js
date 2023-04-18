
//1. Escribe una función que tome dos números como parámetros y devuelva la suma de ambos números.
 function suma (n1, n2){
    return sum= n1+n2;
   }
   console.log("El resultado de la suma es: "+suma(10,10))

//2. Escribe una función que tome una cadena de texto como parámetro y devuelva la longitud de la cadena.
 function Obtenerlongitud(CadenaParametro) {
 return CadenaParametro.length; 
 }
  console.log(Obtenerlongitud("Javiera Leiva")); 

//3. Escribe una función que tome un arreglo de números como parámetro y devuelva la suma de todos los elementos del arreglo.
function Funcionsuma(Arregloparametro){ 
    let Suma = 0; 
    for(let i = 0; i < Arregloparametro.length; i++){ 
        Suma += Arregloparametro[i]; 
    }
    return Suma;
}
var Arreglo = [10, 20, 30, 40]; 
console.log(Funcionsuma(Arreglo));

//4. Escribe una función que tome una cadena como parámetro y devuelva la cadena con las palabras en orden inverso.
var Funcionstring =(ParametroInvertir)=>{ 
    let cadena = ParametroInvertir.split(" ")
    cadena.reverse(); 
    return cadena.join(" ");
}
console.log(Funcionstring("hoy y mañana")); 

//5. Escribe una función que tome un arreglo como parámetro y devuelva el primer elemento del arreglo.
function PrimerElemento(arreglo){
    return arreglo [0];
}const ElArreglo= [100, 1000, 10000];
console.log(PrimerElemento(ElArreglo));

//6. Escribe una función que tome un número como parámetro y devuelva true si el número es par, o false si es impar.
let FuncionParEImpar = (NumeroParEImpar) =>{ 
    return NumeroParEImpar % 2 === 0; 
   }
   console.log(FuncionParEImpar(20)); 
   console.log(FuncionParEImpar(5)); 

//7.  Escribe una función que tome dos números como parámetros y devuelva el número mayor.
function NMayor(N1, N2){
    if (N1 > N2 ) {
        return N1
    } else{
        return N2
    }
}
console.log(NMayor(10,20));

//8.  Escribe una función que tome una cadena como parámetro y devuelva true si la cadena es un palíndromo,
//es decir, si se lee igual de adelante hacia atrás que de atrás hacia adelante.


function CadenaPolindroma(Cadena, CadenaPolindroma) {
    console.log(Cadena)
    Cadena = Cadena.toLowerCase().replace();
    CadenaPolindroma = Cadena.split('').reverse().join('');
    return  Cadena === CadenaPolindroma;
}
console.log(CadenaPolindroma("flor"));
console.log(CadenaPolindroma("ala"));

//9.  Escribe una función que tome un arreglo como parámetro y devuelva el número de elementos en el arreglo.
var arreglolength = arreglo => {
    let a = 0;
    for (let i =0; i<arreglo.length; i++){
        a++;
    }
    return a;
}
let array= [1,2,3,4,5];
console.log(arreglolength(array));
console.log(arreglolength([6,7,8]));

//10. Escribe una función que tome un número como parámetro y devuelva true si el número es positivo, o false si es negativo.

var FuncionPostivoYNegativo = (numero) =>{
    return numero >= 0; 
}
console.log(FuncionPostivoYNegativo(10)); 
console.log(FuncionPostivoYNegativo(-10));

//11.  Escribe una función que tome dos cadenas de texto como parámetros y devuelva la concatenación de ambas cadenas.
var union = (palabra1, palabra2) =>{ 
    return palabra1 + palabra2;
}
console.log(union("Buenos", "Dias")); 

//12. Escribe una función que tome un arreglo como parámetro y devuelva el último elemento del arreglo.
function ultimo (arreglo){
    return arreglo [arreglo.length-1];
}
var ultimo2 = (arreglo)=>{
    return arreglo[arreglo.length-1];

}
console.log(ultimo ('Javiera'));// devolvera la letra a.

//13. Escribe una función que tome una cadena de texto como parámetro y devuelva true si la cadena contiene la letra "a", o false si no la contiene
let cadena = 'hoy es miercoles';
let cadena2 = 'mañana es jueves';

function encontrarletraA (texto){
    console.log('La cadena contiene la letra "a"?: \n'+ texto);
    return texto.includes ('a') || texto.includes('A');
}
console.log (encontrarletraA (cadena));
console.log (encontrarletraA(cadena2)); 

//14. Escribe una función que tome dos cadenas como parámetros y devuelva true si ambas cadenas son 
//anagramas, es decir, si tienen las mismas letras en un orden diferente.

var FuncionAnagrama = (Cadenas1, Cadenas2) => {
    let palabra1 = Cadenas1.split("").sort(); 
    let palabra2 = Cadenas2.split("").sort();

    return palabra1.join("") === palabra2.join(""); 
}
console.log(FuncionAnagrama("cara", "arca")); //verdadero
console.log(FuncionAnagrama("mono", "mona")); //falso

//15.  Escribe una función que tome un arreglo de números como parámetro y devuelva la suma de todos los números en el arreglo.

function Sumar(Arreglo) {
    let sumar = 0;
    for (let i = 0; i < Arreglo.length; i++) {
      sumar += Arreglo[i];
    }
    return sumar;
  }
    let Arreglo = [10, 20, 30, 40, 50];
    let suma = Sumar(Arreglo);
    console.log(suma); // Salida: 150

//16. Escribe una función que tome dos números como parámetros y devuelva el número menor.
function encontrarnumeromenor (n1, n2){
  if (n1<n2) {
    return n1
  } else {
    return n2
  }
}
let n1= 10
let n2= 5

let numeroMenor = encontrarnumeromenor (n1, n2);
console.log ("El numero menor es "+ numeroMenor); 

//17. Escribe una función que tome una cadena de texto como parámetro y devuelva la cadena en mayúsculas.
function CadenaMayuscula(CadenaParametro){ 
    return CadenaParametro.toUpperCase(); 
}
console.log(CadenaMayuscula("javiera"));

//18. Escribe una función que tome una cadena de texto como parámetro y devuelva la cadena en minúsculas.

var funcionMinuscula = (CadenaParametro) => {
    return CadenaParametro.toLowerCase(); 
}
console.log(funcionMinuscula("JAVIERA")); 

//19. Escribe una función que tome un número como parámetro y devuelva true si mel número es divisible por 3 y 5, o false si no lo es.
var DivisiblePorTresYCinco = (ParametroDivisible) => {
    return ParametroDivisible % 3 === 0 && ParametroDivisible % 5 === 0
}
console.log(DivisiblePorTresYCinco(30)); //verdadero

//20. Escribe una función que tome un arreglo como parámetro y devuelva una copia del arreglo invertido.
function ArregloInvertido(ArregloParametro){
    return arreglo.slice().reverse(); 
}
var arreglo = [1,2,3] 
console.log(ArregloInvertido(arreglo));

//21. Ya existente!! Ejercicio 12.

//22. .Escribe una función que tome un número como parámetro y devuelva el cubo de su valor si el número es negativo
//o el doble del valor si no lo es.

var TomarNumero = (num) =>{ 
    if (num < 0) { 
        return num ** 3;
    }else{
        return num* 2; 
    }
}
console.log(TomarNumero(-7)) //-343
console.log(TomarNumero(10)) //20

//23. Escribe una función que tome una cadena como parámetro y devuelva la cadena en orden inverso.
//Debe emplear el ciclo for.
 
function TomaCadena(Cadena) {
    let CadenaInvertida = '';
    for (let i = Cadena.length - 1; i >= 0; i--) {
        CadenaInvertida += Cadena[i];
    }
    return CadenaInvertida;
  }
    
    console.log(TomaCadena("Reconocer")); //reconoceR

// 24.  Escribe una función que tome dos números como parámetros y devuelva el resultado de la 
//división del primero por el segundo.
function TomarParametro(a, b){
    var division = a/b 
    return division; 
   }
   const a = 100
   const b = 2
   console.log(TomarParametro(a,b)); 

//25. Escribe una función que tome tres números como parámetros y devuelva el resultado de la suma de los
// dos primeros, multiplicado por el tercero.

function suma (a,b,j){
    return sum = (a+b)*j;
}
console.log('El resultado es:')
console.log(suma(10,20,2));

//26. Escribe una función que tome cuatro números como parámetros y devuelva
//el resultado de la resta del primer número por el segundo, multiplicado por la
//división del tercer número entre el cuarto.

function resultado (x,f,j,m){
    return result = ((x-f)*(j/m));
}
console.log('El resultado es:')
console.log(resultado(10,5,4,2));
   
//27. Escribe una función que tome dos números y un booleano como parámetros.Si el booleano es verdadero,
// la función debe devolver la multiplicación de los dos números; de lo contrario, debe devolver su diferencia.

var FuncionBooleano = (N1, N2, Bandera) =>{
    if (Bandera) {
        return N1 * N2;
        
    } else{
        return N1 - N2;
    }
}
console.log(FuncionBooleano(2, 3, true)); //6
console.log(FuncionBooleano(6, 3, false)); //3

//28. Escribe una función que tome tres parámetros booleanos y devuelva verdadero si al menos uno de los 
//tres parámetros es verdadero, de lo contrario, debe devolver falso.

var FuncionBooleano = (Booleano1, Booleano2, Booleano3) => {
    return Booleano1 || Booleano2 || Booleano3;
}
console.log(FuncionBooleano(true, true, false)); //verdadero
console.log(FuncionBooleano(false, false, false)); //falso
console.log(FuncionBooleano(true, false, false)); //verdadero

//29. Escribe una función que tome dos parámetros numéricos y un parámetro booleano. Si el tercer parámetro es verdadero,
// la función debe devolver el resultado de elevar el primer parámetro a la potencia del segundo parámetro,
//de lo contrario, debe devolver la raíz cuadrada del primer parámetro.

function calculos (dato1, dato2, booleano){
    if (booleano){
        return Math.pow(dato1, dato2);
    }else {
        return Math.sqrt(dato2);
    }
}
console.log(calculos(5, 3, true))
console.log(calculos(5, 3, false))

//30. Escribe una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo
//con todas las palabras en minúscula.

var FuncionArregloCadena = (StringParametro) => {
    var Arreglo = [];
    for (var i = 0; i < StringParametro.length; i++) {
        Arreglo.push(StringParametro[i].toLowerCase());
    }
    return Arreglo;
  }
console.log(FuncionArregloCadena(["NAZARET"]));

//31. Escribe una función en JavaScript que reciba un arreglo de números y retorne el promedio de todos
// los elementos del arreglo.

var Promedio = (Arreglo) => { 
    let Suma = 0; 
    for(let i = 0; i < Arreglo.length; i++) { 
      Suma += Arreglo[i]; 
    }
    return Suma / Arreglo.length; 
  }
  
  console.log(Promedio([10, 20, 12, 24])); 

  //32. Dado un arreglo de numeros, escribe una funcion que devuelva la suma de todos los numeros
  //pares. Si el arreglo esta vacio o no contiene numeros pare, la funcion debera devolver cero.

  function DevolverSumaSiEsPar (Num) {
    let Suma = 0; 
    for (let i = 0; i < Num.length; i++) {
        if (Num[i] % 2 === 0) { 
            Suma += Num[i]; 
        }
    }
    return Suma
}
console.log(DevolverSumaSiEsPar([])); //0
console.log(DevolverSumaSiEsPar([2, 4, 6])); //12



