

document.getElementById("Porcentaje").onclick = function(){
    var resultadoE = document.getElementById("resultados_valor");
    NumeroA = Number(document.getElementById("NumeroA").value);
    NumeroB = Number(document.getElementById("NumeroB").value);
    let resultado = ((NumeroA*NumeroB/100)+NumeroA);
    console.log("El resultado del porcentaje es " +resultado);
    resultadoE.innerHTML= resultado;

}