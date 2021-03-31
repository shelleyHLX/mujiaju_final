
// 老师，为什么我那个样式写好了后，另外的5张图片在下一行了，怎么弄成一行的
// 如果样式可以写成一行的，那么js就可以按下面的写了，
// 还有那个recommend也一样，写不出了。。。
// 老师告诉我一下怎么写就好了，或是去哪里找资料，我在网上找的好乱。。。。
// 谢谢啦！！！
(function () {
  const goods_leftbtn = document.getElementById('goods-leftbtn');
  const goods_rightbtn = document.getElementById('goods-rightbtn');
  const goods_ul = document.getElementById('goods-ul');
  // 定义切换索引
  var idx = 0;
  // 定义一个li所占的空间,css中已经计算好了,为211
  const translate_length = 211;
  // 点击右按钮
  goods_rightbtn.onclick = () => {
    // 每点击一次,索引加1
    idx--;
    if (idx <0 ) {
      idx=0;
    }
    console.log(idx);
    // 计算移动距离
    var move_length = translate_length *idx;
    // 进行移动
    console.log(move_length);
    goods_ul.style.transform = 'translateX(' + -move_length + 'px)';
  }
  // 点击左侧按钮
  goods_leftbtn.onclick = () => {
    // 每点击一次,索引值-1
    idx++;
    // idx 为0,将不再移动
    if (idx > 5) {
      idx = 5;
    }
    // 计算移动距离
    console.log(idx);
    var move_length = translate_length * idx;
    console.log(move_length);
    goods_ul.style.transform = 'translateX(' + -move_length + 'px)';
  }
})();