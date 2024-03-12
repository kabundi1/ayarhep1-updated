let valueDisplay = document.querySelectorAll(".num");
let interval = 2000; // Adjust the interval duration (in milliseconds)

valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duratation = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duratation); // Use duratation instead of interval for smoother animation
});