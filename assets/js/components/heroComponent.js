export class heroComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="hero__ct d-grid place-center">
            <div class="container">
                <div class="hero__ct--caption">
                    <h2 class="title  text-center">Wave Media Player</h2>
                    <p class="text text-center">Sinta a música pulsar em cada batida do som que você ama.</p>
                    <a href="#" class="btn-download m-auto"><i class="bi bi-windows mx-05"></i>Download For Windows</a>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('hero-component', heroComponent);
