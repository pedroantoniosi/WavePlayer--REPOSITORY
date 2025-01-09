export class aboutComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="about__ct d-grid place-center pdef">
            <div class="container row-xl justify-center gap-4">
                <div class="caption col gap-2 justify-center">
                    <h2 class="title py-1">welcome to wave media player</h2>
                    <p class="text">O Wave é um media player revolucionário que combina design elegante, qualidade de som excepcional e recursos avançados para oferecer uma experiência musical incomparável.</p>
                    <p class="text">Com sua interface intuitiva e fácil de usar, você pode levar sua música favorita para onde quer que vá, desfrutando de uma qualidade de áudio cristalina. O Wave é o companheiro perfeito para suas aventuras diárias, proporcionando uma trilha sonora imersiva e envolvente em todos os momentos</p>
                </div>
                <div class="cards grid-2-md gap-1">
                    <div class="card col gap-1">
                        <h2 class="text-center">UX/UI Design</h2>
                        <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda error consectetur tempora.</p>
                    </div>
                    <div class="card col gap-1">
                        <h2 class="text-center">UX/UI Design</h2>
                        <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda error consectetur tempora.</p>
                    </div>
                    <div class="card col gap-1">
                        <h2 class="text-center">UX/UI Design</h2>
                        <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda error consectetur tempora.</p>
                    </div>
                    <div class="card col gap-1">
                        <h2 class="text-center">UX/UI Design</h2>
                        <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda error consectetur tempora.</p>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('about-component', aboutComponent);
