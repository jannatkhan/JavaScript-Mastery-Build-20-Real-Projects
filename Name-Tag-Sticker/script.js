let wrapper = document.getElementsByClassName("wrapper")[0];
let template = document.getElementsByTagName("template")[0];

let names = ["Jannat","Shawon","Maisha"];


let colors = [

  "#5585b5", "#53a8b6", "#5e87b8", "#79c2d0", "#bbe4e9", "#27296d", "#5e63b6",
  "#a393eb", "#f5c7f7", "#dcb5ff", "#d9f2ff", "#a5bdfd", "#77529e", "#5f5dbd",
  "#83cee0", "#ede862", "#fa9856", "#f27370", "#8ea5eb", "#ffedff", "#ffd5be",
  "#352961", "#774181", "#A7F432", "#e6b2c6", "#f6e5e5", "#ff487e", "#ff9776",

];

let sticker = function (name){

    let div = template.content.querySelector("div");
    let nameOfStick = div.querySelector(".name");

    nameOfStick.innerHTML = name;

    div.style.background = colors[Math.floor(Math.random() * colors.length)];

    div.style.transform = "rotate(" + (Math.random() * 40 -20) + "deg)";


    let node = document.importNode(div,true);
    wrapper.appendChild(node)

}


setTimeout(refereshPage,1000);
function refereshPage(){
    location.reload();
}

names.forEach(sticker);