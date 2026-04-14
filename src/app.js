export function saludar(nombre) {
    return `Hola, ${nombre}!, bienvenido a mi aplicación Alejandro 1.0.0`;
}

export function despedir(nombre) {
    return `Hasta pronto, ${nombre}!, ¡gracias por usar mi aplicación!`;
}

export function estadoSistema() {
    return { 
        estado: "activo", 
        version: "1.0.0",
        message: "El sistema está funcionando correctamente."
    };
}

export function sumar(a, b) {
    return a + b;
}

export function restar(a, b) {
    return a - b;
}

export function multiplicar(a, b) {
    return a * b;    
}