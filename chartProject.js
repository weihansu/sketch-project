/**
  * @desc function to create DIVs and className
  * @param string className
  * @param string classApend
  * @param number id
  * @return DOM to create
*/
function createDiv(className, classApend, id) {
  var newDiv = document.createElement('div');
  newDiv.className = className + ' ' + className + '-' + id;
  classApend.appendChild(newDiv);
  return newDiv
}

/**
  * @desc function to create a SPAN with value of data
  * @param number value
  * @param string classApend
*/
function createSpan(value, classApend) {
  var toSpan = document.createElement('SPAN');
  var valuePlot = document.createTextNode(value);
  toSpan.appendChild(valuePlot);
  classApend.appendChild(toSpan);
}

var data = [1, 20, 13, 5, 6];

function plotData(data) {
  var toAdd = document.createDocumentFragment();
  for (var i = 0; i < data.length; i++) {
    var progressBarDiv = createDiv('progress-bar', toAdd, i);
    var progressTrackDiv = createDiv('progress-track', progressBarDiv, i);
    var progressFillDiv = createDiv('progress-fill', progressTrackDiv, i);
    createSpan(data[i], progressFillDiv);
  }
  document.querySelector(".container").appendChild(toAdd);
}

plotData(data);
