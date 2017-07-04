var newObject = function() {
  alert("k");
  $("#containment-wrapper").append("<div class='toDrag draggable ui-widget-content' style='border: 1px solid black'><p>Object</p></div>");
  dragging();
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




