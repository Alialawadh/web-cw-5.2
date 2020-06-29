
let choice = prompt("ماذا تحب ان تاكل");


switch(choice) {
    case "1":
       console.log("بيتزا");
      break;
    case "2":
        console.log("تحب البييرقر ");
      break;
    default:
        console.log("ما تحب تاكل شي");
  }



  let number1 =  parseInt(prompt("ادخل الرقم الاول"))

  let number2= parseInt(prompt("ادخل الرقم الثاني"))

  let calculation = prompt("+,-,*,/")
  if (number1 && number2){
        console.log("wrong")
  if  (calculation == "+"){
      console.log(number1 + number2);
  }else if (calculation == "-"){
    console.log(number1 - number2);
  }else if (calculation == "*"){
    console.log(number1 * number2);
  }else  if (calculation == "/"){
    console.log(number1 / number2);
  }
  else {
      console.log("wrong")
  }

}


let age = parseInt(prompt("ادخل عمرك"))

if (age < 5) {
    console.log("روضه");
}
else if (5 < age < 18){
    console.log("مدرسه");
}
else {
    console.log(جامعه);
}