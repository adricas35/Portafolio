const formulario = document.querySelector('.info-contacto');
const telefono = '3102893100'; // Sin + ni espacios, ej: 573101234567

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita el envío normal del formulario

    let nombre = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let telefono = document.querySelector('#phone').value;
    let mensajeUsuario = document.querySelector('#message').value;

    // Construye el mensaje con los datos del formulario
    let mensaje = `¡Hola! Nuevo mensaje desde el formulario web:\n` +
        `Nombre: ${encodeURIComponent(nombre)}\n` +
        `Email: ${encodeURIComponent(email)}\n` +
        `Teléfono: ${encodeURIComponent(telefono)}\n` +
        `Mensaje: ${encodeURIComponent(mensajeUsuario)}`;


    const encodedMessage = encodeURIComponent(mensaje);

    // 4. Definir el número de teléfono de destino (ejemplo: 573181234567 para Colombia)
    const phoneNumber = '3102893100'; 

    // 5. Construir la URL de WhatsApp "clic para chatear"
    const whatsappURL = `http://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // 6. Redirigir al usuario a WhatsApp
    window.open(whatsappURL, '_blank');
    formulario.reset();
});