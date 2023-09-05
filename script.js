function getInput_7() {
  let seven = document.querySelector(".display_input");
  if (seven.value.length == 1 && seven.value == 0) {
    seven.value = 7;
    return;
  }
  seven.value += 7;
}

function getInput_8() {
  let eight = document.querySelector(".display_input");
  if (eight.value.length == 1 && eight.value == 0) {
    eight.value = 8;
    return;
  }
  eight.value = eight.value + 8;
}

function getInput_9() {
  let nine = document.querySelector(".display_input");
  if (nine.value.length == 1 && nine.value == 0) {
    nine.value = 9;
    return;
  }
  nine.value += 9;
}

function getInput_4() {
  let four = document.querySelector(".display_input");
  if (four.value.length == 1 && four.value == 0) {
    four.value = 4;
    return;
  }
  four.value += 4;
}

function getInput_5() {
  let five = document.querySelector(".display_input");
  if (five.value.length == 1 && five.value == 0) {
    five.value = 5;
    return;
  }
  five.value += 5;
}

function getInput_6() {
  let six = document.querySelector(".display_input");
  if (six.value.length == 1 && six.value == 0) {
    six.value = 6;
    return;
  }
  six.value += 6;
}

function getInput_1() {
  let one = document.querySelector(".display_input");
  if (one.value.length == 1 && one.value == 0) {
    one.value = 1;
    return;
  }
  one.value += 1;
}

function getInput_2() {
  let two = document.querySelector(".display_input");
  if (two.value.length == 1 && two.value == 0) {
    two.value = 2;
    return;
  }
  two.value += 2;
}

function getInput_3() {
  let three = document.querySelector(".display_input");
  if (three.value.length == 1 && three.value == 0) {
    three.value = 3;
    return;
  }
  three.value += 3;
}

function getDot() {
  let dot = document.querySelector(".display_input");
  dot.value += ".";
}

function getZero() {
  let zero = document.querySelector(".display_input");
  zero.value += 0;
}

function deleteInput() {
  let del = document.querySelector(".display_input");
  let screen = del.value.slice(0, -1);
  del.value = screen;
}

function getReset() {
  let reset = document.querySelector(".display_input");
  reset.value = 0;
}

function getResult() {
  let result = document.querySelector(".display_input");
  let string = result.value.replace(/×/g, "*"); //globally replace all value of 'x' in string with '*'
  let equals = eval(string);
  result.value = equals;
}

function getPlus() {
  let plus = document.querySelector(".display_input");
  let end_value = plus.value.slice(-1);

  if (
    end_value == "-" ||
    end_value == "*" ||
    end_value == "/" ||
    end_value == "."
  ) {
    let new_value = plus.value.slice(0, -1);
    new_value += "+";
    plus.value = new_value;
    return;
  }
  if (end_value == "+") {
    return;
  }
  plus.value += "+";
}
