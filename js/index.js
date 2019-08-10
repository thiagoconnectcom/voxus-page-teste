/* menu mobile */
$(document).ready(function() {
  $(".button-free").click(function() {
    $(".button-obrigado").fadeIn(function() {
      $(".button-free").css("display", "none");
      $(".descriptioin-button").css("display", "block");
    });
  });
});

$(function() {
  $("#name_error_message").hide();
  $("#endereco_error_message").hide();
  $("#telefone_error_message").hide();
  $("#name_empresa_error_message").hide();
  $("#url_error_message").hide();

  var name_error_message = false;
  var endereco_error_message = false;
  var telefone_error_message = false;
  var name_empresa_error_message = false;
  var url_error_message = false;

  $("#name").focusout(function() {
    check_username();
  });
  $("#email").focusout(function() {
    check_email();
  });
  $("#empresa").focusout(function() {
    empresaInput();
  });
  $("#input").focusout(function() {
    checkInput();
  });

  $("#url").focusout(function() {
    checkUrl();
  });

  function check_username() {
    var username_length = $("#name").val().length;

    if (username_length <= 0) {
      $("#name_error_message").html("Este campo é obrigatório!");
      $("#name_error_message").show();
      error_username = true;
    } else {
      $("#name_error_message").hide();
    }
  }

  function empresaInput() {
    var name_empresa_length = $("#empresa").val().length;

    if (name_empresa_length <= 0) {
      $("#name_empresa_error_message").html("Este campo é obrigatório!");
      $("#name_empresa_error_message").show();
      error_password = true;
    } else {
      $("#name_empresa_error_message").hide();
    }
  }

  function checkInput() {
    var password_length = $("#input").val().length;

    if (password_length < 8) {
      $("#telefone_error_message").html("Telefone inválido.");
      $("#telefone_error_message").show();
      error_password = true;
    } else {
      $("#password_error_message").hide();
    }
  }

  function checkUrl() {
    var password_length = $("#url").val().length;

    if (password_length < 8) {
      $("#url_error_message").html("Domínio inválido");
      $("#url_error_message").show();
      error_password = true;
    } else {
      $("#password_error_message").hide();
    }
  }

  function check_email() {
    var pattern = new RegExp(
      /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i
    );

    if (pattern.test($("#email").val())) {
      $("#endereco_error_message").hide();
    } else {
      $("#endereco_error_message").html("E-mail inválido.");
      $("#endereco_error_message").show();
      error_email = true;
    }
  }
});
