class Index {

    //init home page
    constructor() {

        //photographers container
        this.$photographerWrapper   = document.querySelector(".photographer_section");

        //photgraphers API
        this.photographerApi        = new PhotographerApi('data/photographers.json')
    }

    //get the photographers data and create it's card
    async main() {

        //get photographsers data
        const photographerData = await this.photographerApi.getPhotographers();

        //create photographers data using constructor design pattern
        const photographers = await photographerData.photographers.map(photographer => new Photographer(photographer));

        //loop for every photographer to create it's card
        photographers.map((photographer, tab) => {
            
            //create photographer card
            const photographerCard = new PhotographerCard(photographer).createPhotographerCard(tab + 1)

            //append the photographer card to photographers container
            this.$photographerWrapper.appendChild(photographerCard)
        })
    }
}

//create new home page
const index = new Index()

//create home page content
index.main();