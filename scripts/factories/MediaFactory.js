class MediaFactory {
    constructor(data, photographerName) {
        if(data._image != undefined) {
            return new ImageMedia(data, photographerName)
        }else{
            return new VideoMedia(data, photographerName)
        }
    }
} 