$(document).ready(function(){
$("#submit").click(function(){
  /*******Collecting Vehicle Model Details*****/
  var model = document.getElementById("cars");
  document.getElementById("model").innerHTML =
  (model.options[model.selectedIndex].text).toUpperCase();

  var  y = model.options[model.selectedIndex].text;

  /*******Collecting Location Details*****/
  var location = document.getElementById("locationSelection");
  document.getElementById("loc").innerHTML =
  (location.options[location.selectedIndex].text).toUpperCase();

var  x = location.options[location.selectedIndex].text;

  if(x =="Langas"){
    $("#Nelly, #Lawrence, #Willy, #Brian, #Joseph, #faith, #Godwill, #Sharon, #mwangi, #Wagod, #Henry, #mercy").hide();
    $("#Collins").show();
    $("#Ambrose").show();
    $("#ser").hide();
    return;
  }else if(x=="Kesses"){
    $("#Collins, #Ambrose, #Willy, #Brian, #Joseph, #faith, #Godwill, #Sharon, #mwangi, #Wagod, #Henry, #mercy").hide();
    $("#Nelly").show();
    $("#Lawrence").show();
    $("#ser").hide();
    return;
  }else if(x=="Eldoret"){
    $("#Collins, #Ambrose, #Nelly, #Lawrence, #Joseph, #faith, #Godwill, #Sharon, #mwangi, #Wagod, #Henry, #mercy").hide();
    $("#Willy").show();
    $("#Brian").show();
    $("#ser").hide();
    return;
  }else if(x=="Annex"){
    $("#Collins, #Ambrose, #Nelly, #Lawrence, #Willy, #Brian, #Godwill, #Sharon, #mwangi, #Wagod, #Henry, #mercy").hide();
    $("#Joseph").show();
    $("#faith").show();
    $("#ser").hide();
    return;
  }else if(x=="Kpa") {
    $("#Collins, #Ambrose, #Nelly, #Lawrence, #Willy, #Brian, #Joseph, #faith, #eduwin, #mwangi, #Wagod, #Henry, #mercy").hide();
    $("#Godwill").show();
    $("#Sharon").show();
    $("#ser").hide();
    return;
  }else if(x=="Mu") {
    $("#Collins, #Ambrose, #Nelly, #Willy, #Brian, #Joseph, #faith, #Godwill, #Sharon, #Henry, #mercy").hide();
    $("#mwangi").show();
    $("#Wagod").show();
    $("#ser").hide();
    return;
    return;
  }else if(x=="Pioneer") {
    $("#Collins, #Ambrose, #Nelly, #Lawrence, #Willy, #Brian, #Joseph, #faith, #Godwill, #Sharon").hide();
    $("#Henry").show();
    $("#mercy").show();
    $("#ser").hide();
    return;
  }else if(y=="--Select Your Car Model--" || x=="--Select Your Location--"){
    $("#Collins, #Ambrose, #Nelly, #Lawrence, #Willy, #Brian, #Joseph, #faith, #Godwill, #Sharon, #mwangi, #Wagod, #Henry, #mercy").hide();
    document.getElementById("ser").innerHTML = "Please Enter your Car model and location to Find our Mechanics !";
    return;
  }
})

$("#display").click(function(){
  $("#Collins, #Ambrose, #Nelly, #Langas, #Willy, #Brian, #Joseph, #faith, #Godwill, #Sharon, #mwangi, #Wagod, #Henry, #mercy").toggle();
});

/******Displaying Contact Detils**********/
$(".flip-card-back button").click(function(){
  $(".cont1, .cont2, .cont3, .cont4, .cont5, .cont6, .cont7, .cont8, .cont9, .cont10, .cont11, .cont12, .cont13, .cont14").toggle();
  $(".flip-card-back button").hide();
});
  $(".cont1, .cont2, .cont3, .cont4, .cont5, .cont6, .cont7, .cont8, .cont9, .cont10, .cont11, .cont12, .cont13, .cont14").click(function(){
  $(".flip-card-back button").toggle();
  $(".cont1, .cont2, .cont3, .cont4, .cont5, .cont6, .cont7, .cont8, .cont9, .cont10, .cont11, .cont12, .cont13, .cont14").hide();
});

/***********Collect users Message******/
$("#message").click(function(){
  var names = ($("#name").val()).toUpperCase();
  var emails = $("#mail").val();
  var comment = $("#comments").val();

  if(names== "" ){
    document.getElementById("conta").innerHTML = "Please enter your name !";
    return;
  }else if(emails==""){
    document.getElementById("conta").innerHTML = "Please enter your email !";
    return;
  }else if(comment=="") {
    document.getElementById("conta").innerHTML = "Please enter your message !";
    return;
  }else{
    document.getElementById("con").innerHTML = names + " we have received your message. Thank you for reaching out to us.";
    $("#conta").hide();
    return;
  }
});
});
