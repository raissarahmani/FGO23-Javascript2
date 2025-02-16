function transformSentence(sentence) {
    if(typeof sentence !== 'string') return
    sortCapitalSentence = sentence.split(" ").sort().reverse().map((el) => el.toUpperCase())
    arrSentence = sortCapitalSentence
    addSentence = arrSentence.push("FAZZTRACK")
    finalSentence = arrSentence.reverse().join(" ")
    console.log(finalSentence)
}
transformSentence("saya gemar membaca")