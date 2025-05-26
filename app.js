document.addEventListener('DOMContentLoaded', () => {
    const barraPesquisa = document.getElementById('barra-pesquisa');
    const impressoras = document.querySelectorAll('.impressoras');

    barraPesquisa.addEventListener('input', () => {
        const termo = barraPesquisa.value.toLowerCase();

        impressoras.forEach(div => {
            const nomeImpressora = div.querySelector('.nome').textContent.toLowerCase();

            if (nomeImpressora.includes(termo)) {
                div.style.display = 'flex'; // ou 'block' dependendo do seu CSS
            } else {
                div.style.display = 'none';
            }
        });
    });
});