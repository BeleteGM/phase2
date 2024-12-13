
$(document).ready(function () {
    $('#numberForm').submit(function (e) {
        e.preventDefault();

        var number1 = $('#number1').val();
        var number2 = $('#number2').val();
        var resultDiv = $('#result');

        if ($.isNumeric(number1) && $.isNumeric(number2)) {
            var sum = parseFloat(number1) +parseFloat(number2);
            var average = sum /2;
            resultDiv.html('Sum: ' + sum + '<br>Average: ' + average);
        } else {
            resultDiv.html('Please enter numerical values only');
        }
    })
});