export class interfaceComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
         <section class="interface__ct">
        <div class="container py-2">
            <div class="row-md row-reverse gap-2 ">
            <div class="wrapper col justify-center">
                    <h2 class="title text-uppercase mb-2">Spendesk interface</h2>
                  <div class="caption col align-center">
                <p class="check-ico row align-center gap-05"><i class="bi bi-check"></i><span>Ways to use Spendesk</span></p>
                <p class="check-ico row align-center gap-05"><i class="bi bi-check"></i><span>Industries we serve</span></p>
                <p class="check-ico row align-center gap-05"><i class="bi bi-check"></i><span>Our Plataforms</span></p>
                </div>
            </div>
               <div class="wrapper">
        <img src="./assets/img/interface/mainscreen.png" alt="">
    </div>
            </div>
        </div>
        </section>
        `;
    }
}

customElements.define('interface-component', interfaceComponent);
