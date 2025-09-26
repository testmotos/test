// Listeners
document.getElementById("myBtnPriminusa").addEventListener("click", calprimin);
document.getElementById("numero2").addEventListener("keydown", function(e) {
    if (e.key === "Enter") calprimin();
});

function calprimin() {
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

    // Habilitar captura
    capturaBtn.style.pointerEvents = "auto";
    capturaBtn.style.opacity = "1";

    // Mostrar contenedores
    document.querySelector('.titulo-pago').style.display = 'block';
    document.querySelector('.tabla-container').style.display = 'block';
    document.querySelector('.input-grupo2').style.display = 'block';
    document.querySelector('.input-grupo3').style.display = 'flex';

    // Cálculos
    const primin = (num2 + 10).toFixed(2);
    const saldo = (num1 - num2).toFixed(2);

    // Actualizar labels
    document.getElementById("lblprima").textContent = "Prima minima + papeleo";
    document.getElementById("lbltoprima1").textContent = "$" + primin;
    document.getElementById("lblsaldo").textContent = "Saldo $" + saldo;
    document.getElementById("lblpreciomo1").textContent = "Precio de la motocicleta $" + precio;

    // Cálculo de cuotas
    const calcularCuota = (meses) => (((saldo1 * 0.04) * meses + saldo1) / meses).toFixed(2);

    document.getElementById("lblCuota_06").textContent = "$" + calcularCuota(6);
    document.getElementById("lblCuota_12").textContent = "$" + calcularCuota(12);
    document.getElementById("lblCuota_18").textContent = "$" + calcularCuota(18);
    document.getElementById("lblCuota_24").textContent = "$" + calcularCuota(24);

    // Ajuste de padding
    document.body.style.padding = "1rem";
}


// --- BOTÓN CAPTURA ---
const capturaBtn = document.getElementById("captura-btn");
const btnNuevaCot = document.querySelector(".btnnvacotusada");


// Inicialmente deshabilitado
capturaBtn.style.pointerEvents = "none";
capturaBtn.style.opacity = "0.5";

// Deshabilitar captura
function deshabilitarCaptura() {
  capturaBtn.style.pointerEvents = "none";
  capturaBtn.style.opacity = "0.5";
}

// Deshabilitar al crear nueva cotización
btnNuevaCot.addEventListener("click", deshabilitarCaptura);

// --- FUNCIÓN DE CAPTURA DE PANTALLA ---
capturaBtn.addEventListener("click", () => {

    // Cerrar sidebar en móvil
    if (window.innerWidth <= 480) {
      sidebar.classList.remove("open");
      menuBtn.classList.remove("open");
    }
  
    // Crear contenedor virtual con ancho de escritorio
    const virtualContainer = document.createElement("div");
    virtualContainer.style.width = "360px"; // ancho de escritorio
    virtualContainer.style.background = "#fff";
    virtualContainer.style.padding = "20px";
    virtualContainer.style.position = "absolute";
    virtualContainer.style.left = "-9999px";
  
    // Clonar los elementos a capturar
    const lblCalPrima = document.getElementById("lblprima").parentNode.cloneNode(true);
    const tituloPago = document.querySelector(".titulo-pago").cloneNode(true);
    const tablaContainer = document.querySelector(".tabla-container").cloneNode(true);
  
    // Añadir al contenedor virtual
    virtualContainer.appendChild(lblCalPrima);
    virtualContainer.appendChild(tituloPago);
    virtualContainer.appendChild(tablaContainer);
  
    document.body.appendChild(virtualContainer);
  
    // Capturar con html2canvas
    html2canvas(virtualContainer, { scale: 2 }).then(canvas => {
      const link = document.createElement("a");
      link.download = "usadas.png";
      link.href = canvas.toDataURL();
      link.click();
      document.body.removeChild(virtualContainer);
    });
  });