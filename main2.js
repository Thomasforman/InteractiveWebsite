$(document).ready(function () {
$("#header").hide();
  $("#scene2").hide();
  $("#scene3").hide();
  $("#scene4").hide();
  $("#scene5").hide();
  $("#scene6").hide();
  $("#scene7").hide();
  $("#scene8").hide();
  $("#scene9").hide();
  $("#scene10").hide();
  $("#scene11").hide();
  $("#scene12").hide();
  $("#scene13").hide();
  $("#scene14").hide();
  $("#scene15").hide();
  $("#scene16").hide();
  $("#scene17").hide();


  $("#yesScene1").click(function () {
    $("#scene2").show();
    $("#scene1").hide();
  });

  $("#noScene1").click(function () {
    $("#scene3").show();
    $("#header").show();
    $("#scene1").hide();
  });

  $("#change").click(function () {
    $("#img1").attr("src", "mikeHome.jpg");
  });
  $("#noScene2").click(function () {
    $("#scene4").show();
    $("#scene3").hide();
  });
  $("#noScene3").click(function () {
    $("#scene5").show();
    $("#scene4").hide();
  });
  $("#noScene4").click(function () {
    $("#scene6").show();
    $("#scene5").hide();
  });
  $("#noScene5").click(function () {
    $("#scene7").show();
    $("#scene6").hide();
  });
  $("#yesScene2").click(function () {
    $("#scene8").show();
    $("#scene6").hide();
  });
  $("#yesScene3").click(function () {
    $("#scene9").show();
    $("#scene8").hide();
  });
  $("#noScene6").click(function () {
    $("#scene11").show();
    $("#scene8").hide();
  });
  $("#yesScene4").click(function () {
    $("#scene10").show();
    $("#scene9").hide();
  });
  $("#noScene7").click(function () {
    $("#scene9").show();
    $("#scene11").hide();
  });
  $("#yesScene5").click(function () {
    $("#scene12").show();
    $("#scene11").hide();
  });
  $("#yesScene6").click(function () {
    $("#scene13").show();
    $("#scene10").hide();
  });
  $("#noScene8").click(function () {
    $("#scene14").show();
    $("#scene10").hide();
  });
  $("#yesScene7").click(function () {
    $("#scene15").show();
    $("#scene13").hide();
  });
  $("#noScene9").click(function () {
    $("#scene16").show();
    $("#scene13").hide();
  });
  $("#yesScene14").click(function () {
    $("#scene1").show();
    $("#scene16").hide();
    $("#header").hide();
  });
  $("#yesScene13").click(function () {
    $("#scene1").show();
    $("#scene14").hide();
    $("#header").hide();
  });
  $("#yesScene12").click(function () {
    $("#scene1").show();
    $("#scene12").hide();
    $("#header").hide();
  });
  $("#yesScene11").click(function () {
    $("#scene1").show();
    $("#scene7").hide();
    $("#header").hide();

  });

});
