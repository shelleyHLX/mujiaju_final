// 老师，为什么点击小圆点，小圆点要过一会儿才变色？
// 怎么处理

(function () {
  const banner_images = document.getElementById('banner-images');
  // var clone_img = banner_images.firstElementChild.cloneNode(true);
  // banner_images.appendChild(clone_img);

  // 小圆点
  var circle_ol = document.getElementById('circle_ol');
  var circle_lis = circle_ol.getElementsByTagName('li');
  

  var idx = 0;
  const num_imgs = 3;
  const translate_length = 25;
  // 左右移动下标
  let globa_idx = 0;
  const idxs = [0, 1, 2, 1, 0];
  var lens = idxs.length;
  function carousel_time(){
    idx = idx % lens;
    globa_idx = idxs[idx];
    banner_images.style.transform = 'translateX(' + -translate_length * globa_idx + '%)';
    idx++;
    setCircles();
    
  }
  var timer = setInterval(carousel_time, 2000);

  //设置小圆点的current在谁身上
  function setCircles() {
    //遍历，若为当前图片，则修改类名
    for (var i = 0; i <= num_imgs-1; i++) {
      if (i === globa_idx) {
        circle_lis[i].className = 'current';
      } else {
        circle_lis[i].className = '';
      }
    }
  }
  //小圆点的监听
  circle_ol.onclick = function (e) {
    if (e.target.tagName.toLowerCase() == 'li') {
      //小圆点的效果
      setCircles();
      //得到li身上的data-n属性，就是n
      var n = e.target.getAttribute('data-n');
      //改变idx
      globa_idx=n;
      idx=n;
      //拉动
      banner_images.style.transform = "translateX(" + -translate_length * globa_idx + "%)";
      
    }
  };
  // //鼠标进入轮播图，自动轮播暂停
  banner_images.onmouseenter=function(){
    clearInterval(timer);
  };
  banner_images.onmouseleave =function(){
    clearInterval(timer);
    timer=setInterval(carousel_time, 2000)
  }
})()

