document.querySelector(".btnNvaCot").addEventListener("click", limpiar);

function limpiar() {
    // Definir límite de ancho (480px)
    const mobileQuery = window.matchMedia("(max-width: 480px)");

    function handleTabletChange(e) {
        // Resetear labels y cuotas
        document.getElementById("lblprima").innerHTML = "Prima minima";
        document.getElementById("lbltoprima1").innerHTML = "$0.00";
        document.getElementById("lblsaldo").innerHTML = "Saldo $0.00";
        document.getElementById("lblpreciomo1").innerHTML = "Precio de la motocicleta $0.00";

        document.getElementById("lblCuota_01").innerHTML = "$0.00";
        document.getElementById("lblCuota_02").innerHTML = "$0.00";
        document.getElementById("lblCuota_03").innerHTML = "$0.00";
        document.getElementById("lblCuota_04").innerHTML = "$0.00";

        // Ocultar elementos
        document.querySelector('.titulo-pago').style.display = 'none';
        document.querySelector('.tabla-container').style.display = 'none';
        document.querySelector('.input-grupo2').style.display = 'none';
        document.querySelector('.input-grupo3').style.display = 'none';

        const bodyElement = document.body;

        if (e.matches) {
            // =====================
            // MODO MÓVIL
            // =====================
            bodyElement.style.padding = "1rem";

            formulario1.reset();
            document.getElementById("numero1").focus();

        } else {
            // =====================
            // MODO ESCRITORIO
            // =====================
            bodyElement.style.padding = "6rem";

            formulario1.reset();
            document.getElementById("numero1").focus();
        }
    }

    // ✅ Ejecutar inmediatamente
    handleTabletChange(mobileQuery);

    // ✅ Escuchar cambios de tamaño
    mobileQuery.addEventListener("change", handleTabletChange);
}