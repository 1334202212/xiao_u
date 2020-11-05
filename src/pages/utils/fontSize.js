// rem  1rem = html的font-size   16px
// 根据屏幕的宽度来动态的设置rem
var width = document.documentElement.clientWidth; // 3q75
// 1rem = 100px html的font-size=100px
document.documentElement.style.fontSize = width / 7.5 + 'px'


window.onresize = function() {
    var width = document.documentElement.clientWidth; // 375
// 1rem = 100px html的font-size=100px
document.documentElement.style.fontSize = width / 7.5 + 'px'
}