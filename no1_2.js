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
    ],
    getTitleImageGenre: function() {
        console.log(`Title: ${this.title}`)
        console.log(`Image: ${this.image}`)
        console.log(`Genre: ${this.genre}`)
    },
    getCast: function() {
        console.log(`Cast: ${this.cast}`)
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