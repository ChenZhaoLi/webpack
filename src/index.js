import _ from 'lodash'
import './style.css'
import Icon from './baidu_logo.png'
function component() {
  const element = document.createElement('div')
  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', '世界'], ' ')
  element.classList.add('hello')
  
    const myIcon = new Image()
    myIcon.src = Icon
    element.appendChild(myIcon)

  return element
}

document.body.appendChild(component())
