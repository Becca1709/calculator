//GLOBAL SCOPE
const display=document.getElementById("display");
//LOCAL SCOPE
function appendToDisplay (input) {
  display.value += input;
}

function clearDisplay () {
  display.value = " ";
}

function calculate(){
  try{
    display.value =eval(display.value);
  }
  catch (error){
    display.value ="Error"
  }
}
//LOCAL SCOPE
function printOp() {
  //BLOCK SCOPE
  if (display.value!=="" && display.value!==" " && display.value!=="Error"){ 
    calculate()
  } else if (display.value!== NaN){
  appendToDisplay(" 0");
}
}

/* pero si la function calculate ya se uso limpiar antes de volver a calcular.*/