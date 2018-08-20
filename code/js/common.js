$(function () {
  $(".tabs-wrap li").click(function(e){
    e.preventDefault();
    $(this).addClass('active').siblings('li').removeClass('active');
  });
})