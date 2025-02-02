import config from '../config'

const color = (text: string): string => {
  const configColor = config.color

  let modifiedText = text;
  for (const [colorKey, { start, end }] of Object.entries(configColor)) {
    const regex = new RegExp(`${start}(.*?)${end}`, 'g')
    modifiedText = modifiedText.replace(regex, `<span style="color: ${colorKey}">$1</span>`)
  }
  return modifiedText
}

export default color
