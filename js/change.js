
// hide all
$(".section_content_item").hide();
$(".section_table .content").click(function(){
    $('.section_content').addClass('section_content_bgm');
    $(".section_table .content").addClass("home_showdow").eq($(this).index()).addClass("home_bgm").siblings().removeClass("home_bgm");
    $(".section_content_item").hide().eq($(this).index()).show().addClass("homeactive");
});

//
$(".internet_way_content1>div").hide();
$(".internet_way_table1>li").click(function(){
    $(".internet_way_table1>li").eq($(this).index()).addClass("home_bgm").siblings().removeClass("home_bgm");
    $(".internet_way_content1>div").hide().eq($(this).index()).show();
});

$(".internet_way_content2>div").hide();
$(".internet_way_table2>li").click(function(){
    $(".internet_way_table2>li").eq($(this).index()).addClass("home_bgm").siblings().removeClass("home_bgm");
    $(".internet_way_content2>div").hide().eq($(this).index()).show();
});

$(".internet_way_content3>div").hide();
$(".internet_way_table3>li").click(function(){
    $(".internet_way_table3>li").eq($(this).index()).addClass("home_bgm").siblings().removeClass("home_bgm");
    $(".internet_way_content3>div").hide().eq($(this).index()).show();
});

$(".internet_way_content4>div").hide();
$(".internet_way_table4>li").click(function(){
    $(".internet_way_table4>li").eq($(this).index()).addClass("home_bgm").siblings().removeClass("home_bgm");
    $(".internet_way_content4>div").hide().eq($(this).index()).show();
});


// 点击返回首页 动画效果
$('.down').click(function(){
    $(".section_content_item").addClass('gohomeactive');
    $(".section_table .content").removeClass("home_bgm").addClass("fade-out");
    setTimeout(function(){
        $(".section_content_item").hide().removeClass('gohomeactive');
        $('.section_content').removeClass('section_content_bgm');
    },800);
});


// show first
$(".triangle").hide().eq(0).show();
$(".section_right_container").hide().eq(0).show();
$(".section_table li:first").addClass("active");
$(".section_table li").click(function(){
    $(".triangle").hide().eq($(this).index()).show();
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
