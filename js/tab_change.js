
// hide all
$(".section_content div").hide();
$(".section_table dl").click(function(){
    $(".section_table dl").eq($(this).index()).addClass("active").siblings().removeClass("active");
    $(".section_content div").hide().eq($(this).index()).show();
});

// show first
$(".section_right div").hide().eq(0).show()
$(".section_table li").click(function(){
    $(".section_table li").eq($(this).index()).addClass("active").siblings().removeClass("active");
    $(".section_right div").hide().eq($(this).index()).show();
});


