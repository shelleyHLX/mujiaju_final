// 获取轮播图
var banner_list = document.getElementById("banner-images");
var cloneLi = banner_list.firstElementChild.cloneNode(true);

// 小圆点
var circles_ol = document.getElementById('circle_ol');
var circles_list = circles_ol.getElementsByTagName('li');
banner_list.appendChild(cloneLi)

// 当前图序号，从 0 开始
var index = 0;
var timer = null;
function bannerPlay() {
  timer = setInterval(function () {
    index++;
    // 过渡
    banner_list.style.transition = "transfrom .5s linear 0s";
    // 拉动
    banner_list.style.transform = "translateX(" + -25 * index + "%)";
    // 如果到达第四张图-“假图”，我们要在动画结束之后，瞬间拉回到第一张图
    if (index == 3) {
      index = 0;
      setTimeout(() => {
        // 删除过渡
        banner_list.style.transition = 'none';
        banner_list.style.transition = 'none';
      }, 500);
    }
    setCircleColor();
  }, 2000)
}
bannerPlay();

function setCircleColor(){
  // 遍历所有的小圆点，给当前小圆点加current类
  for (var i = 0; i < circles_list.length; i++) {
    if (i == index % 3) {
      circles_list[i].className = 'current';
    } else {
      circles_list[i].className = ''
    }
  }
}