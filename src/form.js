$(document).ready(formHandler);

function formHandler() {
  $('form').on('submit', formValidate);
  $('input[type=button]').on('mousedown', cambiarType);
  $('input[type=button]').on('mouseup', cambiarType);
}

function formValidate($event) {
  var formError = validateFields();
  if (formError) {
    ErrorHandler(formError);
    $event.preventDefault();
    animarButton();
  } else {
    ErrorHandler(formError);
    validarPassword($event);
  }
}

function validateFields() {
  var $inputs = $('.input-JS');
  var invalido = false;
  $inputs.each(function(index, element) {
    if ($(element).val() === '') {
      invalido = true;
    }
  });
  return invalido;
}

function ErrorHandler(condicion) {
  var $inputs = $('.input-JS');
  $inputs.each(function(index, element) {
    if (condicion) {
      $(element).addClass('error');
    } else {
      $(element).removeClass('error');
    }
  });
}

function validarPassword($event) {
  var $inputs = $('input[type=password]');
  if ($($inputs[0]).val() !== $($inputs[1]).val()) {
    ErrorHandler(true);
    animarButton();
    $event.preventDefault();
  }
}

function animarButton() {
  var $sendButton = $('div.buttons').find('input[type=submit]');
  var imgIncorrecto = $('.incorrecto');
  $sendButton.addClass('animated hinge slow');
  imgIncorrecto.removeClass('hidden');
  imgIncorrecto.addClass('animated rotateIn slow');
  setTimeout(function() {
    $sendButton.removeClass('hinge');
    $sendButton.addClass('bounceInUp');
    imgIncorrecto.removeClass('animated rotateIn slow');
  }, 2500);
}
function cambiarType() {
  var confimar = $('#conf-Password');
  var password = $('#password');
  if (confimar[0].type === 'text') {
    confimar[0].type = 'password';
    password[0].type = 'password';
  } else {
    confimar[0].type = 'text';
    password[0].type = 'text';
  }
}
