document.querySelector(".btnnvacotleasing").addEventListener("click", limpiar);

function limpiar() {

    // Define un límite de ancho, por ejemplo, 480 píxeles
    const mobileQuery = window.matchMedia('(max-width: 480px)');

    function handleTabletChange(e) {
        // Código común para resetear labels
        document.getElementById("lblprima").textContent = "Prima minima";
        document.getElementById("lbltoprima1").textContent = "$0.00";
        document.getElementById("lbltoprimacal").textContent = "- Prima Calculada (35%) $0.00";
        document.getElementById("lblpagini").textContent = "- Pago Inicial (A Facturar) $0.00";
        document.getElementById("lblgasadm").textContent = "- Gastos Admin (En Recibo) $0.00";
        document.getElementById("lbltralegal").textContent = "- Tramite Legal (En Recibo) $0.00";
        document.getElementById("lblsaldo").textContent = "Saldo $0.00";
        document.getElementById("lblpreciom").textContent = "Precio de la motocicleta $0.00";

        document.getElementById("lbl06_06").textContent = "$0.00";
        document.getElementById("lbl12_12").textContent = "$0.00";
        document.getElementById("lbl18_18").textContent = "$0.00";
        document.getElementById("lbl24_24").textContent = "$0.00";
        document.getElementById("lbl30_30").textContent = "$0.00";

        document.querySelector('.lblcalprima1').style.display = 'none';
        document.querySelector('.titulo-pago').style.display = 'none';
        document.querySelector('.tabla-container1').style.display = 'none';
        document.querySelector('.input-grupo-leasing1').style.display = 'flex';
        document.querySelector('.input-grupo-leasing2').style.display = 'none';
        document.querySelector('.input-grupo-leasing3').style.display = 'none';

        const bodyElement = document.body;

        if (e.matches) {
            // Modo móvil
            bodyElement.style.padding = "1rem";

            // Resetear formulario
            formulario.reset();
            document.getElementById("numero1").focus();
        } else {
            // Modo escritorio
            bodyElement.style.padding = "6rem";

            // Resetear formulario y poner foco
            formulario.reset();
            document.getElementById("numero1").focus();
        }
    }

    // ✅ Llamar una vez al cargar
    handleTabletChange(mobileQuery);

    // ✅ Escuchar cambios de tamaño
    mobileQuery.addEventListener("change", handleTabletChange);
}