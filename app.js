var btnTranslate = document.querySelector('#btn-translate');
var textInput = document.querySelector("#txt-input");

btnTranslate.addEventListener("click",function clickEventHandler(){
    console.log("clicked");
    console.log(textInput.value);
})

