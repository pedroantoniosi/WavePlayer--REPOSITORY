// Cria o componente HTML
function createInterfaceTemplate() {
    return `
         <div class="interface__ct pdef  d-grid place-center justify-center align-center">
            <div class="container gap-2">
                <div class="col-lg justify-between gap-2 align-center">
                    <div class="caption">
                        <h2 class="title text-center text-uppercase">Redisgned Interface</h2>
                    </div>
                    <div class="row m-auto">
                        <a href="" target="_blank" rel="noreferrer">
                            <picture class="responsive-picture">
                                <source srcset="./assets/img/program/desktop.jpg" media="(min-width: 1024px)">
                                <source srcset="./assets/img/program/tablet.webp" media="(min-width: 769px) and (max-width: 1023px)">
                                <img src="./assets/img/program/mobile.webp" alt="Imagem de homem usando o iFood Benefícios no celular" style="border-radius: 1rem;">
                            </picture>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Renderiaza o compoente HTML dentro da TAG
function renderInterfaceComponent() {
    const InterfaceTags = document.querySelectorAll('InterfaceComponent');

    // Itera sobre cada <InterfaceComponent> encontrado
    InterfaceTags.forEach((InterfaceTag) => {
        // Cria o elemento e adiciona o HTML 
        const InterfaceComponent = document.createElement('section');
        InterfaceComponent.classList.add('Interface-container'); 
        InterfaceComponent.innerHTML = createInterfaceTemplate();

        // Substitui a tag original pelo componente renderizado
        InterfaceTag.replaceWith(InterfaceComponent);
    });
}

renderInterfaceComponent();
