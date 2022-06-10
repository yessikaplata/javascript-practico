// Código del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

function calcularCuadrado() {
    calcularPerimetroCuadrado();
    calcularAreaCuadrado();
}

function calcularPerimetroCuadrado() {
    const lado = document.getElementById("inputCuadrado").value;
    const perimetro = perimetroCuadrado(Number(lado));
    const resultadoPerimetroCuadrado = document.getElementById("resultadoPerimetroCuadrado");
    resultadoPerimetroCuadrado.textContent = "Perímetro: " + perimetro + "cm"
}

function calcularAreaCuadrado() {
    const lado = document.getElementById("inputCuadrado").value;
    const area = areaCuadrado(Number(lado));
    const resultadoAreaCuadrado = document.getElementById("resultadoAreaCuadrado");
    resultadoAreaCuadrado.textContent = "Área: " + area + "cm"
}


// Código del triangulo
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function calcularTriangulo() {
    calcularPerimetroTriangulo();
    calcularAreaTriangulo();
}

function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("inputTriangulo1").value;
    const lado2 = document.getElementById("inputTriangulo2").value;
    const base = document.getElementById("inputTrianguloBase").value;
    const perimetro = perimetroTriangulo(Number(lado1), Number(lado2), Number(base));
    const resultadoPerimetroTriangulo = document.getElementById("resultadoPerimetroTriangulo");
    resultadoPerimetroTriangulo.textContent = "Perímetro: " + perimetro + "cm"
}

function calcularAreaTriangulo() {
    const base = document.getElementById("inputTrianguloBase").value;
    const altura = document.getElementById("inputTrianguloAltura").value;
    const area = areaTriangulo(Number(base), Number(altura));
    const resultadoAreaTriangulo = document.getElementById("resultadoAreaTriangulo");
    resultadoAreaTriangulo.textContent = "Área: " + area + "cm"
}


// Código del Círculo
function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return (diametro * Math.PI).toFixed(2);
}

function areaCirculo(radio) {
    return (Math.pow(radio, 2) * Math.PI).toFixed(2);
}

function calcularCirculo() {
    calcularPerimetroCirculo();
    calcularAreaCirculo();
}

function calcularPerimetroCirculo() {
    const radio = document.getElementById("inputRadio").value;
    const perimetro = perimetroCirculo(Number(radio))
    const resultadoPerimetroCirculo = document.getElementById("resultadoPerimetroCirculo");
    resultadoPerimetroCirculo.textContent = "Perímetro: " + perimetro + "cm"
}

function calcularAreaCirculo() {
    const radio = document.getElementById("inputRadio").value;
    const area = areaCirculo(Number(radio));
    const resultadoAreaCirculo = document.getElementById("resultadoAreaCirculo");
    resultadoAreaCirculo.textContent = "Área: " + area + "cm"
}


//Código isóceles

function calcularAlturaIsoceles() {
    const lado1 = document.getElementById("inputIsoceles1").value;
    const lado2 = document.getElementById("inputIsoceles2").value;
    const base = document.getElementById("inputIsocelesBase").value;
    const resultadoAlturaIsoceles = document.getElementById("resultadoAlturaIsoceles");
    const esTrianguloIsoceles = esIsoceles(lado1, lado2, base);
    if (!esTrianguloIsoceles) {
        resultadoAlturaIsoceles.textContent = "El tríangulo no es un triángulo isóceles";
        return;
    }
    const minuendo = Math.pow(lado1, 2);
    console.log(minuendo);
    const sustraendo = Math.pow(base, 2) / 4;
    console.log(minuendo);
    const altura = Math.sqrt(minuendo - sustraendo);
    resultadoAlturaIsoceles.textContent = "La altura es " + altura.toFixed(2) + "cm";
}

function esIsoceles(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado1 == lado3) {
        return false;
    }
    return (lado1 == lado2 || lado1 == lado3 || lado2 == lado3);
}