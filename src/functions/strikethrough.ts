import config from '../config'

const strikethrough = (text: string): string => {
    const { start, end } = config.strikethrough
    return text.replace(new RegExp(`${start}(.*?)${end}`, 'g'), '<s>$1</s>')
}

export default strikethrough