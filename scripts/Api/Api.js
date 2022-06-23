class Api {
    constructor(url) {
        //api url
        this._url = url
    }

    //get data by api url
    async get() {
        return  fetch(this._url).
                then(response => response.json()).
                catch(error => console.log('an error occurs', error))
    }
}

class PhotographerApi extends Api {
    constructor(url) {
        //photographer api url
        super(url)
    }

    //get photographer data
    async getPhotographers() {
        return this.get()
    }
}

class MediaApi extends Api {
    constructor(url) {
        //media api url
        super(url)
    }

    //get media data
    async getMedias() {
        return this.get()
    }
}