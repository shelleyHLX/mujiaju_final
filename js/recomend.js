(function(){
  const recomend_leftbtn = document.getElementById("recomend_leftbtn");
  const recomend_rightbtn = document.getElementById("recomend_rightbtn");
  const recomend_ul = document.getElementById('recomend_ul');
  // 定义索引
  var idx = 0;
  const translate_length = 360;
  recomend_leftbtn.onclick = () => {
    idx++;
    if(idx>6){
      idx=6;
    }
    // 计算移动距离
    var move_length = translate_length*idx;
    // 进行移动
    recomend_ul.style.transform = 'translateX(' + -move_length + 'px)';
  }
  recomend_rightbtn.onclick = () =>{
    idx--;
    if(idx<0){
      idx=0;
    }
    var move_length = translate_length*idx;
    recomend_ul.style.transform = 'translateX(' + -move_length + 'px)';
  }
})()