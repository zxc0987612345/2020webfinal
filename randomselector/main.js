/*
window.onload=function(){
    //document.write("Hello JavaScript!");
};
*/

$(document).ready(function(){
    $("input").click(function(){
        let numberOfList = $("li").length;
        let randomNumber = Math.floor(Math.random()*numberOfList);
        $("h1").text($("li").eq(randomNumber).text());
        $("img").attr("src", pic[randomNumber])
    })
})