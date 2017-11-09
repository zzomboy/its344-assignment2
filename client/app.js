var main = function (countObjects) {
    "use strict";
    var $qtytxt , $qtyshow , $minusbt , $addbt;

    console.log(countObjects);
    var txt = countObjects['qty'];

    $qtytxt = $("<p>").text("count").addClass('topic'),
    $qtyshow = $("<p>").text(txt).addClass('number'),
    $minusbt = $("<button>").text("-1").addClass('minusbt'),
    $addbt = $("<button>").text("+1").addClass('addbt');
    $(".content").append($qtytxt).append($qtyshow).append($minusbt).append($addbt);
    
    $addbt.on("click", function () {
        countObjects['qty']++;
        console.log(countObjects);
        $.post('plus',function (request,response) {
            console.log(request.body.number);
        });
    });
};

$(document).ready(function () {
    $.getJSON("count.json", function (countObjects) {
        main(countObjects);
    });
});
