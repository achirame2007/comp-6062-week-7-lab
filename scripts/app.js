let element = document.querySelector("#numberInput");
console.log(element.value);
element.addEventListener("input", function(){
    if(element.value > 10 || element.value < -10)
    {
        alert("The element should be between -10 and 10");
    }
});

const fruit = {
    Name: "Mango",
    Color: "Yellow",
    Taste: "Sweet"
};

let element1 = document.querySelector("#fruitName");
let element2 = document.querySelector("#fruitColor");
let element3 = document.querySelector("#fruitTaste");

element1.innerHTML = "Name: " + fruit.Name;
element2.innerHTML = "Color: " + fruit.Color;
element3.innerHTML = "Taste: " + fruit.Taste;