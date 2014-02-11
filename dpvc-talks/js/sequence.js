var n = 0;
var sequence = [];

if (!window.bdots) {var bdots = "../"}

function Next (event) {
  if (!event) {event = window.event}
  if (event) {
    var target = event.target || event.srcElement;
    if (target.nodeName && target.nodeName.toUpperCase() == "A") return;
    if (target.parentNode && target.parentNode.nodeName.toUpperCase() == "A") return;
  }
  if (n >= sequence.length) return;
  var ids = sequence[n]; n++;
  if (typeof ids == 'string') {ids = [ids]}
  for (var i = 0; i < ids.length; i++) {
    var id = ids[i]; var img;
    if (typeof id == 'object') {img = id[1]; id = id[0]}
    var element = document.getElementById(id);
    if (element) {
      element.className = "";
      if (img && element.src) {element.src = img}
    }
  }
  if (n >= sequence.length) {
    document.getElementById('Advance').src = bdots + 'buttons/next-flat.gif';
    document.getElementById('AdvMsg').style.color = "#CCCCCC";
  }
}

/*
document.writeln('<STYLE TYPE="text/css">');
document.writeln('  .hidden {color:#EEEEEE}');
document.writeln('  .hidden * {color:#EEEEEE}');
document.writeln('  .hidden IMG, IMG.hidden {visibility:hidden}');
document.writeln('</STYLE>');
*/

function checkKeyPress (event) {
  if (!event) {event = window.event}
  var code = (event.which != null)? event.which:
             (event.keyCode != null)? event.keyCode : event.charCode
  if (code == 32) {Next(); return false}
  return true;
}

if (window.addEventListener) {window.addEventListener("keypress",checkKeyPress,false)}
else if (document.body.attachEvent) {document.body.attachEvent("onkeypress",checkKeyPress)}
else document.body.onkeypress = checkKeyPress;
