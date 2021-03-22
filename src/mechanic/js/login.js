$(document).ready(function () {
  window.token = "";
  $("#login").on("submit", function (event) {
    event.preventDefault();
    let user = {
      license: $("#license").val(),
      password: $("#password").val(),
    };
    let url = "http://localhost:8080/mechanic/api/login";
    $.post(url, user, function (data, status) {
      console.log(data.code + " : " + status);
      if (data.code === 204) {
        return $("#info").html("You entered a wrong password");
      }
      if (data.code === 206) {
        return $("#info").html("License does not exist");
      }
      if (data.code === 200) {
        window.token = data.token;

        window.token = data.token;
        return (window.location.href =
          "http://127.0.0.1:8080/mechanic?token=" + window.token);
      }
      if (data.code === 400) {
        return $("#info").html("Something went wrong. Please try again!");
      }
    }).catch((err) => {
      console.log(err.message);
      return $("#info").html(
        "Something went wrong, please try again. Are you connected?"
      );
    });
  });
});
