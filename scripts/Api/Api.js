class Api {
    constructor(url) {
        this._url = url
    }

    async get() {
        return  fetch(this._url).
                then(response => response.json()).
                catch(error => console.log('an error occurs', error))
    }
}

class PhotographerApi extends Api {
    constructor(url) {
        super(url)
    }

    async getPhotographers() {
        return this.get()
    }
}

class MediaApi extends Api {
    constructor(url) {
        super(url)
    }

    async getMedias() {
        return this.get()
    }
}