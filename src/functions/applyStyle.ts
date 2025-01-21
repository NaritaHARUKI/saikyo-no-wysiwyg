import bold from './bold'
import color from './color'
import italic from './italic'

const applyStyle = (text: string): string => {
  let parsedText = text

  parsedText = bold(parsedText)
  parsedText = color(parsedText)
  parsedText = italic(parsedText)

  return parsedText
}

export default applyStyle
