$(document).ready(function() {
    $('#roll_button').click(function() {
        var numDiceText = $('#num_dice').val();
        var numDice = parseInt(numDiceText)
        var numSides = parseInt($('#num_sides').val());

        var diceRolls = []
        var total = 0
        for (idx = 0; idx < numDice; idx ++) {
            var roll = Math.floor(numSides*Math.random()) + 1
            total += roll
            diceRolls.push(roll)
        }
        $('#results').html("<p>"+diceRolls.toString()+" : "+total+"</p>");
        //$('#results').html("<p>"+numDiceText+" --- "+numDice);
    });
});