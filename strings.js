$('.func1').on('click', () => {
  // do something
  $('body').append('<p> Yeah you clicked on me! </p>');
});

$('.func2').on('click', () => {
  // do something
  $('p').text('Coronavirus outbreak!');
});

$('.func3').on('click', () => {
  // do something
  $('button').css('background-color', 'blue');
});

if (("color").value === "Blue") {
  $('button').css('background-color', 'blue');
}






function getInputValue() {
  // Selecting the input element and get its value 
  var inputVal = document.getElementById("color").value;

  if (document.getElementById("color").value == "green") {
    $('.go').on('click', () => {
      $('button').css('background-color', 'green');
    });
  }
  else {
    if (document.getElementById("color").value == "red") {
      $('.go').on('click', () => {
        $('button').css('background-color', 'red');
      });
    }
    else {
      $('.go').on('click', () => {
        $('button').css('background-color', 'yellow');
      });
    }
  }
}