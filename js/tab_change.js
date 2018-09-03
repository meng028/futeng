function selectFn(parent,index,judge){
    if(judge){
        for( let i = 0 ; i < parent.children().length ; i++ ) {
            if( i != index ){
                parent.children().eq(i).hide()
            }
        }
        parent.children().eq(index).show()
    }else{
        parent.children().eq(index).show()
    }
}
function selectStyle(children,index){
    children.eq(index).addClass("change").siblings().removeClass("change");
}
//   first 轮播
let firstIndex=0;
$('.first-tab-menu ul li').click(function(){
    firstIndex=$(this).index();
    selectFn($('.first-tab-box'),$(this).index(),true);
    selectStyle($('.first-tab-menu li'),firstIndex)
});
$('.first-left_btn').click(function(){
    firstIndex--;
    if(firstIndex<=-1){
        firstIndex=$('.first-tab-box').children().length-1
    }
    selectFn($('.first-tab-box'),firstIndex,true);
    selectStyle($('.first-tab-menu li'),firstIndex)
});
$('.first-right_btn').click(function(){
    firstIndex++;
    if(firstIndex>=$('.first-tab-box').children().length){
        firstIndex=0
    }
    selectFn($('.first-tab-box'),firstIndex,true);
    selectStyle($('.first-tab-menu li'),firstIndex)
});
$(".section_table .content").click(function(){
    firstIndex=0;
    selectFn($('.first-tab-box'),firstIndex,true);
    selectStyle($('.first-tab-menu li'),firstIndex);
});
//  second 轮播
let secondIndex=0;
$('.second-tab-menu ul li').click(function(){
    secondIndex=$(this).index();
    selectFn($('.second-tab-box'),$(this).index(),true);
    selectStyle($('.second-tab-menu li'),secondIndex)
});
$('.second-left_btn').click(function(){
    secondIndex--;
    if(secondIndex<=-1){
        secondIndex=$('.second-tab-box').children().length-1
    }
    selectFn($('.second-tab-box'),secondIndex,true);
    selectStyle($('.second-tab-menu li'),secondIndex)
});
$('.second-right_btn').click(function(){
    secondIndex++;
    if(secondIndex>=$('.second-tab-box').children().length){
        secondIndex=0
    }
    selectFn($('.second-tab-box'),secondIndex,true);
    selectStyle($('.second-tab-menu li'),secondIndex)
});
$(".section_table .content").click(function(){
    secondIndex=0;
    selectFn($('.second-tab-box'),secondIndex,true);
    selectStyle($('.second-tab-menu li'),secondIndex);
});
//  third 轮播
let thirdIndex=0;
$('.third-tab-menu ul li').click(function(){
    thirdIndex=$(this).index();
    selectFn($('.third-tab-box'),$(this).index(),true);
    selectStyle($('.third-tab-menu li'),thirdIndex)
});
$('.third-left_btn').click(function(){
    thirdIndex--;
    if(thirdIndex<=-1){
        thirdIndex=$('.third-tab-box').children().length-1
    }
    selectFn($('.third-tab-box'),thirdIndex,true);
    selectStyle($('.third-tab-menu li'),thirdIndex)
});
$('.third-right_btn').click(function(){
    thirdIndex++;
    if(thirdIndex>=$('.third-tab-box').children().length){
        thirdIndex=0
    }
    selectFn($('.third-tab-box'),thirdIndex,true);
    selectStyle($('.third-tab-menu li'),thirdIndex)
});
$(".section_table .content").click(function(){
    thirdIndex=0;
    selectFn($('.third-tab-box'),thirdIndex,true);
    selectStyle($('.third-tab-menu li'),thirdIndex);
});
//  fourth 轮播
let fourthIndex=0;
$('.fourth-tab-menu ul li').click(function(){
    fourthIndex=$(this).index();
    selectFn($('.fourth-tab-box'),$(this).index(),true);
    selectStyle($('.fourth-tab-menu li'),fourthIndex)
});
$('.fourth-left_btn').click(function(){
    fourthIndex--;
    if(fourthIndex<=-1){
        fourthIndex=$('.fourth-tab-box').children().length-1
    }
    selectFn($('.fourth-tab-box'),fourthIndex,true);
    selectStyle($('.fourth-tab-menu li'),fourthIndex)
});
$('.fourth-right_btn').click(function(){
    fourthIndex++;
    if(fourthIndex>=$('.fourth-tab-box').children().length){
        fourthIndex=0
    }
    selectFn($('.fourth-tab-box'),fourthIndex,true);
    selectStyle($('.fourth-tab-menu li'),fourthIndex)
});
$(".section_table .content").click(function(){
    fourthIndex=0;
    selectFn($('.fourth-tab-box'),fourthIndex,true);
    selectStyle($('.fourth-tab-menu li'),fourthIndex);
});
// fifth 轮播
let fifthIndex=0;
$('.fifth-tab-menu ul li').click(function(){
    fifthIndex=$(this).index();
    selectFn($('.fifth-tab-box'),$(this).index(),true);
    selectStyle($('.fifth-tab-menu li'),fifthIndex)
});
$('.fifth-left_btn').click(function(){
    fifthIndex--;
    if(fifthIndex<=-1){
        fifthIndex=$('.fifth-tab-box').children().length-1
    }
    selectFn($('.fifth-tab-box'),fifthIndex,true);
    selectStyle($('.fifth-tab-menu li'),fifthIndex)
});
$('.fifth-right_btn').click(function(){
    fifthIndex++;
    if(fifthIndex>=$('.fifth-tab-box').children().length){
        fifthIndex=0
    }
    selectFn($('.fifth-tab-box'),fifthIndex,true);
    selectStyle($('.fifth-tab-menu li'),fifthIndex)
});
$(".section_table .content").click(function(){
    fifthIndex=0;
    selectFn($('.fifth-tab-box'),fifthIndex,true);
    selectStyle($('.fifth-tab-menu li'),fifthIndex);
});

// 提交留言
$(".submit_message").click(function(){
    if($(".fill_in input").val() =="" && $(".fill_in textarea").val() =="") {
        alert("请输入留言内容")
    }else {
        alert("提交成功");
        $(".fill_in input").val("");
        $(".fill_in textarea").val("");
    }
});

// 点击按钮隐藏页面
$('.down').click(function(){
    $(".section_content_item").hide()
});