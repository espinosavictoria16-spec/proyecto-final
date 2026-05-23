const mensaje = document.getElementById("mensaje");

const hora = new Date().getHours();

if (hora < 12) {
    mensaje.textContent = "Buenos días, bienvenido al sitio";
} else if (hora < 18) {
    mensaje.textContent = "Buenas tardes, disfruta del contenido";
} else {
    mensaje.textContent = "Buenas noches, gracias por visitar";
}
