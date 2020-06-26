$(document).ready(function(){
    $("#courseTable").append(
        "<tr><th>場次</th><th>時間</th><th>主題</th></tr>"
    );

    let topicCount = topicsArray.length;

    let oneDaymiliseconds = 24*60*60*1000;

    for(let i=0; i<topicCount; i++){
        let thisDate = new Date(startDate.getTime()+7*i*oneDaymiliseconds);
        $("#courseTable").append(
            "<tr>" +
            "<td>" + (i+1) + "</td>" + 
            "<td>" + thisDate.toLocaleDateString().slice(5) + "</td>" + 
            "<td>" + topicsArray[i] + "</td>" + 
            "</tr>" 
        );
    }
});