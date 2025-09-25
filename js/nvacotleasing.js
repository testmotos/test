document.querySelector(".btnnvacotleasing").addEventListener("click", limpiar);

function limpiar() {

    // Define un límite de ancho, por ejemplo, 480 píxeles
    const mobileQuery = window.matchMedia('(max-width: 480px)');

    function handleTabletChange(e) {
        // Código común para resetear labels
        document.getElementById("lblprima").innerHTML = "Prima minima";
        document.getElementById("lbltoprima1").innerHTML = "$0.00";
        document.getElementById("lbltoprimacal").innerHTML = "- Prima Calculada (35%) $0.00";
        document.getElementById("lblpagini").innerHTML = "- Pago Inicial (A Facturar) $0.00";
        document.getElementById("lblgasadm").innerHTML = "- Gastos Admin (En Recibo) $0.00";
        document.getElementById("lbltralegal").innerHTML = "- Tramite Legal (En Recibo) $0.00";
        document.getElementById("lblsaldo").innerHTML = "Saldo $0.00";
        document.getElementById("lblpreciom").innerHTML = "Precio de la motocicleta $0.00";

        document.getElementById("lbl06_06").innerHTML = "$0.00";
        document.getElementById("lbl12_12").innerHTML = "$0.00";
        document.getElementById("lbl18_18").innerHTML = "$0.00";
        document.getElementById("lbl24_24").innerHTML = "$0.00";
        document.getElementById("lbl30_30").innerHTML = "$0.00";

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