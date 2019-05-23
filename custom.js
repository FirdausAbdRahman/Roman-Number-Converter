const input = document.getElementById("input1");
const input2 = document.getElementById("input2");

const convertToRoman = (num) =>{
  'use strict';
  let decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  let romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  let romanized = '';

  for (let i = 0; i < decimalValue.length; i++) {
    //get the value inside decimalValue (ex: 40>36 -> cannot, 10<36 -> yes)
    //while the num is lower than decimalValue, it will keep looping
    while (decimalValue[i] <= num) {
    //get the value inside romanNumeral
    //ex: X; XX; XXX; XXXV; XXXVI
      romanized += romanNumeral[i];
    //ex: 36-10->26 ; 26-10->16 ; 16-10->6 ; 6-5->1 ; 1-1->0
      num -= decimalValue[i];
    }
  }
  return romanized;
}

const convertToNum = (romanInput) => {
  'use strict';
  let romans = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  };
  // convert input string to array
  let romArr = romanInput.split("");

  // reducer function
  let reducer = (accumulator, currentValue, currentIndex) => {
    if (accumulator === 0) {
      // this will run first if inital value is set to zero
      return accumulator + romans[currentValue];
    }
    // if previous numeral is greater or equal in value than current, add current value to accumulator - normal behaviour
    else if (romans[romArr[currentIndex - 1]] >= romans[currentValue]) {
    return accumulator + romans[currentValue];
    } else {
    // otherwise previous numeral must be lower in value, so the subtraction rule must be implemented
    // remove the previous value from the accumulator to cancel the previous operation,
    // then add the current value - minus the previous value again, hence the x2
    let res = accumulator - 2 * romans[romArr[currentIndex - 1]] + romans[currentValue];
    return res;
      }
    };
    let result = romArr.reduce(reducer, 0);
    return result;
}


const convertInput = () =>{
'use strict';

  let value = document.getElementById("input1").value;
  value = parseInt(value);
  let answer = document.getElementById("answer1");
  if(convertToRoman(value)){
     answer.innerHTML= "Answer: " + convertToRoman(value);
     answer.style = 'color: black';
  }else if(value === 0){
    answer.innerHTML ="No concept of zero";
    answer.style = 'color: red';
  }else if(convertToRoman(value < 0)){
    answer.innerHTML = "No concept of negative numbers";
    answer.style = 'color: red';
  }
  else{
    answer.innerHTML="";
  }
}


const convertInput2 = () =>{
  'use strict';
    let value2 = document.getElementById("input2").value.toUpperCase();
    let answer2 = document.getElementById("answer2");
    if(convertToNum(value2)){
       answer2.innerHTML= "Answer: " + convertToNum(value2);
    }else{
      answer2.innerHTML= "";
    }
  }

input.addEventListener("keyup", convertInput);
input2.addEventListener("keyup", convertInput2);
