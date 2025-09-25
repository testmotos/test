// Listener
document.querySelector(".btnDiluir").addEventListener("click", calpriminDiluir);

function calpriminDiluir() {
    // Obtener valores y convertir a número
    const num1 = parseFloat(document.getElementById('numero1').value) || 0;
    const num2 = parseFloat(document.getElementById('numero2').value) || 0;
    const precio = num1.toFixed(2);
    const saldo1 = num1 - num2;

    // Validaciones
    if (num1 <= 0) {
        document.getElementById("numero1").value = "";
        document.getElementById("numero2").value = "";
        document.getElementById("numero1").focus();
        return;
    }

    if (num2 < 0) {
        document.getElementById("numero2").value = "";
        document.getElementById("numero2").focus();
        return;
    }

    if (num2 === 0) {
        document.getElementById("numero2").focus();
        return;
    }

    if (saldo1 <= 0) {
        document.getElementById("numero2").focus();
        return;
    }

    // Mostrar contenedores
    document.querySelector('.titulo-pago').style.display = 'block';
    document.querySelector('.tabla-container').style.display = 'block';
    document.querySelector('.input-grupo2').style.display = 'block';
    document.querySelector('.btnDiluir').style.display = 'block';
    document.querySelector('.btnNvaCot').style.display = 'block';

    // Cálculos
    const primin = (num2 + 10).toFixed(2);
    const saldo = (num1 - num2).toFixed(2);
    const resultado1 = ((saldo1 + 65) / 4).toFixed(2);

    // Actualizar labels
    document.getElementById("lblprima").textContent = "Prima minima + papeleo";
    document.getElementById("lbltoprima1").textContent = "$" + primin;
    document.getElementById("lblsaldo").textContent = "Saldo $" + saldo;
    document.getElementById("lblpreciomo1").textContent = "Precio de la motocicleta $" + precio;

    document.getElementById("lblCuota_01").textContent = "$" + resultado1;
    document.getElementById("lblCuota_02").textContent = "$" + resultado1;
    document.getElementById("lblCuota_03").textContent = "$" + resultado1;
    document.getElementById("lblCuota_04").textContent = "$" + resultado1;

    // Ajuste de padding
    document.body.style.padding = "1rem";
}