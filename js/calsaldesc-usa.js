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
avanzarConEnterValidado("numero3", "numero4");
avanzarConEnterValidado("numero4", "numero5");
avanzarConEnterValidado("numero5", "lista");

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
document.getElementById("myBtncalsalcontadesc-usa").addEventListener("click", () => {
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

    const n4 = document.getElementById("numero4").value.trim();
    if (!n4 || parseFloat(n4) <= 0) { 
        document.getElementById("numero4").focus(); 
        return; 
    }

    const n5 = document.getElementById("numero5").value.trim();
    if (!n5 || parseFloat(n5) <= 0) { 
        document.getElementById("numero5").focus(); 
        return; 
    }

    const n6 = document.getElementById("lista").value.trim();
    if (!n6 || parseFloat(n6) <= 0) { 
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
    const num3 = parseFloat(document.getElementById('numero3').value) || 0;
    const num4 = parseFloat(document.getElementById('numero4').value) || 0;
    const num5 = parseFloat(document.getElementById('numero5').value) || 0;
    const num6 = parseFloat(document.getElementById('lista').value) || 0;

    // Mostrar contenedores de resultados
    document.querySelector('.input-grupo1').style.display = 'none';
    document.querySelector('.input-grupo2').style.display = 'block';
    document.querySelector('.input-grupo3').style.display = 'flex';

    // Cálculos
    const salini = num1 - num2;
    const salinteres = (((salini * 0.04) * num6) + salini);
    const salcontado = (((salini * 0.04) * num5) + salini) - num4;
    const valtotmot = (num2 + salinteres);
    const descaplicado = (num2 + salinteres) - (num2 + num4 + salcontado);
    const val = (valtotmot - descaplicado);

    //const descuento = salinteres === 0 ? 100 : ((salinteres - salcontado) / salinteres * 100);

    // Actualizar labels
    document.getElementById("lblpreciomot").textContent = "- Precio de la motocicleta $" + num1.toFixed(2);
    document.getElementById("lblprima").textContent = "- Prima de la motocicleta $" + num2.toFixed(2);
    document.getElementById("lblsalini").textContent = "- Saldo inicial $" + salini.toFixed(2);
    document.getElementById("lblmonmen").textContent = "- Cuota mensual por (" + num6 + " meses) " + "$" + num3.toFixed(2);
    document.getElementById("lblmonpag").textContent = "- Monto total abonado a la fecha $" + num4.toFixed(2);
    //document.getElementById("lblsalres").textContent = "- Saldo + intereses en (" + num6 + " meses) $" + salinteres.toFixed(2);
    document.getElementById("lblsalpag").textContent = "- Saldo a pagar de contado:";
    document.getElementById("lbltotpagar").textContent = "$" + salcontado.toFixed(2);
    document.getElementById("lblvaltotmot").textContent = "- Valor de la motocicleta en " + "(" + num6 + " meses) $" + valtotmot.toFixed(2);
    document.getElementById("lbldesapli").textContent = "- Descuento aplicado en " + "(" + num5 + " meses) $" + descaplicado.toFixed(2);
    document.getElementById("lblvaltotcliente").textContent = "- Valor total cancelado por el cliente $" + val.toFixed(2);
    
    

    // Ajuste de padding
    document.body.style.padding = "1rem";
}