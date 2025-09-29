document.querySelector(".btnnvocalcdescuento").addEventListener("click", limpiar);

function limpiar(){

    // Define un límite de ancho, por ejemplo, 480 píxeles

    const mobileQuery = window.matchMedia('(max-width: 480px)');

    function handleTabletChange(e) {

        // Código común para resetear labels
        
        document.getElementById("lblsalini").textContent = "- Saldo inicial $0.00";
        document.getElementById("lblmonmen").textContent = "- Monto mensual $0.00";
        document.getElementById("lblmonpag").textContent = "- Monto pagado (0 cuotas) $0.00";
        document.getElementById("lblsalres").textContent = "- Saldo restante $0.00";
        document.getElementById("lblsalpag").textContent = "- Saldo a pagar de contado $0.00";
        document.getElementById("lbldesapli").textContent = "- Descuento a aplicar (%)";

        document.querySelector('.input-grupo2').style.display = 'none';
        document.querySelector('.input-grupo3').style.display = 'none';

        const bodyElement = document.body;

        if (e.matches) {

            // Modo móvil

            bodyElement.style.padding = "1rem";
        } else {

            // Modo escritorio

            bodyElement.style.padding = "6rem";
        }

        formulario.reset();
        document.getElementById("numero1").focus();
    }

    // ✅ Llamar una vez al cargar

    handleTabletChange(mobileQuery);

    // ✅ Escuchar cambios de tamaño

    mobileQuery.addEventListener("change", handleTabletChange);
}