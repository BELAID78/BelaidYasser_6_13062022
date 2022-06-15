class Index {
    constructor() {
        this.$photographerWrapper   = document.querySelector(".photographer_section");
        this.photographerApi        = new PhotographerApi('data/photographers.json')
    }

    async main() {
        const photographerData = await this.photographerApi.getPhotographers();

        const photographers = await photographerData.photographers.map(photographer => new Photographer(photographer));

        photographers.map(photographer => {
            const photographerCard = new PhotographerCard(photographer).createPhotographerCard()
            this.$photographerWrapper.appendChild(photographerCard)
        })
    }
}

const index = new Index()

index.main();