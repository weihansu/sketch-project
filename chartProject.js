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

/**
  * @desc function to calculate the height of a distinct value of dataset
  * @param array of numbers - data
  * @param number - n
*/
function calcHeight(data, n) {
  var max = Math.max(...data);
  var height = n / max;
  return height;
}

/**
  * @desc function to manipulate DOM style
  * @param string - className
  * @param array of numbers - data
*/
function setHeight(className, data) {
  for (var i = 0; i < data.length; i++) {
    var barHeight = calcHeight(data, data[i]) * 100;
    var barTop = 100 - barHeight;
    var bar = document.querySelector('.' + className + '-' + i);
    bar.style.height = barHeight + "%";
    bar.style.top = barTop + "%";
  }
}


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

var data = [1, 20, 13, 5, 6];
plotData(data);
