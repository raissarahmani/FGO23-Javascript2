function transformSentence(sentence) {
    if(typeof sentence !== 'string') return
    // 4a
    sortSentence = sentence.split(" ").sort().reverse()
    console.log(sortSentence)
    // 4b
    capitalizeSentence = sortSentence.map((el) => el.toUpperCase)
    console.log(capitalizeSentence)
    // 4c
    arrSentence = sortSentence
    addSentence = arrSentence.push("FAZZTRACK")
    console.log(arrSentence)
    // 4d
    reverseSentence = arrSentence.reverse()
    console.log(reverseSentence)
    // 4e
    strSentence = reverseSentence.join(" ")
    console.log(strSentence)
}
transformSentence("saya gemar membaca")