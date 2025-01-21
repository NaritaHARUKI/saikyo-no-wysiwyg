import config from '../config'

const bold = (text: string) => {
  const { start, end } = config.bold
  return text.replace(new RegExp(`${start}(.*?)${end}`, 'g'), '<b>$1</b>')
}

export default bold
