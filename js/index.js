const cacularPerimetroCuadrado = () => {
    const lado = document.getElementById("lado-cuadrado").value;
    let perimetro = lado * 4;
    //alert(`El perimetro del cuadrado es: ${perimetro}cm`);
    document.getElementById("resultado-cuadrado").innerHTML = `Perímetro: ${perimetro}cm`;
};

const cacularAreaCuadrado = () => {
    const lado = document.getElementById("lado-cuadrado").value;
    let area = lado * lado;
    //alert(`El area del cuadrado es: ${area}cm`);
    document.getElementById("resultado-cuadrado").innerHTML = `Area: ${area}cm`;
}

const cacularPerimetroCirculo = () => {
    const radio = document.getElementById("radio-circulo").value;
    let perimetro = 2 * Math.PI * radio;
    perimetro = perimetro.toFixed(2);
    //alert(`El perimetro del circulo es: ${perimetro}cm`);
    document.getElementById("resultado-circulo").innerHTML = `Perímetro: ${perimetro}cm`;
}

const cacularAreaCirculo = () => {
    const radio = document.getElementById("radio-circulo").value;
    let area = Math.PI * radio * radio;
    area = area.toFixed(2);
    //alert(`El area del circulo es: ${area}cm`);
    document.getElementById("resultado-circulo").innerHTML = `Area: ${area}cm`;
}