const display =
  document.getElementById("display");

/* APPEND VALUE */

function appendValue(value) {

  display.value += value;

}

/* CLEAR */

function clearDisplay() {

  display.value = "";

}

/* DELETE */

function deleteLast() {

  display.value =
    display.value.slice(0, -1);

}

/* CALCULATE */

function calculate() {

  try {

    display.value =
      eval(display.value);

  }

  catch {

    display.value = "Error";

  }

}
