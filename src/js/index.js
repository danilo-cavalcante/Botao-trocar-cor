const button = document.getElementById('trocar-cor');
const mudarCor = document.getElementById('mudar-bg')

button.addEventListener('click', ()=> {
    mudarCor.classList.remove('cor1');
    mudarCor.classList.add('cor3');
});