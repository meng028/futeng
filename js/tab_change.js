
// hide all
$(".section_content_div").hide();
$(".section_table dl").click(function(){
    $(".section_table dl").eq($(this).index()).addClass("active").siblings().removeClass("active");
    $(".section_content_div").hide().eq($(this).index()).show();
});

// show first
$(".section_right_container").hide().eq(0).show();
$(".section_table li:first").addClass("active");
$(".section_table li").click(function(){
    $(".section_table li").eq($(this).index()).addClass("active").siblings().removeClass("active");
    $(".section_right_container").hide().eq($(this).index()).show();
});


$('.tab_list li').click(function () {
    console.log($(this).index());
    $(".tab_list li a").eq($(this).index()).addClass("active_").siblings().removeClass("active_");
});
