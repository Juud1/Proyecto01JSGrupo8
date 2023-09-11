document.getElementById("calcular").onclick = function(){
    let resultadoE = document.getElementById("resultados_valor");
    let montoTotalE = document.getElementById("monto_total");
    let porcentajeSeleccionado = Number(document.getElementById("Porcentaje").value);
    let NumeroA = Number(document.getElementById("NumeroA").value);

    let propina = (NumeroA * porcentajeSeleccionado / 100);
    let total = NumeroA + propina;

    resultadoE.innerHTML = "Propina a pagar: $" + propina.toFixed(2);
    montoTotalE.innerHTML = "Monto total a pagar (incluyendo propina): $" + total.toFixed(2);

    document.getElementById("VolverCalcular").style.display = "block";
};

document.getElementById("Porcentaje").oninput = function() {
    let porcentajeSeleccionado = document.getElementById("Porcentaje").value;
    document.getElementById("porcentajeSeleccionado").innerHTML = porcentajeSeleccionado + "%";
};

document.getElementById("VolverCalcular").onclick = function() {
    document.getElementById("NumeroA").value = "";
    document.getElementById("Porcentaje").value = "15";
    document.getElementById("porcentajeSeleccionado").innerHTML = "15%";
    document.getElementById("resultados_valor").innerHTML = "";
    document.getElementById("monto_total").innerHTML = "";
    this.style.display = "none";
};