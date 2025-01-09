export class donateComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <section class="donate-ct py-2">
        <div class="container col gap-4 justify-center">
                   <h2 class="title text-center">
                <span class="gradient-text text-capitalize">Donate</span> and <span class="gradient-text text-capitalize">contribute</span><br>to support us
            </h2>
            <div class="row m-auto"><img src="./assets/img/apps/gofundme.png" alt="" style="max-width: 300px;"></div>
            <a href="https://www.gofundme.com/" class="btn-download m-auto">Donate Now</a>
        </section>
        </div>
        `;
    }
}

customElements.define('donate-component', donateComponent);
