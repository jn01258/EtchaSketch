var tool;
// defining the fx to draw grid and the required parameter
function makeGrid(squaresPerSide) {

    //Add div rows(basically tr), to act as rows
    for (var i = 0; i < squaresPerSide; i++) {
        $('#pad').append('<div class="row"></div>');
    }

    //Add div squares(basically td), to ever row
    for (var i = 0; i < squaresPerSide; i++) {
        $('.row').append('<div class="square"></div>');
    }

    //Set square size= giant grid div divided by sqperside
    var squareDimension = $('#pad').width() / squaresPerSide;
    $('.square').css({
        'height': squareDimension,
        'width': squareDimension
    });
}

// fx defined = when pick a different writing utensil
function setTool(newTool) {
    tool = newTool;
      // makes sure code always works, turns all tool entry into new tool
    $('#' + newTool).addClass('chosenTool').siblings().removeClass('chosenTool');
    // selects id with utensil name and adds class name chosenTool to it
    //selects the new utensil's  siblings and removes  .chosenTool class from them

}

//actually runs the following upon loading
$(document).ready(function() {

    //Set up
    var squaresPerSide = 10;
      // default value of sqperside
    makeGrid(squaresPerSide);
      // run grid fx w/16 sq
    setTool('pen');

    //Draw!
    $('#pad').on('mouseenter', '.square', function() {
      // when mouse hover over square in big div, fx will run
        var opacity = +$(this).css('opacity');
        switch (tool) {
          // case is equal to utensil
            case 'pen':``
                $(this).css({
                    'opacity': 1,
                    'background-color': '#aeffda'
                });
                break;
            case 'pencil':
                if (opacity + 0.1 < 1) {
                    // wont ever be black
                    $(this).css({
                        'opacity': opacity + 0.1
                        // gets darker with every hover
                    });
                }else {
                    $(this).css({
                        'opacity': 1
                    });
                }
                break;
            case 'rainbow':
                var r = Math.floor(Math.random() * 256);
                  // Math.floor() function returns the largest integer <=
                var g = Math.floor(Math.random() * 256);
                var b = Math.floor(Math.random() * 256);
                $(this).css({
                    'opacity': 0.6,
                    'background-color': 'rgb(' + r + ',' + g + ',' + b + ')'
                });
                break;
            case 'eraser':
                if (opacity > 0) {
                    $(this).css({
                        'opacity': opacity - 0.2
                    });
                }

                //Double check for browser weirdness like Safari not wanting to
                //set it all the way to 0, and adjust for erasing too far past
                //0, since it erases faster than the pencil draws
                var newOpacity = $(this).css('opacity')
                if (opacity - newOpacity < 0.015 || newOpacity < 0) {
                    $(this).css({
                        'opacity': 0,
                        'background-color': '#aeffda'
                    }); //
                } //
                break;
        }
    });

    //Reset
    $('#reset').on('click', function() {
      // when reset aka new sketch button clicked fx will run
        //Get and validate user input
        var newSquaresPerSide;
        var invalidInput;
        do {
            newSquaresPerSide = prompt('How many squares per side would you like?',
                squaresPerSide);
                // the preloaded text in input box is sps
            var isNull = newSquaresPerSide === null;
              // isnull = nsps, if nspps is null
            var isInteger = $.isNumeric(newSquaresPerSide) &&
                Number.isInteger(+newSquaresPerSide);
            var isPositive = (newSquaresPerSide > 0) && (newSquaresPerSide < 80);
            invalidInput = !isNull && !(isInteger && isPositive);
            if (invalidInput) {
                alert('Only enter whole numbers between 1 and 80');
            }
        }
         while (invalidInput);
          // this will display only valid alert and pop up prompt, every time entered invalid txt

        if (newSquaresPerSide !== null) {
          // if valid input
            squaresPerSide = newSquaresPerSide;
            $('#pad').empty();
              // deletes everything in big div
            makeGrid(squaresPerSide);
        } //belong to nsps not null function
    }); //belong to reset function

    //Change tool
    $('#tools').on('click', 'button', function() {
        // when button clicked in tools div, fx runs
        setTool($(this).attr('id'));
    });
});
