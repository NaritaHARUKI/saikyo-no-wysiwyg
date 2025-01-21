import config from '../config'

const color = (text: string): string => {
  const configColor = config.color

  Object.keys(configColor).forEach((colorKey) => {
    const { start, end } = configColor[colorKey]
    const regex = new RegExp(`${start}(.*?)${end}`, 'g')
    text = text.replace(regex, `<span style="color: ${colorKey}">$1</span>`)
  })

  return text
}

export default color
