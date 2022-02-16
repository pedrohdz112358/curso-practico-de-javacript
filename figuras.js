/// Codigo del cuadrado
console.group("cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuaddrado miden: " + ladoCuadrado + "cm");

const perietroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuaddrado es: " + perietroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuaddrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

/////////////////////////
/////////////////////////
/// Codigo del triangulo
console.group("Triangulo");

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
console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();


/////////////////////////
/////////////////////////
/// Codigo del circulo
console.group("Circulo");

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


console.groupEnd();
