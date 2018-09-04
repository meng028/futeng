
// hide all
$(".section_content_item").hide();
$(".section_table .content").click(function(){
    $(".section_table .content").addClass("home_showdow");
    $(".section_table .content").eq($(this).index()).addClass("home_bgm").siblings().removeClass("home_bgm");
    $(".section_content_item").hide().eq($(this).index()).show().addClass("homeactive");
});
// 点击返回首页 动画效果
$('.down').click(function(){
    $(".section_content_item").addClass('gohomeactive');
    setTimeout(function(){
        $(".section_content_item").hide().removeClass('gohomeactive');
    },900);
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
