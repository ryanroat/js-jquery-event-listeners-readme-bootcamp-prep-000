//define functions here

function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function pressIt() {
  $('form').on('keydown', function(key) {
    if (key.which === 71) {
      alert ('g was pressed');
    }
  });
}

function submitIt() {
  $('form').on()
}

function frameIt() {
  
}

$(document).ready(function(){

// call functions here
getIt();

pressIt();

});

