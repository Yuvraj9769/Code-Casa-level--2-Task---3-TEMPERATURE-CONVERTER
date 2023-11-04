let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");
let sub = document.getElementsByClassName("sub")[0];

celsius.addEventListener("input", () => {
    if (document.getElementById("celsius").value == "") {
        fahrenheit.value = "";
        kelvin.value = "";
        return;
    }
    
    let celsius = Number.parseFloat(document.getElementById("celsius").value);
    fahrenheit.value = Math.round((((9 / 5) * celsius) + 32) * 100) / 100;
    kelvin.value = Math.round((celsius + 273.15) * 100) / 100;
})

fahrenheit.addEventListener("input", () => {
    if (document.getElementById("fahrenheit").value == "") {
        celsius.value = "";
        kelvin.value = "";
        return;
    }
    let fahrenheit = Number.parseFloat(document.getElementById("fahrenheit").value);
    celsius.value = Math.round(((fahrenheit - 32) * (5 / 9)) * 100) / 100;
    kelvin.value = Math.round(((fahrenheit - 32) * (5 / 9) + 273.15) * 100) / 100;
})

kelvin.addEventListener("input", () => {
    if (document.getElementById("kelvin").value == "") {
        celsius.value = "";
        fahrenheit.value = "";
        return;
    }
    let kelvin = Number.parseFloat(document.getElementById("kelvin").value);
    celsius.value = Math.round((kelvin - 273.15) * 100) / 100;
    fahrenheit.value = Math.round(((kelvin - 273.15) * (9 / 5) + 32) * 100) / 100;
})

sub.addEventListener("click", () => {
    celsius.value = "";
    fahrenheit.value = "";
    kelvin.value = "";
})