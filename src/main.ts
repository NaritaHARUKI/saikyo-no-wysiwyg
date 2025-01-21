import type { Config } from './Types'
import config from './config'
import applyStyle from './functions/applyStyle'

const inputField = document.getElementById('input') as HTMLTextAreaElement
const preview = document.getElementById('preview') as HTMLDivElement
const exampleList = document.getElementById('exampleList') as HTMLUListElement

if (inputField && preview) {
  inputField.addEventListener('input', () => {
    const styledText = applyStyle(inputField.value)
    preview.innerHTML = styledText
  })
}

if (exampleList) {
  for (const style in config) {
    if (style === 'color' && config.color) {
      for (const color in config.color) {
        const colorConfig = config.color[color]
        const example = document.createElement('li')
        example.textContent = `${color}(色): ${colorConfig.start}`
        exampleList.appendChild(example)
      }
      continue
    }

    const styleConfig = config[style as keyof Config]
    const example = document.createElement('li')
    example.textContent = `${style}: ${styleConfig.start}`
    exampleList.appendChild(example)
  }
}
