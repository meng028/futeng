// $(".section_content div").hide();
for (let i = 0; i < $(".section_content div").length-1 ; i++ ) {
    $(".section_content>div").eq(i+1).hide()
}
$(".section_table .content").click(function(){
    $(".section_table .content").eq(0).addClass("active").siblings().removeClass("active");
    $(".section_content>div").hide().eq($(this).index()).show();
});



let _index=0;
$(".tab-menu>li").eq(0).addClass("change").siblings().removeClass("change");
$(".tab-menu li").click(function(){
    _index = $(this).index();// 通过 .index()方法获取元素下标，从0开始，赋值给某个变量
    numFun()
});
$('.right_btn').click(function(){
    _index++;
    if( _index == $(".tab-box>div").length){
        _index=0;
    }
    numFun()
});
$('.left_btn').click(function(){
    _index--;
    if( _index == -1 ){
        _index=$(".tab-box>div").length-1;
    }
    numFun()
});

function numFun(){
    $(".tab-box>div").eq(_index).show().siblings().hide(); // 让内容框的第 _index 个显示出来，其他的被隐藏
    $(".tab-menu li").eq(_index).addClass("change").siblings().removeClass("change"); // 改变选中时候的选项框的样式，移除其他几个选项的样式
}