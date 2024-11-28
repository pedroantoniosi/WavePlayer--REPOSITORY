// Cria o componente HTML
function createHeroTemplate() {
    return `
        <div class="hero__ct d-grid place-center pdef">
            <div class="pdef">
                <div class="hero__ct--caption col gap-2 align-center">
                    <h2 class="title">Wave Media Player</h2>
                    <p class="text">Sinta a música pulsar em cada batida do som que você ama.</p>
                    <a href="#" class="btn-download">Download Now</a>
                </div>
            </div>
        </div>
    `;
}

// Renderiaza o compoente HTML dentro da TAG
function renderHeroComponent() {
    const heroTags = document.querySelectorAll('heroComponent');

    // Itera sobre cada <heroComponent> encontrado
    heroTags.forEach((heroTag) => {
        // Cria o elemento e adiciona o HTML 
        const heroComponent = document.createElement('section');
        heroComponent.classList.add('hero-container'); 
        heroComponent.innerHTML = createHeroTemplate();

        // Substitui a tag original pelo componente renderizado
        heroTag.replaceWith(heroComponent);
    });
}

renderHeroComponent();
