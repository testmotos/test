// Foco inicial
document.getElementById("numero1").focus();

// Listeners
document.getElementById("myBtnCalPrima").addEventListener("click", calprima);
document.getElementById("numero1").addEventListener("keydown", function(e) {
    if (e.key === "Enter") calprima();
});

function calprima() {
    // Obtener valor y convertir a número
    const num1 = parseFloat(document.getElementById("numero1").value) || 0;
    const precio = num1.toFixed(2);

    // Validaciones
    if (num1 <= 0) {
        document.getElementById("numero1").value = "";
        document.getElementById("numero1").focus();
        return;
    }

    // Mostrar contenedores
    document.querySelector('.input-grupo2').style.display = 'block';
    document.querySelector('.input-grupo3').style.display = 'flex';
    document.querySelector('.btnDiluir').style.display = 'none';

    // Cálculos
    const prima = (num1 * 0.35).toFixed(2);
    const saldo = (num1 - num1 * 0.35).toFixed(2);

    // Actualizar labels
    document.getElementById("lblprima").textContent = "Prima minima";
    document.getElementById("lbltoprima1").textContent = "$" + prima;
    document.getElementById("lblsaldo").textContent = "Saldo $" + saldo;
    document.getElementById("lblpreciomo1").textContent = "Precio de la motocicleta $" + precio;

    // Pasar foco al siguiente input
    document.getElementById("numero2").focus();
}