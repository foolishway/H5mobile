$(function () {
  //搜索框
  $(".search-box .shadow").click(function () {
    $(this).hide();
    $(".input-wrap input").focus();
  })
  $(".input-wrap input").blur(function () {
    $(".search-box .shadow").show();
  })
  //index页面 轮播
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    }
  })    
})