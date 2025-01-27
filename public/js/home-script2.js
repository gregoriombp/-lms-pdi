document.addEventListener("DOMContentLoaded", () => {
    // Adicionar funcionalidade de clique para cada área interativa
    document.querySelectorAll(".interactive-area").forEach((area) => {
      area.addEventListener("click", () => {
        if (area.id === "door1") {
          window.location.href = "student-eixo1.html";
        } else if (area.id === "door2") {
          window.location.href = "pagina-eixo2.html";
        } else if (area.id === "door3") {
          window.location.href = "pagina-acolhimento.html";
        } else if (area.id === "character") {
          // Nenhuma ação será realizada para #character
          return;
        }
      });
    });
  });