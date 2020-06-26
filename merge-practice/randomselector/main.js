/*
window.onload=function(){
    //document.write("Hello JavaScript!");
};
*/

$(document).ready(function(){
    $("input").click(function(){
        let numberOfList = $("#choices li").length;
        let randomNumber = Math.floor(Math.random()*numberOfList);
        $("#random-result").text($("#choices li").eq(randomNumber).text());
        $("#random-pic").attr("src", pic[randomNumber])
    })
})