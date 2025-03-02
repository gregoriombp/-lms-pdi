document.addEventListener("DOMContentLoaded", () => {
    const tooltipTitles = {
        "door1": "Eixo 1",
        "door2": "Eixo 2",
        "door3": "Eixo 3",
        "door4": "Eixo 4",
        "door5": "Eixo 5",
        "door6": "Eixo 6",
        "salaconferencia": "Sala de Conferência",
        "espaco360": "Café ConSaber",
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
            
            const container = document.querySelector('.containerhome');
            const containerRect = container.getBoundingClientRect();
            const offset = 5;
            
            // Calcula a posição relativa ao container
            const relativeX = e.clientX - containerRect.left;
            const relativeY = e.clientY - containerRect.top;
            
            tooltip.style.left = `${containerRect.left + relativeX + offset}px`;
            tooltip.style.top = `${containerRect.top + relativeY + offset}px`;
        });

        area.addEventListener("mouseout", () => {
            tooltip.style.display = "none";
        });

        area.addEventListener("click", () => {
            if (area.id === "door1") {
                window.location.href = "student-eixo1.html";
            } else if (area.id === "door2") {
                window.location.href = "student-eixo2.html";
            } else if (area.id === "door3") {
                window.location.href = "student-eixo3.html";
            } else if (area.id === "door4") {
                window.location.href = "student-eixo4.html";
            } else if (area.id === "door5") {
                window.location.href = "student-eixo5.html";
            } else if (area.id === "door6") {
                window.location.href = "student-eixo6.html";
            } else if (area.id === "salaconferencia") {
                window.location.href = "student-sala-de-conferencias.html";
            } else if (area.id === "espaco360") {
                window.location.href = "student-sala-cafe-consaber.html";
            } else if (area.id === "character") {
                return;
            }
        });
    });
});