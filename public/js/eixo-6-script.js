document.addEventListener("DOMContentLoaded", () => {
    const tooltipTitles = {
        "disciplina1": "Disciplina 1",
        "disciplina2": "Disciplina 2",
        "disciplina3": "Disciplina 3",
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
            
            const container = document.querySelector('.containereixo1');
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
            if (area.id === "disciplina1" || area.id === "disciplina2" || area.id === "disciplina3") {
                modal.style.display = 'flex';
            } else if (area.id === "estudodecaso") {
                window.location.href = "student-mesa-redonda.html";
            } else if (area.id === "salaconferenciaseixo1") {
                window.location.href = "student-sala-de-conferencias.html";
            }
        });
    });

    const modal = document.getElementById('disciplinaModal');

    // Fechar modal quando clicar fora
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Função para lidar com os botões do modal
    window.acessarConteudo = function(tipo) {
        if (tipo === 'conteudo') {
            window.location.href = "student-embed-content-scrum.html";
        } else if (tipo === 'avaliacao') {
            window.location.href = "student-take-a-quiz-alert.html";
        }
        modal.style.display = 'none';
    };
});