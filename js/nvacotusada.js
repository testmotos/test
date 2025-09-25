document.querySelector(".btnnvacotusada").addEventListener("click", limpiar);

function limpiar() {

    // Define un límite de ancho, por ejemplo, 480 píxeles
    const mobileQuery = window.matchMedia('(max-width: 480px)');

    function handleTabletChange(e) {
        // Código común para resetear labels
        document.getElementById("lblprima").innerHTML = "Prima minima";
        document.getElementById("lbltoprima1").innerHTML = "$0.00";
        document.getElementById("lblsaldo").innerHTML = "Saldo $0.00";
        document.getElementById("lblpreciomo1").innerHTML = "Precio de la motocicleta $0.00";

        document.getElementById("lblCuota_06").innerHTML = "$0.00";
        document.getElementById("lblCuota_12").innerHTML = "$0.00";
        document.getElementById("lblCuota_18").innerHTML = "$0.00";
        document.getElementById("lblCuota_24").innerHTML = "$0.00";

        document.querySelector('.titulo-pago').style.display = 'none';
        document.querySelector('.tabla-container').style.display = 'none';
        document.querySelector('.input-grupo2').style.display = 'none';
        document.querySelector('.input-grupo3').style.display = 'none';

        const bodyElement = document.body;

        if (e.matches) {
            // Modo móvil
            bodyElement.style.padding = "1rem";

            // Resetear formulario
            formulario1.reset();
            document.getElementById("numero1").focus();
        } else {
            // Modo escritorio
            bodyElement.style.padding = "6rem";

            // Resetear formulario y poner foco
            formulario1.reset();
            document.getElementById("numero1").focus();
        }
    }

    // ✅ Llamar una vez al cargar
    handleTabletChange(mobileQuery);

    // ✅ Escuchar cambios de tamaño
    mobileQuery.addEventListener("change", handleTabletChange);
}