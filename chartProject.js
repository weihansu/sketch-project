function createDiv(className, classApend, id) {
  var newDiv = document.createElement('div');
  newDiv.className = className;
  //newDiv.className = className + "_" + id;
  classApend.appendChild(newDiv);
  return newDiv
}

function createSpan(value, classApend) {
  var toSpan = document.createElement('SPAN');
  //newDiv.className = className + "_" + id;
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
