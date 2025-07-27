"use strict";
let counterInput = document.getElementById('counterInput');
let counterShow  = document.getElementById('counterShow');
let counterStart = document.getElementById('counterStart');
let counterStop  = document.getElementById('counterStop');
let stopInterval = false;

counterStop.disabled = true;

counterStop.addEventListener('click', () => {
    counterStart.disabled = false;
    counterStop.disabled = true;
    stopInterval = true;
    
})

counterStart.addEventListener('click', function () {


    let countValue = counterInput.value;

    counterStart.disabled = true;
    counterStop.disabled = false;  

    let counterInterval = setInterval(() => {
        
        if (stopInterval || countValue <= 0) {
            clearInterval(counterInterval);
            counterStart.disabled = false;
            counterStop.disabled = true;
            stopInterval = false;
        }

        countValue -= 1;
        counterShow.innerHTML = countValue;

    }, 1000);

})


counterInput.addEventListener('input', () => {
    counterShow.innerHTML = counterInput.value;
})