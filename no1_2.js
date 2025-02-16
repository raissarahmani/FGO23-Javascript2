let movie = {
    id: 1,
    title: "Spiderman",
    image: "spiderman.jpg",
    genre: ["action", "sci-fi", "drama"],
    cast: [
        {
            name: "Tom Holland",
            role: "Peter Parker",
        },
        {
            name: "Zendaya",
            role: "MJ",
        },
        {
            name: "Robert Downey Jr",
            role: "Iron Man"
        }
    ],
    getTitleImageGenre: function() {
        console.log(`Title: ${this.title}`)
        console.log(`Image: ${this.image}`)
        console.log(`Genre: ${this.genre}`)
    },
    getCast: function() {
        this.cast.sort((a,b) => a.name > b.name ? 1 : (a.name < b.name ? -1 : 0))
        this.cast.forEach(actor => {
            console.log(`Cast name: ${actor.name}, Role: ${actor.role}`)
        })
    },
    changeTitle: function(newTitle) {
        if(typeof newTitle !== 'string') return
        this.title = newTitle
    },
    changeImage: function(newImage) {
        if(typeof newImage !== 'string') return
        this.image = newImage
    },
}

movie.getTitleImageGenre()
movie.getCast()
movie.changeTitle("Avenger")
movie.changeImage("avenger.jpg")
movie.getTitleImageGenre()