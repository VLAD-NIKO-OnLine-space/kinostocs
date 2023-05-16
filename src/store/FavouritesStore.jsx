import { makeAutoObservable } from "mobx";



class FavouritesStore {

    listFavourites = []
    ids = []

    constructor() {
        makeAutoObservable(this)
    }
    pushFilms(item) {
        this.listFavourites.push(item)
    }
    pushIds(id) {
        this.ids.push(id)
    }
    deliteItem(id) {
        this.ids = this.ids.filter(e => e !== id)
        this.listFavourites = this.listFavourites.filter(e => e.filmId !== id)  
    }
    delAll(){
        this.ids = []
        this.listFavourites = []
    }
}



export default new FavouritesStore()