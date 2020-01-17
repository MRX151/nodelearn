import _ from 'lodash'
// 引入css文件的方式
import './style.css'
// 引入图片资源
import Icon from './icon_yifabu.png'

//引入另一个nodejs模块
import printMe from './print'

function component() {
  let element = document.createElement('div')

  element.innerHTML = _.join(['hello', 'jon','你好','世界5'], ' ')
  //添加样式,.hello这个类被自动全局引入了
  element.classList.add('hello')

  //使用图片
  let myIcon = new Image()
  myIcon.src = Icon
  element.appendChild(myIcon)


  //添加按钮
  let btn = document.createElement('button')
  btn.innerHTML = 'click me and check the console'
  btn.onclick = printMe
  element.appendChild(btn)


  return element
}

document.body.appendChild(component())
