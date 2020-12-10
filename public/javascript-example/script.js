var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');

function calc() {
  var n1 = num1.value;
  var n2 = num2.value;
  var result = parseInt(n1, 10) + parseInt(n2, 10);
  document.getElementById('label').innerHTML = result.toString();
  document.getElementById('reset').disabled = false;
}

num1.addEventListener('change', calc);
num2.addEventListener('change', calc);

document.getElementById('calc').addEventListener('click', calc);

function reset() {
  num1.value = 0;
  num2.value = 0;
  document.getElementById('label').innerHTML = '';
  document.getElementById('reset').disabled = true;
}

document.getElementById('reset').addEventListener('click', reset);
