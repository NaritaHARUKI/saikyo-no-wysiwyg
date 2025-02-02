import config from "../config";

const list = (text: string): string => {
  const { start, end } = config.list;
  const parsedText = text.split('\n');

  let isEditingUl = false;
  for (let i = 0; i < parsedText.length; i++) {
    // <ul> タグの開始
    if (parsedText[i].includes(start) && !isEditingUl) {
      parsedText[i] = '<ul>';
      isEditingUl = true;
    }

    // </ul> タグの終了
    if (parsedText[i].includes(end) && isEditingUl) {
      parsedText[i] = '</ul>';
      isEditingUl = false;
    }

    // <li> タグを追加
    if (isEditingUl && parsedText[i] !== start && parsedText[i] !== end && parsedText[i] !== '<ul>' && parsedText[i] !== '</ul>') {
      parsedText[i] = `<li>${parsedText[i]}</li>`;
    } else {
      // それ以外は改行を追加
      parsedText[i] = `${parsedText[i]}\n`;
    }
  }

  return parsedText.join('');
};

export default list;
