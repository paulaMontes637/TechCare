document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica del Acordeón Principal
    const headers = document.querySelectorAll('.acordeon-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isOpen = item.classList.contains('active');

            // Cierra los demás antes de abrir el nuevo
            document.querySelectorAll('.acordeon-item').forEach(i => i.classList.remove('active'));

            if (!isOpen) {
                item.classList.add('active');
            }
        });
    });

    // 2. Lógica para los Mensajes Positivos (Segundo Nivel)
    const botonesRevelar = document.querySelectorAll('.btn-revelar');
    botonesRevelar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            // Evitamos que el clic cierre el acordeón si fuera necesario
            e.stopPropagation(); 
            
            const mensaje = boton.nextElementSibling;
            mensaje.classList.toggle('show');

            // Cambiamos el texto del botón según el estado
            if (mensaje.classList.contains('show')) {
                boton.textContent = "Ocultar mensaje";
            } else {
                boton.textContent = "✨ Ver mensaje positivo";
            }
        });
    });
});