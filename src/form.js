$(document).ready(formHandler);

function formHandler() {
  $('form').on('submit', validateFields);
}

function validateFields($event) {
  var $name = $('#name');
  var $password = $('#password');
  var $sendButton = $('div.buttons').find('input[type=submit]');
  var formError = false;

  if ($name.val() === '') {
    $name.addClass('error');
    formError = true;
  } else {
    $name.removeClass('error');
  }
  if ($password.val() === '') {
    $password.addClass('error');
    formError = true;
  } else {
    $password.removeClass('error');
  }
  if (formError) {
    $event.preventDefault();
    animar($sendButton);
  }
}


function animar($elemento) {
  $elemento.addClass('animated hinge slow-2s ');
  setTimeout(function() {
    $elemento.removeClass('animated hinge slow-2s ');
  }, 2500);
}
