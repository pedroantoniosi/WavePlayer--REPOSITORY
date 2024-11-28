function createFeaturesTemplate(){
    return `
            <section class="features__ct pdef">
            <div class="parent container">
                <div class="div1 card col justify-start">
                    <h2 class="title text-center">User-Friendly and Customizable Interface</h2>
                </div>
                <div class="div2 card col justify-end">
                    <h2 class="title mb-1">Support for Multiple Audio Formats</h2>
                    <p class="text">In addition to media, the software could highlight support for various popular formats (como FLAC, WAV, AAC, etc.), giving users flexibility with different audio file types.</p>
                </div>
                <div class="div3 card col justify-end">
                    <h3 class="title">Advanced Library Management and Search Features</h3>
                    <p class="text mt-auto">Tools for organizing music collections, such as automatic playlists, fast search, tags, and smart playback modes (e.g., shuffle, genre-based, or artist-based), providing a more personalized and efficient listening experience.</p>
                </div>
            </div>
        </section>
    `
}

function renderFeaturesComponent(){
    const featuresTags = document.querySelectorAll('featuresComponent')

    featuresTags.forEach((featuresTag => {
        const featuresComponent = document.createElement('section')
        featuresComponent.classList.add('features-container')
        featuresComponent.innerHTML = createFeaturesTemplate()
        featuresTag.replaceWith(featuresComponent);
    }))
}renderFeaturesComponent()