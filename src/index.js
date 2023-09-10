document.getElementById("calcular").onclick = function(){
    var resultadoE = document.getElementById("resultados_valor");
    var montoTotalE = document.getElementById("monto_total");
    var porcentajeSeleccionado = Number(document.getElementById("Porcentaje").value);
    var NumeroA = Number(document.getElementById("NumeroA").value);

    var propina = (NumeroA * porcentajeSeleccionado / 100);
    var total = NumeroA + propina;

    resultadoE.innerHTML = "Propina a pagar: $" + propina.toFixed(2);
    montoTotalE.innerHTML = "Monto total a pagar (incluyendo propina): $" + total.toFixed(2);

    document.getElementById("VolverCalcular").style.display = "block";
};

document.getElementById("Porcentaje").oninput = function() {
    var porcentajeSeleccionado = document.getElementById("Porcentaje").value;
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