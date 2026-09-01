// ===== MENÚ PARA CELULAR =====

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


// Cerrar el menú después de seleccionar una opción

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .querySelector(".nav-links")
            .classList.remove("active");

    });

});


// ===== FORMULARIO =====

function enviarFormulario(event) {

    event.preventDefault();

    const nombre =
        document.getElementById("nombre").value;

    const respuesta =
        document.getElementById("respuesta");

    respuesta.textContent =
        `✓ Gracias ${nombre}. Tu mensaje fue recibido correctamente.`;

    document.querySelector("form").reset();

}


// ===== EFECTO DE TERMINAL =====

const terminalLines = [

    "$ iniciar_cybershield",

    "[✓] Sistema iniciado",

    "[✓] Firewall activo",

    "[✓] Red protegida",

    "[!] Escaneando amenazas..."

];


function escribirTerminal() {

    const terminal =
        document.querySelector(".terminal-body");

    if (!terminal) return;

    terminal.innerHTML = "";


    terminalLines.forEach((line, index) => {

        const p =
            document.createElement("p");

        p.textContent = line;


        if (index > 0 && index < 4) {

            p.className = "green";

        }


        if (index === 4) {

            p.className = "yellow";

        }


        terminal.appendChild(p);

    });


    const cursor =
        document.createElement("p");

    cursor.textContent = "█";

    terminal.appendChild(cursor);

}


escribirTerminal();
