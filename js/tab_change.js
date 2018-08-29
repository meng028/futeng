let _index=0;
$(".tab-menu>li").eq(0).addClass("change").siblings().removeClass("change");
$(".tab-menu li").click(function(){
    _index = $(this).index();// 通过 .index()方法获取元素下标，从0开始，赋值给某个变量
    numFun()
});
$('.right_btn').click(function(){
    _index++;
    console.log('_index ',_index);
    console.log($(".active_tab li").length)
    if( _index >= $(".active_tab li").length){
        _index=0;
    }
    numFun()
});
$('.left_btn').click(function(){
    _index--;
    if( _index <= -1 ){
        _index=$(".active_tab li").length-1 ;
    }
    numFun()
});

function numFun(){
    $(".tab-box>div").hide(); // 让内容框的第 _index 个显示出来，其他的被隐藏
    $('.active_box div').eq(_index).show();
    $(".active_tab li").eq(_index).addClass("change").siblings().removeClass("change"); // 改变选中时候的选项框的样式，移除其他几个选项的样式
    // 第index个选项卡的内容显示
    $('.details').eq(_index).show();
}

$(".submit_message").click(function(){
    if($(".fill_in input").val() =="" && $(".fill_in textarea").val() =="") {
        alert("请输入留言内容")
    }else {
        alert("提交成功");
        $(".fill_in input").val("");
        $(".fill_in textarea").val("");
    }
});