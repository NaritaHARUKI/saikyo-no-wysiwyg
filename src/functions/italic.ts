import config from '../config'

const italic = (text: string): string => {
  const { start, end } = config.italic
  return text.replace(new RegExp(`${start}(.*?)${end}`, 'g'), '<i>$1</i>')
}

export default italic
