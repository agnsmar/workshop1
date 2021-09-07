export class codeMetrics {
  constructor(codeToAnalyze) {
    this.codeToAnalyze = codeToAnalyze
  }

  countNewlines() {
    // console.log('before', this.codeToAnalyze)
    const newlineCount = this.codeToAnalyze.split(/\n/).length

    console.log('newline count:', newlineCount)

  }

  countNewlinesNoWhitespace() {
    const whitespace = this.codeToAnalyze.split(/(?:[\t ]*(?:\r?\n|\r))+/).length
    
    console.log('whitespace count:', whitespace)
  }
}