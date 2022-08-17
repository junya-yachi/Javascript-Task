'use strict'

let $result = $(".result").innerHTML;
$result = '';

function displayResult() {
  $(".result").text(`${$result}`);
}

function clickButton(button) {
  let number = button.innerHTML;
  if($result === '0' || $result === '00') {
    $result = number;
    displayResult();
  } else {
    $result += number;
    displayResult();
    console.log($result);
  }
}

function clickOperator(button) {
  let number = button.innerHTML;
  if ($result.slice(-1) === '+' || $result.slice(-1) === '-' || $result.slice(-1) === '*' || $result.slice(-1) === '/' || $result.slice(-1) === '') {
    return;
  }  else {
    $result += number;
    displayResult();
    console.log($result);
  } 
}

function clickClear() {
  $result = '0';
  displayResult();
  console.log($result);
}

function clickEqual() {
  $result = eval($result);
  displayResult();
  console.log($result);
}

function clickPoint(button) {
  let number = button.innerHTML;
  if ($result.slice(-1) === '.') {
    return;
  } else if ($result === '0' || $result === '00' || $result === ''){
    $result = '0';
    $result += number;
    displayResult();
  } else {
    $result += number;
    displayResult();
  }
}