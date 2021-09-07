import { codeMetrics } from "./codeMetrics.js"
import fs from 'fs'

const snippet = fs.readFileSync('fileToImport.js').toString()
const snippetTwo = fs.readFileSync('fileToImport2.js').toString()

const codeAnalyzer = new codeMetrics(snippetTwo)

console.log('Number of lines:', codeAnalyzer.countNewlines())
console.log('Number of white lines:', codeAnalyzer.countWhitelines())
console.log('Number of lines with no white lines:', codeAnalyzer.countNewlinesNoWhitelines())