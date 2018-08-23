// $(".section_content div").hide();
for (let i = 0; i < $(".section_content>div").length-1 ; i++ ) {
    $(".section_content>div").eq(i+1).hide()
}
$(".section_table dl").click(function(){
    $(".section_table dl").eq($(this).index()).addClass("active").siblings().removeClass("active");
    $(".section_content>div").hide().eq($(this).index()).show();
});
var _index=0;

$(".tab-menu li").eq(0).addClass("change").siblings().removeClass("change");

$(".tab-menu li").click(function(){
    //通过 .index()方法获取元素下标，从0开始，赋值给某个变量
    _index = $(this).index();
    numFun()
});

$('.right_btn').click(function(){
    _index++;
    if( _index == $(".tab-box>div").length) _index=0;
    numFun()
});

$('.left_btn').click(function(){
    _index--;
    if( _index == -1 ) _index=$(".tab-box>div").length-1;
    numFun()
});

function numFun(){
    //让内容框的第 _index 个显示出来，其他的被隐藏
    $(".tab-box>div").eq(_index).show().siblings().hide();
    //改变选中时候的选项框的样式，移除其他几个选项的样式
    $(".tab-menu li").eq(_index).addClass("change").siblings().removeClass("change");
}

// // hide all
// $(".section_content div").hide();
// $(".section_table dl").click(function(){
//     $(".section_table dl").eq($(this).index()).addClass("active").siblings().removeClass("active");
//     $(".section_content div").hide().eq($(this).index()).show();
// });
//
// show first
// $(".section_right div").hide().eq(0).show()
// $(".section_table li").click(function(){
//     $(".section_table li").eq($(this).index()).addClass("active").siblings().removeClass("active");
//     $(".section_right div").hide().eq($(this).index()).show();
// });

