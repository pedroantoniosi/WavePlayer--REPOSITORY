
export class downloadComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="download__ct pdef" id="downloads">
            <div class="container w-100">
                <h2 class="title mb-4"><span class="gradient-text">Baixe o</span> Wave MP3</h2>
                <div class="row-lg justify-evenly gap-2 w-100">
                    <div class="col">
                        <h3 class="sub__title mb-1">Windows</h3>
                        <ul class="list__ct col gap-05">
                            <li class="list__ct--item">Wave para<a href="" class="list__link ms-05">Windows 64bits</a></li>
                            <li class="list__ct--item">Wave para<a href="" class="list__link ms-05">Windows 32bits</a></li>
                            <li class="list__ct--item">Wave para<a href="" class="list__link ms-05">Microsoft Store</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h3 class="sub__title mb-1">GNU/LINUX</h3>
                        <ul class="list__ct col gap-05">
                            <li class="list__ct--item">Wave para<a href="" class="list__link ms-05">Debian GNU/Linux</a></li>
                            <li class="list__ct--item">Wave para<a href="" class="list__link ms-05">Ubuntu Linux</a></li>
                            <li class="list__ct--item">Wave para<a href="" class="list__link ms-05">Mint Linux</a></li>
                            <li class="list__ct--item">Wave para<a href="" class="list__link ms-05">Gentoo Linux</a></li>
                            <li class="list__ct--item">Wave para<a href="" class="list__link ms-05">Arch Linux</a></li>
                            <li class="list__ct--item">Wave para<a href="" class="list__link ms-05">Fedora Linux</a></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h3 class="sub__title mb-1">Other Systems</h3>
                        <ul class="list__ct col gap-05">
                            <li class="list__ct--item">Wave para<a href="" class="list__link ms-05">Chrome OS</a></li>
                            <li class="list__ct--item">Wave para<a href="" class="list__link ms-05">FreeBSD</a></li>
                            <li class="list__ct--item">Wave para<a href="" class="list__link ms-05">NetBSD</a></li>
                            <li class="list__ct--item">Wave para<a href="" class="list__link ms-05">OpenBSD</a></li>
                            <li class="list__ct--item">Wave para<a href="" class="list__link ms-05">Solaris</a></li>
                            <li class="list__ct--item">Wave para<a href="" class="list__link ms-05">QNX</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('download-component', downloadComponent);
