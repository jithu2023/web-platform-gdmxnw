/* Iteration 4: Make the Canvas App Functional */
var bgc = document.getElementById('backgroundc');
var hc = document.getElementById('helmetc');
var ec = document.getElementById('eyesc');
var fpc = document.getElementById('face-platec');
bgc.oninput = function name() {
  background.style.fill = bgc.value;
};
hc.oninput = function name() {
  helmet.style.fill = helmetc.value;
};
ec.oninput = function name() {
  eyes.style.fill = ec.value;
};
fpc.oninput = function name() {
  faceplate.style.fill = fpc.value;
};

