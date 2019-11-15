  // 封装的函数
  kaideng=function(){
    lis.forEach(function (circle) {
        circle.classList.remove('light');
    });
}

// 鼠标移入按钮切换
lis.forEach(function (e, i) {
left.onclick=function(){
}
e.onmouseover = function () {
    let va = 1000 * i * -1;
    ul.style.left = va + 'px';
    kaideng();
    this.classList.add('light');
}
});

// 左右切换按钮
let weizhi=0;
left.onclick=function(){
if(weizhi===0){
    weizhi=5;
}
weizhi--;
let move=1000*weizhi*-1;
ul.style.left=move+'px';
kaideng();
lis[weizhi].classList.add('light');

}
right.onclick=lc;
function lc(){
if(weizhi==5){
    weizhi=0;
}
let move=1000*weizhi*-1;
kaideng();
lis[weizhi].classList.add('light');
ul.style.left=move+'px';
weizhi++;
}

// 自动轮播
stop=setInterval(lc,1000);
box.onmouseover=function(){
clearInterval(stop);
}
box.onmouseout=function(){
stop=setInterval(lc,1000);
}