import {saludar, despedir, estadoSistema, sumar, restar, multiplicar} from "../src/app.js";

function ejecutarPruebas() {
    let pasadas = 0;
    let fallidas = 0;

    const r1 = saludar("Alejandro");
    if (r1.includes("Alejandro")) {
        console.log("Test 1 pasado: función saludar funciona correctamente.");
        pasadas++;
    } else {
        console.log("Test 1 fallido: ", r1);
        fallidas++;
    }

    const actualEstado = estadoSistema();
    if (actualEstado.estado === "activo") {
        console.log("Test 2 pasado: función estadoSistema devuelve estado activo.");
        pasadas++;
    } else {
        console.log("Test 2 fallido: ", actualEstado, "En alejandro 1.0.0");
        fallidas++;
    }

    const resultadoSuma = sumar(5, 3);
    if (resultadoSuma === 8) {
        console.log("Test 3 pasado: función sumar calcula correctamente 5 + 3 = 8.");
        pasadas++;
    } else {
        console.log("Test 3 fallido: ", resultadoSuma, "debería ser 8");
        fallidas++;
    }
   
    const resultadorestar = restar(10, 4);
    if (resultadorestar === 6) {
        console.log("Test 4 pasado: función restar calcula correctamente 10 - 4 = 6.");
        pasadas++;
    } else {
        console.log("Test 4 fallido: ", resultadorestar, "debería ser 6");
        fallidas++;
    }
    const resultadoMultiplicar = multiplicar(2, 3);
    if (resultadoMultiplicar === 6) {
        console.log("Test 5 pasado: función multiplicar calcula correctamente 2 * 3 = 6");
        pasadas++;        
    }
    else {
        console.log("Test 5 fallido: ", resultadoMultiplicar, "debería ser 6");
        fallidas++;
    }
     console.log("\nResultados: ", pasadas, "pasadas, ", fallidas, "fallidas.");
    if (fallidas > 0) {
        process.exit(1);
    }
}

ejecutarPruebas();