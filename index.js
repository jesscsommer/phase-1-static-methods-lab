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
    const title = []
    for (let word in allWords) {
      if (bannedWords.includes(word) === false){
          word.capitalize
          title.push(word)
      } else {
        title.push(word)
      }
    } 
    return title.join(' ')
  }
}