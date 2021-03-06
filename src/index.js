// 静态导入
// import _ from 'lodash'
// 引入css文件的方式
import './style.css'
// 引入图片资源
import Icon from './icon_yifabu.png'

//引入另一个nodejs模块
import printMe from './print'

import {cube} from './math'


//检查node当前环境
if(process.env.NODE_ENV !== 'production') {
  console.log('looks like we are in development mode!')
}

// function component() {
//   let element = document.createElement('div')

//   // element.innerHTML = _.join(['hello', 'jon','你好','世界6'], ' ')

//   element.innerHTML = ['Hello','webpack','5 cube is equal to '+ cube(5)].join('\n\n')

//   //添加样式,.hello这个类被自动全局引入了
//   element.classList.add('hello')

//   //使用图片
//   let myIcon = new Image()
//   myIcon.src = Icon
//   element.appendChild(myIcon)


//   //添加按钮
//   let btn = document.createElement('button')
//   btn.innerHTML = 'click me and check the console'
//   btn.onclick = printMe
//   element.appendChild(btn)


//   return element
// }

// document.body.appendChild(component())

//动态导入的方式
//返回的还是一个promise对象
function getComponent(){
  //这种看似注解的方式,可以将分包打成需要的名字
   return import(/* webpackChunkName:'lodash'*/ 'lodash')
   .then(_ => {
    let element = document.createElement('div')
    element.innerHTML = _.join(['Hello','webpack'],' ')
    return element
   })
   .catch(err => 'An error occurred while loading the component')
}
getComponent().then(component => document.body.appendChild(component))



if(module.hot) {
  module.hot.accept('./print.js',function(){
    console.log('Accepting the updated printMe module!')
    printMe()
  })
}