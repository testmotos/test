document.getElementById("myBtnPrimin").addEventListener("click", calprimin);
document.getElementById("numero2").addEventListener("keydown", function(e) {
    if (e.key === "Enter") calprimin();
});

function calprimin() {
    // Obtener valores y convertir a números
    const num1 = parseFloat(document.getElementById('numero1').value) || 0;
    const num2 = parseFloat(document.getElementById('numero2').value) || 0;

    const saldo1 = num1 - num2;
    const precio = num1.toFixed(2);

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
    document.querySelector('.lblcalprima1').style.display = 'block';
    document.querySelector('.tabla-container1').style.display = 'block';
    document.querySelector('.titulo-pago').style.display = 'block';
    document.querySelector('.input-grupo-leasing1').style.display = 'none';
    document.querySelector('.input-grupo-leasing2').style.display = 'flex';
    document.querySelector('.input-grupo-leasing3').style.display = 'flex';

    // Cálculos
    const tralegal = 65;
    const gasadm = 250 - tralegal;
    const prima = (num1 * 0.35).toFixed(2);
    const primin = num2.toFixed(2);
    const saldo = (num1 - num2).toFixed(2);
    const pagini = (num2 - 250).toFixed(2);

    // Actualizar labels
    document.getElementById("lblprima").textContent = "Prima minima";
    document.getElementById("lbltoprima1").textContent = "$" + primin;
    document.getElementById("lbltoprimacal").textContent = "- Prima Calculada (35%) $" + prima;
    document.getElementById("lblpagini").textContent = "- Pago Inicial (A Facturar) $" + pagini;
    document.getElementById("lblgasadm").textContent = "- Gastos Admin (En Recibo) $" + gasadm.toFixed(2);
    document.getElementById("lbltralegal").textContent = "- Tramite Legal (En Recibo) $" + tralegal.toFixed(2);
    document.getElementById("lblsaldo").textContent = "Saldo $" + saldo;
    document.getElementById("lblpreciom").textContent = "Precio de la motocicleta $" + precio;

    // Cálculos de cuotas
    const calcularCuota = (meses) => (((((saldo * 0.04) * meses) + tralegal) * 1.13 + saldo1) / meses).toFixed(2);

    document.getElementById("lbl06_06").textContent = "$" + calcularCuota(6);
    document.getElementById("lbl12_12").textContent = "$" + calcularCuota(12);
    document.getElementById("lbl18_18").textContent = "$" + calcularCuota(18);
    document.getElementById("lbl24_24").textContent = "$" + calcularCuota(24);
    document.getElementById("lbl30_30").textContent = "$" + calcularCuota(30);

    document.body.style.padding = "1rem";
}

// --- BOTONES Y CAPTURA ---
const capturaBtn = document.getElementById("captura-btn");
const btnNuevaCot = document.getElementById("NvaCotLeasing");


// Inicialmente deshabilitamos la opción de captura
capturaBtn.style.pointerEvents = "none";   
capturaBtn.style.opacity = "0.5";          

// Deshabilitar captura al crear nueva cotización
btnNuevaCot.addEventListener("click", () => {
  capturaBtn.style.pointerEvents = "none";
  capturaBtn.style.opacity = "0.5";
});

// --- CAPTURA DE PANTALLA ---
capturaBtn.addEventListener("click", () => {

  // Cerrar sidebar en modo móvil
  if (window.innerWidth <= 480) {
    sidebar.classList.remove("open");
    menuBtn.classList.remove("open");
  }

  const divsParaCaptura = [
    document.getElementById("lblcalprima1"),
    document.querySelector(".titulo-pago"),
    document.querySelector(".tabla-container1")
  ];

  const tempDiv = document.createElement("div");
  tempDiv.style.position = "fixed";
  tempDiv.style.top = "0";
  tempDiv.style.left = "0";
  tempDiv.style.background = "#fff";
  tempDiv.style.padding = "15px";
  tempDiv.style.width = "360px"; // ancho estilo escritorio
  tempDiv.style.borderRadius = "15px";
  tempDiv.style.display = "block";
  tempDiv.style.transformOrigin = "top left";
  tempDiv.style.zIndex = "9999";

  divsParaCaptura.forEach(d => {
    const clone = d.cloneNode(true);
    clone.style.display = "block";
    tempDiv.appendChild(clone);
  });

  document.body.appendChild(tempDiv);

  html2canvas(tempDiv, { scale: 2 }).then(canvas => {
    const link = document.createElement("a");
    link.download = "leasing.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    document.body.removeChild(tempDiv);
  });
});