import config from '../config'

const underline = (text: string): string => {
    const { start, end } = config.underline
    return text.replace(new RegExp(`${start}(.*?)${end}`, 'g'), '<u>$1</u>')
}

export default underline