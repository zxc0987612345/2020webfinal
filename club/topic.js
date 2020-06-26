let topicsArray = [
    "放假",
    "放假",
    "放假",
    "放假",
    "放假",
    "放假",
    "放假",
    "補課",
    "端午"
];

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(5,2);