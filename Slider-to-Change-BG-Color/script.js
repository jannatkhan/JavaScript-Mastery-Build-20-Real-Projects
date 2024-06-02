
const body = document.body;
const range = document.getElementById("_range");
const number = document.getElementById("rangeValue");


function updateStyle(){

    const value = Number(number.innerText);

    if(value >= 90){
        applyStyles('#000',"#1f6f78");
    }else if(value >= 70){
        applyStyles('#333',"#118a7e");
    }else if (value >= 50) {
        applyStyles("#555", "#3baea0");
    } else if (value >= 25) {
        applyStyles("#fff", "#93e4c1");
    } else if (value === 0) {
        applyStyles("#555", "#9bf4d5");
    }

}

function applyStyles(color,backgroundColor){
    number.style.color = color;
    body.style.backgroundColor = backgroundColor;

}

range.addEventListener("input",function(){

    const sliderValue = Math.min(this.value,100);
    number.innerText = sliderValue;

    updateStyle();
});