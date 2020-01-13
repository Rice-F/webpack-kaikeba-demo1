import a from './a'
import b from './b'

b()
a()

if(module.hot) {
    module.hot.accept('./a',() => {
        document.body.removeChild(document.getElementById('number'))
        //重新执行一下这个模块的函数
        a()
    })
}