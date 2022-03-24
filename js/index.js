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