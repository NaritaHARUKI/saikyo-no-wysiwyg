import bold from './bold'
import color from './color'
import italic from './italic'
import list from './list'
import strikethrough from './strikethrough'
import underline from './underline'

const applyStyle = (text: string): string => {
  let parsedText = text

  parsedText = bold(parsedText)
  parsedText = color(parsedText)
  parsedText = italic(parsedText)
  parsedText = underline(parsedText)
  parsedText = strikethrough(parsedText)
  parsedText = list(parsedText)

  return parsedText
}

export default applyStyle
