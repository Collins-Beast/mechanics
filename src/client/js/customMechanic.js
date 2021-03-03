$(document).ready(function () {
  $("#form-register").on("change", function (e) {
    $("#info").html("");
  });
  $("#form-register").on("submit", function (event) {
    event.preventDefault();
    if ($("#name").val().length < 0) {
      return $("#info").html("Please enter your name!");
    }
    if ($("#password").val() !== $("#confirm-password").val()) {
      console.log($("#password").val() !== $("#cofirm-password").val());
      return $("#info").html("Password and confirm password do not match");
    }
    if (Number.isInteger($("#phone").val())) {
      return $("#info").html("Please enter valid phone number");
    }

    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        $("#email").val()
      )
    ) {
      return $("#info").html("Please enter a valid email address");
    }
    let user = {
      name: $("#name").val(),
      email: $("#email").val(),
      phone: $("#phone").val(),
      password: $("#password").val(),
      licence: $("#licence").val(),
      location: $("#location").val(),
    };
    let url = "http://localhost:8080/api/register";
    $.post(url, user, function (data, status) {
      console.log(data.code + " : " + status);
      if (data.code === 206) {
        return $("#info").html("That phone does is already registered");
      }
      if (data.code === 200) {
        return $("#info").html("Registration successful");
      }
      return $("#info").html("Something went wrong, please try again");
    }).catch((err) => {
      console.log(err);
      return $("#info").html(
        "Something went wrong, please try again. Are you connected?"
      );
    });
  });
});
