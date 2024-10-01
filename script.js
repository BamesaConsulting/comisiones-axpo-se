function calcularComision() {
    // Obtener los valores de los inputs
    const consumo = parseFloat(document.getElementById('consumo').value) || 0;
    const fee = parseFloat(document.getElementById('fee').value) || 0;

    // Convertir fee de energía de €/MWh a €/kWh
    const resultado = (consumo / 1000 * fee) * 0.6 * 0.70;
    

    // Actualizar el resultado en la página
    document.getElementById('result').textContent = resultado.toFixed(2) + " €";
}
