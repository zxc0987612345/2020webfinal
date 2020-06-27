$(document).ready(function(){
    let currentQuiz = null;
    let ansval = 0;
    let finalResult = null;

    $("#startButton").click(function(){
        if(currentQuiz==null){
            currentQuiz=0;

            $("#question").text(questions[0].question);
            $("#options").empty();

            for(let x=0; x<questions[0].answers.length; x++){
                $("#options").append(
                    "<input name='options' type='radio' value=" +
                    x +
                    "><label>" + questions[0].answers[x][0] +
                    "</label><br><br>"
                );
            }
            $("#startButton").attr("value", "Next");
        }
        else{
            $.each(
                $(":radio"),function(i, val){
                    if(val.checked){
                        if(currentQuiz>8){
                            if(ansval<11){
                                finalResult = "A";
                            }
                            else if(ansval>10&&ansval<14){
                                finalResult = "B";
                            }
                            else if(ansval>13&&ansval<17){
                                finalResult = "C";
                            }
                            else if(ansval>16&&ansval<20){
                                finalResult = "D";
                            }
                            else if(ansval>19){
                                finalResult = "E";
                            }
                            $("#question").text(finalAnswers[finalResult][0]);
                            $("#options").empty();
                            $("#options").append(finalAnswers[finalResult][1] + "<br><br>");
                            currentQuiz=null;
                            $("#startButton").attr("value", "Restart");
                            finalResult = null;
                        }
                        else if(currentQuiz<9){
                            ansval = ansval+questions[currentQuiz].answers[i][1];

                            console.log(ansval);
                            currentQuiz++;
                            $("#question").text(questions[currentQuiz].question);
                            $("#options").empty();
                            for(let x=0; x<questions[currentQuiz].answers.length; x++){
                                $("#options").append(
                                    "<input name='options' type='radio' value=" +
                                    x +
                                    "><label>" + questions[currentQuiz].answers[x][0] +
                                    "</label><br><br>"
                                );
                            }
                        }
                        return false;
                    }
                }
            );
        }
    })
})