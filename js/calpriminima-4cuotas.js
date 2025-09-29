// Listeners
document.getElementById("myBtnPriminima").addEventListener("click", calprimin);
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
    document.querySelector('.btnDiluir').style.display = 'block';
    document.querySelector('.btnNvaCot').style.display = 'block';

    // Cálculos
    const primin = (num2 + 10).toFixed(2);
    const saldo = (num1 - num2).toFixed(2);
    const resultado1 = (65).toFixed(2);
    const resultado2 = (saldo1 / 3).toFixed(2);

    // Actualizar labels
    document.getElementById("lblprima").textContent = "Prima minima + papeleo";
    document.getElementById("lbltoprima1").textContent = "$" + primin;
    document.getElementById("lblsaldo").textContent = "Saldo $" + saldo;
    document.getElementById("lblpreciomo1").textContent = "Precio de la motocicleta $" + precio;

    document.getElementById("lblCuota_01").textContent = "$" + resultado1;
    document.getElementById("lblCuota_02").textContent = "$" + resultado2;
    document.getElementById("lblCuota_03").textContent = "$" + resultado2;
    document.getElementById("lblCuota_04").textContent = "$" + resultado2;

    // Ajuste de padding
    document.body.style.padding = "1rem";
}

// --- BOTONES Y CAPTURA ---
const capturaBtn = document.getElementById("captura-btn");
const btnNuevaCot = document.querySelector(".btnNvaCot");

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
  tempDiv.style.width = "360px";  // ancho de escritorio
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
    link.download = "4cuotas.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    document.body.removeChild(tempDiv);
  });

  // En móvil, cerrar sidebar al capturar
  if(window.innerWidth <= 480) {
    sidebar.classList.remove("open");
    menuBtn.classList.remove("open");
  }
});