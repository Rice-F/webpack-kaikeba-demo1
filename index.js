import a from './a'
import b from './b'
import img from './imgs/1024.jpeg'

// console.log(img)      // 打包后的文件路径
var packImg = new Image()
packImg.src = img

var root = document.querySelector('#root');
root.append(packImg)

a();
b();

function test () {
    console.log('webpack demo1 test')
}
test ();