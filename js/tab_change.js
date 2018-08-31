let firstIndex=0;
let secondIndex=0;

$('.first-tab-menu ul li').click(function(){
    firstIndex=$(this).index();
    selectFn($('.first-tab-box'),$(this).index(),true);
    selectStyle($('.first-tab-menu li'),firstIndex)
});
$('.second-tab-menu ul li').click(function(){
    secondIndex=$(this).index();
    selectFn($('.second-tab-box'),$(this).index(),true);
    selectStyle($('.second-tab-menu li'),secondIndex)
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

//===============================================================
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
//================================================================

$(".section_table .content").click(function(){
    firstIndex=0;
    secondIndex=0;
    selectFn($('.first-tab-box'),firstIndex,true);
    selectFn($('.second-tab-box'),secondIndex,true);
    selectStyle($('.first-tab-menu li'),firstIndex);
    selectStyle($('.second-tab-menu li'),secondIndex)
});

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

$(".submit_message").click(function(){
    if($(".fill_in input").val() =="" && $(".fill_in textarea").val() =="") {
        alert("请输入留言内容")
    }else {
        alert("提交成功");
        $(".fill_in input").val("");
        $(".fill_in textarea").val("");
    }
});

$('.down').click(function(){
    $(".section_content_item").hide()
    // alert("1111111")
});
