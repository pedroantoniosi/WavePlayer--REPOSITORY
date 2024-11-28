function createDonateTemplate(){
    return `
      <section class="donate_ct col gap-5 justify-center pdef" style="height: 100svh;">
            <h4 class="title text-center">
                <span class="gradient-text text-capitalize">Donate</span> and <span class="gradient-text text-capitalize">contribute</span><br>to support us
            </h4>
            <div class="row m-auto"><img src="./assets/img/apps/gofundme.png" alt="" style="max-width: 200px;"></div>
            <a href="" class="btn-download m-auto">Donate Now</a>
        </section>
    `
}

function renderDonateComponent(){
    const donateTags = document.querySelectorAll('donateComponent')
    donateTags.forEach((donateTag)=>{
    const donateComponent = document.createElement('section')
    donateComponent.classList.add('donate-container')
    donateComponent.innerHTML = createDonateTemplate()
    donateTag.replaceWith(donateComponent)
    })
}renderDonateComponent()