//Home javascript
$(document).ready(function (e) {
  let urlParams = new URLSearchParams(window.location.search);
  let token = urlParams.get("token");
  console.log(token);
  if (!token) {
    alert("Please log in first");
    return (window.location.href = "http://localhost:8080/mechanic/login");
  }
  let url = "http://localhost:8080/mechanic/name";
  $.post(url, { token }, function (data, status) {
    let { name } = data;
    console.log(name);
    $("#name").html(name);
  });

  $("#logout").on("click", function () {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    window.location.href = "http://localhost:8080/mechanic/login";
  });
});
