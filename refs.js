document.addEventListener("DOMContentLoaded", () => {
    let lista = document.getElementById("listaRefs");

    const referencias = [
        "Android Developers. (2024). Arquitectura de Android.",
        "Apple. (2024). iOS Human Interface Guidelines.",
        "Google. (2024). Material Design 3 Documentation.",
        "W3Schools. (2024). PWA and web storage tutorial.",
        "Mozilla. (2024). Web APIs for mobile devices.",
        "Oracle Academy. (2024). Curso de Programación orientada a objetos.",
        "Microsoft Azure. (2024). Cloud services for mobile apps."
    ];

    referencias.forEach(r => {
        lista.innerHTML += `<li>${r}</li>`;
    });
});
