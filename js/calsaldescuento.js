// -------------------- Foco inicial --------------------
document.getElementById("numero1").focus();

// -------------------- Función para avanzar con Enter validado --------------------
function avanzarConEnterValidado(actualId, siguienteId) {
    const actual = document.getElementById(actualId);
    const siguiente = document.getElementById(siguienteId);

    actual.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            const valor = actual.value.trim();

            // Validar que el input actual tenga valor válido antes de avanzar
            if (!valor || parseFloat(valor) <= 0) {
                actual.focus();
                return;
            }

            if (siguiente) {
                siguiente.focus();
                if (siguiente.tagName === "SELECT") {
                    // Intentar abrir dropdown en escritorio
                    siguiente.click();
                }
            }
        }
    });
}

// -------------------- Configurar navegación secuencial --------------------
avanzarConEnterValidado("numero1", "numero2");
avanzarConEnterValidado("numero2", "numero3");
avanzarConEnterValidado("numero3", "lista");

// -------------------- Enter en lista ejecuta cálculo --------------------
document.getElementById("lista").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        const valor = this.value.trim();
        if (valor && parseFloat(valor) > 0) {
            calsalcont();
        }
    }
});

// -------------------- Botón calcular --------------------
document.getElementById("myBtncalsalcontadescuento").addEventListener("click", () => {
    // Validar secuencialmente los inputs
    const n1 = document.getElementById("numero1").value.trim();
    if (!n1 || parseFloat(n1) <= 0) { 
        document.getElementById("numero1").focus(); 
        return; 
    }

    const n2 = document.getElementById("numero2").value.trim();
    if (!n2 || parseFloat(n2) < 0) { 
        document.getElementById("numero2").focus(); 
        return; 
    }

    const n3 = document.getElementById("numero3").value.trim();
    if (!n3 || parseInt(n3) <= 0) { 
        document.getElementById("numero3").focus(); 
        return; 
    }

    const n4 = document.getElementById("lista").value.trim();
    if (!n4 || parseFloat(n4) <= 0) { 
        document.getElementById("lista").focus(); 
        return; 
    }

    // Si todo es válido, ejecutar cálculo
    calsalcont();

    // ✅ No hay foco extra; el flujo finaliza aquí
});

// -------------------- Función de cálculo --------------------
function calsalcont() {
    const num1 = parseFloat(document.getElementById('numero1').value) || 0;
    const num2 = parseFloat(document.getElementById('numero2').value) || 0;
    const num3 = parseInt(document.getElementById('numero3').value) || 0;
    const num4 = parseFloat(document.getElementById('lista').value) || 0;

    // Mostrar contenedores de resultados
    document.querySelector('.input-grupo2').style.display = 'block';
    document.querySelector('.input-grupo3').style.display = 'flex';

    // Cálculos
    const salini = num1 - num2;
    const docem = ((((salini * 0.04) * num4 + 65) * 1.13 + salini) / num4);
    const montopag = docem * num3;
    const salrestante = ((((salini * 0.04) * num4 + 65) * 1.13 + salini) - montopag);

    const saldodividido = salini / num4;
    const mesesrestantes = num4 - num3;
    const traspdividido = ((65 * 1.13) / num4) * mesesrestantes;
    const salapagar = (mesesrestantes * saldodividido) + traspdividido;

    const descuento = salrestante === 0 ? 100 : ((salrestante - salapagar) / salrestante * 100);

    // Actualizar labels
    document.getElementById("lblsalini").textContent = "- Saldo inicial $" + salini.toFixed(2);
    document.getElementById("lblmonmen").textContent = "- Monto mensual $" + docem.toFixed(2);
    document.getElementById("lblmonpag").textContent = "- Monto pagado (" + num3 + " Cuotas) $" + montopag.toFixed(2);
    document.getElementById("lblsalres").textContent = "- Saldo restante $" + salrestante.toFixed(2);
    document.getElementById("lblsalpag").textContent = "- Saldo a pagar de contado $" + salapagar.toFixed(2);
    document.getElementById("lbldesapli").textContent = "- Descuento a aplicar (%): " + descuento.toFixed(2) + "%";

    // Ajuste de padding
    document.body.style.padding = "1rem";
}