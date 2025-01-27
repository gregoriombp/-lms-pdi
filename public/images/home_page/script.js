// Adicionando animação no hover
document.querySelectorAll(".door, .character").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      // Efeito de brilho + glow
      gsap.to(element, {
        duration: 0.3,
        filter: "brightness(1.3) drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))"
      });
    });
  
    element.addEventListener("mouseleave", () => {
      // Remove o brilho + glow
      gsap.to(element, {
        duration: 0.3,
        filter: "brightness(1) drop-shadow(0 0 0 rgba(0, 0, 0, 0))"
      });
    });
  
    // Redirecionamento no clique
    element.addEventListener("click", () => {
      if (element.id === "door1") {
        window.location.href = "pagina-eixo1.html";
      } else if (element.id === "door2") {
        window.location.href = "pagina-eixo2.html";
      } else if (element.id === "door3") {
        window.location.href = "pagina-eixo3.html";
      } else if (element.id === "door4") {
        window.location.href = "pagina-eixo4.html";
      } else if (element.id === "door5") {
        window.location.href = "pagina-eixo5.html";
      } else if (element.id === "door6") {
        window.location.href = "pagina-eixo6.html";
      } else if (element.id === "character") {
        window.location.href = "pagina-acolhimento.html";
      }
    });
  });
  