function editString(text) {
    if(typeof text !== 'string') return
    spellString = text.split("").join("-").toUpperCase()
    console.log(spellString)
}
editString("Fazztrack")
