var input = document.getElementById("result");
var maxlength = 15;
var reset = false;

function insert(num){
resetField();
calc = input.value += num;

  checkNum(calc);

  if(calc > maxlength){
    input.value = calc.slice(0,maxlength);
  }
}

function resetField() {
  if(reset){
    clearAll();
    reset = false;
    input.classList.remove("danger");
  };
}

function checkNum(calc){
  var letters = /[A-z]/;
  if(calc.match(letters))
  {
    input.value="You entered the wrong character";
    input.classList.add("danger");
    reset = true;
  }
}

function sumValues() {
  if (input.value == "" || input.value == 0 ) {
    input.value="Please fill in the field";
    input.classList.add("danger");
    reset = true;
  }

  input.value = eval(input.value);
  reset = true;
}

function clearAll() {
  input.value = '';
}

function clearEntry() {
  input.value = input.value.substring(0, input.value.length - 1);
}
