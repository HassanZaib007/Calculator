var value = "";

function addvalue(digit) {
    value += digit
    document.getElementById("input").innerHTML = value;
}

function calc() {
    let calcuatedvalue = eval(value)
    document.getElementById("input").innerHTML = calcuatedvalue;
    value = "";
}

function clearr() {
    document.getElementById("input").innerHTML = "";
    value = "";
}

