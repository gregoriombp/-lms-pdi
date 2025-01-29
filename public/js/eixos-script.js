document.addEventListener("DOMContentLoaded", () => {
    const tooltipTitles = {
        "disciplina1": "Disciplina 1",
        "disciplina2": "Disciplina 2",
        "estudodecaso": "Estudo de Caso",
        "salaconferenciaseixo1": "Sala de Conferências",
    };

    // Criar o elemento tooltip uma única vez
    const tooltip = document.createElement("div");
    tooltip.className = "custom-tooltip";
    document.body.appendChild(tooltip);

    // Mudando o seletor para pegar apenas .interactive-area
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
            if (area.id === "disciplina1") {
                window.location.href = "student-take-a-video.html";
            } else if (area.id === "disciplina2") {
                window.location.href = "student-take-a-quiz-alert.html";
            } else if (area.id === "estudodecaso") {
                window.location.href = "student-mesa-redonda.html";
            } else if (area.id === "salaconferenciaseixo1") {
                window.location.href = "student-palestras.html";
            }
        });
    });
});