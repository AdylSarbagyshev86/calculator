// function showText(){
//     let input = document.getElementById("text").value;

//     let number = Number(input);

//     if (number % 2 ===0){
//         document.getElementById("result").textContent = "Четное"
//     } else {
//         document.getElementById("result").textContent = "Нечетное" 
//     }

    
// }
// console.log("JS подключен")
// function showText(){
//     let input = document.getElementById("text").value;

//     let number = Number(input);
//     if(number > 10){
//         document.getElementById("result").textContent = "Больше 10"  
//     }
//     else {
//         document.getElementById("result").textContent = "10 или меньше"

//     }
// }

// function showText(){
//     let input = document.getElementById("text").value;
//     let resultElement = document.getElementById("result")
//     let result = ""

    
//     if (!input) {
//         resultElement.textContent = "Введите число"
        
//     }   else {
//         let number = Number(input);
        
//         if (isNaN(number)){
//             resultElement.textContent = "Ошибка";
//         } 
//         else if (number % 2 ===0){
//             result = "Четное"
            
//         }
//         else {
//             result = "Нечетное"
            
//         } 
//         if (number > 10){
//         result += " и больше 10"

//         resultElement.textContent = result
//     }
    
    // }
    // }
    

    // function showText(){
    //     let input = document.getElementById("text").value
    //     let resultElement = document.getElementById("result")
    //     let result = ""
    //     if(!input){
    //         resultElement.textContent = "Введите число"
    //     }

    //     else {
    //         let number = Number(input)
    //     if (isNaN(number)){
    //         resultElement.textContent = "Ошибка"
    //     }
    //     else if (number % 2 ===0){
    //         result = "Четное"
    //     }
    //     else {
    //         result = "Нечетное"
    //     }
    //     if (number > 10){
    //         result += " и больше 10"
    //         resultElement.textContent = result
    //     }

    // }
    // }
    
//     function calculate(){
//         let num1 = document.getElementById("num1").value
//         let num2 = document.getElementById("num2").value
//         let resultElement = document.getElementById("result");
//         let operation = document.getElementById("operation").value;
//         let result = "";

//     if (!num1 || !num2){
//             resultElement.textContent = "Введите оба числа"
//         return
//     }
//         let number1 = Number(num1);
//         let number2 = Number(num2); 
//             if(isNaN(number1)|| isNaN(number2)){
//                 resultElement.textContent = "Ошибка";
//                 return;
//             }
//             if (operation === "+"){
//                 result = number1 + number2;
//             }
//             else if (operation === "-"){
//                 result = number1 - number2;
//             }
//             else if (operation === "*"){
//                 result = number1 * number2;
//             }
//             else if (operation === "/"){
//                 if (number2 ===0){
//                 resultElement.textContent = "Делить на 0 нельзя";
//                 return;
//             }
//             result = number1 / number2
//         }
    
//     resultElement.textContent = result;
// }

// function calc(){
//     let display = document.getElementById("display").value
//     let press = document.getElementById("press").value
//     let calculate = document.getElementById("calculate").value
//     let clearDisplay = document.getElementById("clearDisplay").value
//     let result ="";
// }
   
// function press(value){
//     let display = document.getElementById("display");
//     display.value +=value;
// }

// function clearDisplay(){
//     let display = document.getElementById("display");
//     display.value = "";
// }

// function calculate(){
//     let display = document.getElementById("display");
//     display.value = eval(display.value)
// }
    //  function calc(){
//     let display = document.getElementById("display").value
//     let press = document.getElementById("press").value
//     let clearDisplay = document.getElementById("clearDisplay").value
//     let calculate = document.getElementById("calculate").value
//     }
//     function press(value){
//         let display = document.getElementById("display");
//         display.value += value;
//     }

//     function clearDisplay(){
//     let display = document.getElementById("display");
//     display.value = "";
//     }
    
    
//     function press(value){
//         let display = document.getElementById("display");
//         if (value === "+" && display.value[display.value.length -1] === "+"){
//             return;
//         }
//         if (value === "-" && display.value[display.value.length -1] === "-"){
//             return;
//         }
//         if (value === "*" && display.value[display.value.length -1] === "*"){
//             return;
//         }
//         if (value === "/" && display.value[display.value.length -1] === "/"){
//             return;
//         }
//         display.value += value;
//     }

    
    
// function calculate(){
//     let display = document.getElementById("display");
//     try {
//         display.value = eval(display.value);
//     } catch {
//         display.value = "Ошибка";
//     }
//     }

//     function press(value) {
//         let display = document.getElementById("display");
//         let lastChar = display.value[display.value.length - 1];
//         let isOperator = (value === "+" || value === "-" || value === "*" || value === "/");
//         let isLastOperator = (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/");
    
//         if (display.value === "" && isOperator) {
//             return;
//         }

//         if (isOperator && isLastOperator) {
//             return;
//         }
    
//         display.value += value;
//     }

//     function deleteLast(){
//         let display = document.getElementById("display");
//             if(value === "")
            
//             display.value = display.value.slice(0, display.value.length - 1 )
//     }
// 


// function press(value) {
//     let display = document.getElementById("display");
//     if(display.value === "Ошибка"){
//         display.value = "";
//     }
// }
 
// // до сюда ты уже объяснил, объясни код ниже

// let lastChar = display.value[display.value.length - 1];

// let isOperator = (value === "+" || value === "-" || value === "*" || value === "/");
// let isLastOperator = (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/");


// if (display.value === "" && isOperator) {
//     return;
// }


// if (isOperator && isLastOperator) {
//     return;
// }

// display.value += value;

// // следующий код

// function calculate(){
//     let display = document.getElementById("display");

//     try {
//         display.value = eval(display.value);
//     } catch {
//         display.value = "Ошибка";
//     }
// }

// function clearDisplay(){
//     let display = document.getElementById("display");
//     display.value = "";
// }

// function deleteLast(){
//     let display = document.getElementById("display");
//     function deleteLast(){
//         let display = document.getElementById("display");
    
//         if (display.value === "") {
//             return;
//         }
    
//         display.value = display.value.slice(0, display.value.length - 1);
//     }
// }

function press(value) {
    let display = document.getElementById("display");
    let isOperator = (value === "+" || value === "-" || value === "*" || value === "/");
    if(display.value === "Ошибка") {
        display.value = "";
    }
    if(display.value === "0" && !isOperator){
        display.value = value;
        return;
    }
    
    
let lastChar = display.value[display.value.length -1];
let isLastOperator = (lastChar === "+"|| lastChar === "-" || lastChar === "*" || lastChar === "/");
if(display.value === "" && isOperator){
    return;
}
if (isOperator && isLastOperator) {
    return;
}
display.value += value;
}
function deleteLast(){
    let display = document.getElementById("display");
    if(display.value === "") {
        return;
    }
    display.value = display.value.slice(0, display.value.length -1);
}
function clearDisplay(){
    let display = document.getElementById("display");
    display.value ="0"
    console.log("C нажата")
}
function calculate(){
    let display = document.getElementById("display");

    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Ошибка";
    }
}


