var newObject = function() {
  var obj = {};
  var $url = $("#imgurl").val();
  if ($url === "") return alert("Please Enter URL");
  else
  {
    $("#containment-wrapper").append("<img class='toDrag ui-widget-content' src='"+$url+"'/>");
    dragging();
  }
};

/*makes the object draggable*/
var dragging = function() {
  $( ".toDrag" ).draggable({ containment: "#containment-wrapper", scroll: false });
};



/* adding event listener */
window.onload = function(){
  $("#btn").on("click", newObject);
  dragging();

};
