import { codeMetrics } from "./codeMetrics.js"
import fs from 'fs'

const uglyString = 'test\n\n\n\n\ntesttest\n'
const snippet = fs.readFileSync('fileToImport.js').toString()


const codeAnalyzer = new codeMetrics(snippet)

codeAnalyzer.countNewlines()
codeAnalyzer.countNewlinesNoWhitespace()