const doors = document.querySelectorAll('.door');
const containerhome = document.querySelector('.containerhome');

doors.forEach(door => {
    door.addEventListener('mouseover', () => {
        // Remover 'dimmed' de todas as portas
        doors.forEach(d => d.classList.remove('dimmed'));

        // Adicionar 'dimmed' a todas as portas, exceto a atual
        doors.forEach(d => {
            if (d !== door) {
                d.classList.add('dimmed');
            }
        });

        // Aplicar filtro de brilho e contraste ao pseudo-elemento do containerhome
        containerhome.classList.add('highlighted');
    });

    door.addEventListener('mouseout', () => {
        // Remover 'dimmed' de todas as portas quando o mouse sair de todas elas
        doors.forEach(d => d.classList.remove('dimmed'));

        // Remover filtro do pseudo-elemento do containerhome
        containerhome.classList.remove('highlighted');
    });

    door.addEventListener('click', () => {
        const link = door.dataset.href;
        if (link) {
            window.location.href = link;
        }
    });
});

// Animação do personagem (opcional)
const character = document.querySelector('.character');
character.addEventListener('mouseover', () => {
    character.style.transform = 'translateX(-5px)';
});

character.addEventListener('mouseout', () => {
    character.style.transform = 'translateX(0)';
});