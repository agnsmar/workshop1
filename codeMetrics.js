export class codeMetrics {
  constructor(codeToAnalyze) {
    this.codeToAnalyze = codeToAnalyze
  }

  matcher(str, regex) {
    return str.match(regex)
  }

  countNewlines() {
    const newlineCount = this.codeToAnalyze.split(/\n/).length

    return newlineCount
  }

  countNewlinesNoWhitelines() {
    return this.countNewlines() - this.countWhitelines()
  }

  countWhitelines() {
    let regexExample = /[\r\n]+/g
    const whiteLineArray = []

    const whiteCount = this.matcher(this.codeToAnalyze, regexExample)

    for (let i = 0; i < whiteCount.length; i++) {
      if (whiteCount[i] === '\r\n\r\n') {
        whiteLineArray.push(whiteCount[i])
      }
    }

    return whiteLineArray.length
  }
}