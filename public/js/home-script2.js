document.addEventListener("DOMContentLoaded", () => {
    const tooltipTitles = {
        "door1": "Eixo 1",
        "door2": "Eixo 2",
        "door3": "Eixo 3",
        "door4": "Eixo 4",
        "door5": "Eixo 5",
        "door6": "Eixo 6",
        "salaconferencia": "Sala de Conferência",
        "espaco360": "Espaço 360",
    };

    // Criar o elemento tooltip uma única vez
    const tooltip = document.createElement("div");
    tooltip.className = "custom-tooltip";
    document.body.appendChild(tooltip);

    document.querySelectorAll(".interactive-area").forEach((area) => {
        // Adicionar eventos de mouse
        area.addEventListener("mousemove", (e) => {
            const title = tooltipTitles[area.id] || "Área Interativa";
            tooltip.textContent = title;
            tooltip.style.display = "block";
            tooltip.style.left = e.pageX + 10 + "px";
            tooltip.style.top = e.pageY + 10 + "px";
        });

        area.addEventListener("mouseout", () => {
            tooltip.style.display = "none";
        });

        area.addEventListener("click", () => {
            if (area.id === "door1") {
                window.location.href = "student-eixo1.html";
            } else if (area.id === "door2") {
                window.location.href = "student-eixo1.html";
            } else if (area.id === "door3") {
                window.location.href = "student-eixo1.html";
            } else if (area.id === "door4") {
                window.location.href = "student-eixo1.html";
            } else if (area.id === "door5") {
                window.location.href = "student-eixo1.html";
            } else if (area.id === "door6") {
                window.location.href = "student-eixo1.html";
            } else if (area.id === "salaconferencia") {
                window.location.href = "#";
            } else if (area.id === "espaco360") {
                window.location.href = "#";
            } else if (area.id === "character") {
                return;
            }
        });
    });
});