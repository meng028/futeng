

// hide all
$(".section_content_item").hide();
$(".section_table .content").click(function(){

    $(".tab-menu").removeClass("active_tab");
    $(".tab-box").removeClass("active_box");
    // 底部tab添加样式
    $(".section_table .content").eq($(this).index()).addClass("home_bgm").siblings().removeClass("home_bgm");
    // 上面对应的选项卡添加样式
    $(".tab-menu").eq($(this).index()).addClass("active_tab").siblings().removeClass("active_tab");
    // 内容
    $(".tab-box").eq($(this).index()).addClass("active_box").siblings().removeClass("active_box");

    $(".section_content_item").hide().eq($(this).index()).show();
});

// show first
$(".section_right_container").hide().eq(0).show();
$(".section_table li:first").addClass("active");
$(".section_table li").click(function(){
    $(".section_table li").eq($(this).index()).addClass("active").siblings().removeClass("active");
    $(".section_right_container").hide().eq($(this).index()).show();
});

// 二级
$(".table_change_content").hide().eq(0).show();
$(".table_change:first").addClass("active");
$(".table_change").click(function(){
    $(".table_change").eq($(this).index()).addClass("active").siblings().removeClass("active");
    $(".table_change_content").hide().eq($(this).index()).show();
});




