/// Codigo del cuadrado
console.group("cuadrado"); 

/*
const ladoCuadrado = 5;
console.log("Los lados del cuaddrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuaddrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuaddrado es: " + areaCuadrado + "cm^2");  */


function perimetroCuadrado (lado){
    return lado * 4;
}

perimetroCuadrado();

function areaCuadrado (lado){
    return lado * lado;
}

console.groupEnd();


/////////////////////////
/////////////////////////
/// Codigo del triangulo
console.group("Triangulo");   /*

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triangulo son: " + ladoTriangulo1 + "cm" 
+ ladoTriangulo2 + "cm" + baseTriangulo + "cm");

console.log("La base del cuadrado es: " + baseTriangulo + "cm");       

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("El area del triangulo es: " + areaTriangulo + "cm^2"); */


 function perimetroTriangulo (lado1,lado2,lado3){
     return lado1 + lado2 + lado3;
 }

 perimetroTriangulo();

 function areaTriangulo  (altura,base){
    return altura*base/2;
}


console.groupEnd();


/////////////////////////
/////////////////////////
/// Codigo del circulo
console.group("Circulo");
/*
//Radio
const radioCirculo = 4;
console.log("El radio del circulo es:  " + radioCirculo + "cm");

//Diametro
const diametroCirculo = radioCirculo*2;
console.log(`El diametro del circulo es: ${diametroCirculo} cm`);

//PI
const PI = Math.PI;
console.log(`El pi del circulo es: ${PI} cm`);

//Circunferencia
const perimetroCirculo = PI * diametroCirculo; 
console.log(`El perimetro del circulo es: ${perimetroCirculo} cm`);

//Area
const areaCirculo = PI * (radioCirculo * radioCirculo);
console.log(`El area del circulo es: ${areaCirculo} cm^2`);
*/
const PI = Math.PI;
console.log(`El pi del circulo es: ${PI} cm`);

function diametroCirculo(radio) {
    return radio * 2;
  }  

function perimetroCirculo (radio){
    return 2 * radio * PI;
}

function areaCirculo (radio){
    return radio * radio * PI;
}



console.groupEnd();




///Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const resultado = perimetroCuadrado (value);
    alert(resultado);

}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const resultado = areaCuadrado (value);
    alert(resultado);
}



function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("lado1Triangulo");
    const lado1 = parseInt(input1.value);
    const input2 = document.getElementById("lado2Triangulo");
    const lado2 = parseInt(input2.value); 
    const input3 = document.getElementById("baseTriangulo");
    const base = parseInt(input3.value); 
    

    const resultado = perimetroTriangulo (lado1,lado2,base);
    alert(resultado);
}

function calcularAreaTriangulo(){
    const input3 = document.getElementById("baseTriangulo");
    const base = parseInt(input3.value); 
    const input4 = document.getElementById("alturaTriangulo");
    const altura = parseInt(input4.value); 
    

    const resultado = areaTriangulo (base,altura);
    alert(resultado);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("radioCirculo");
    const r = parseInt(input.value);

    const resultado = perimetroCirculo(r)
    alert(resultado);
}


function calcularAreaCirculo(){
    const input = document.getElementById("radioCirculo");
    const r = parseInt(input.value);

    const resultado = areaCirculo(r)
    alert(resultado);
}