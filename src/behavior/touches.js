d3.behavior.touches = function(container, touches) {
  if (arguments.length < 2) touches = d3.event.touches;

  return touches ? d3_array(touches).map(function(touch) {
    var point = d3_behavior_mousePoint(container, touch);
    point.identifier = touch.identifier;
    return point;
  }) : [];
};
