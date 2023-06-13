function convert() {
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const inputUnit = document.getElementById("inputUnit").value;
  const outputUnit = document.getElementById("outputUnit").value;

  let result;

  switch (inputUnit) {
    case "cm":
      if (outputUnit === "m") {
        result = inputValue / 100;
      } else if (outputUnit === "km") {
        result = inputValue / 100000;
      } else if (outputUnit === "in") {
        result = inputValue / 2.54;
      } else if (outputUnit === "ft") {
        result = inputValue / 30.48;
      } else if (outputUnit === "mi") {
        result = inputValue / 160934;
      } else {
        result = inputValue;
      }
      break;

    case "m":
      if (outputUnit === "cm") {
        result = inputValue * 100;
      } else if (outputUnit === "km") {
        result = inputValue / 1000;
      } else if (outputUnit === "in") {
        result = inputValue * 39.37;
      } else if (outputUnit === "ft") {
        result = inputValue * 3.281;
      } else if (outputUnit === "mi") {
        result = inputValue / 1609;
      } else {
        result = inputValue;
      }
      break;

    case "km":
      if (outputUnit === "cm") {
        result = inputValue * 100000;
      } else if (outputUnit === "m") {
        result = inputValue * 1000;
      } else if (outputUnit === "in") {
        result = inputValue * 39370;
      } else if (outputUnit === "ft") {
        result = inputValue * 3281;
      } else if (outputUnit === "mi") {
        result = inputValue / 1.609;
      } else {
        result = inputValue;
      }
      break;

    case "in":
      if (outputUnit === "cm") {
        result = inputValue * 2.54;
      } else if (outputUnit === "m") {
        result = inputValue / 39.37;
      } else if (outputUnit === "km") {
        result = inputValue / 39370;
      } else if (outputUnit === "ft") {
        result = inputValue / 12;
      } else if (outputUnit === "mi") {
        result = inputValue / 63360;
      } else {
        result = inputValue;
      }
      break;

    case "ft":
      if (outputUnit === "cm") {
        result = inputValue * 30.48;
      } else if (outputUnit === "m") {
        result = inputValue / 3.281;
      } else if (outputUnit === "km") {
        result = inputValue / 3281;
      } else if (outputUnit === "in") {
        result = inputValue * 12;
      } else if (outputUnit === "mi") {
        result = inputValue / 5280;
      } else {
        result = inputValue;
      }
      break;

    case "mi":
      if (outputUnit === "cm") {
        result = inputValue * 160934;
      } else if (outputUnit === "m") {
        result = inputValue * 1609;
      } else if (outputUnit === "km") {
        result = inputValue * 1.609;
      } else if (outputUnit === "in") {
        result = inputValue * 63360;
      } else if (outputUnit === "ft") {
        result = inputValue * 5280;
      } else {
        result = inputValue;
      }
      break;

    case "g":
      if (outputUnit === "kg") {
        result = inputValue / 1000;
      } else if (outputUnit === "oz") {
        result = inputValue * 0.035274;
      } else if (outputUnit === "lb") {
        result = inputValue * 0.00220462;
      } else {
        result = inputValue;
      }
      break;

    case "kg":
      if (outputUnit === "g") {
        result = inputValue * 1000;
      } else if (outputUnit === "oz") {
        result = inputValue * 35.274;
      } else if (outputUnit === "lb") {
        result = inputValue * 2.20462;
      } else {
        result = inputValue;
      }
      break;

    case "oz":
      if (outputUnit === "g") {
        result = inputValue / 0.035274;
      } else if (outputUnit === "kg") {
        result = inputValue / 35.274;
      } else if (outputUnit === "lb") {
        result = inputValue / 16;
      } else {
        result = inputValue;
      }
      break;

    case "lb":
      if (outputUnit === "g") {
        result = inputValue / 0.00220462;
      } else if (outputUnit === "kg") {
        result = inputValue / 2.20462;
      } else if (outputUnit === "oz") {
        result = inputValue * 16;
      } else {
        result = inputValue;
      }
      break;
  }

  document.getElementById(
    "output"
  ).innerHTML = `${inputValue} ${inputUnit} = ${result} ${outputUnit}`;
}
