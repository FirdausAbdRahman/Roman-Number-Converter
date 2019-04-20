let convertButton = document.getElementById("convert");

function convertToRoman(num) {
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

convertButton.addEventListener("click", function(){
  'use strict';

  let value = document.getElementById("input").value;
  let answer = document.getElementById("answer");

  if(convertToRoman(value)){
     answer.innerHTML= "Result: " + convertToRoman(value);
  }else if(convertToRoman(value === "")){
    answer.innerHTML = "Please enter the number";
  }else if(convertToRoman(value === "0")){
    answer.innerHTML ="Romans have no concept of zero.";
  }else if(convertToRoman(value < "0")){
    answer.innerHTML = "This doesn\'t work for negative numbers.";
  }
  else{
    answer.innerHTML="Sorry, this simple app can only convert number to roman, not the other way around.";
  }

})
