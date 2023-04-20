class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  static titleize(string){
    const bannedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const allWords = string.split(' ')
    const title = [Formatter.capitalize(allWords[0])]
    allWords.slice(1).forEach(word => {
      if (bannedWords.includes(word)){
        title.push(word)
      } else {
        title.push(Formatter.capitalize(word))
      }
    })
    return title.join(' ')
  }
}

