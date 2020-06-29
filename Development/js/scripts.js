//First Exercise
let food = ["Pizza", "burger", "Sushi"];


let expression = prompt("What would you like to order? ");

switch(expression) {
    case "1":
      console.log(food[0])
      break;
    case "2":
        console.log(food[1])
      break;
      case "3":
        console.log(food[2])
      break;
    default:
      console.log("food not available")
  }
  //second exercise


let num1 = prompt("Enter a number");
let num2 = prompt("Enter Second number");
let exp = prompt("Enter an expression")

switch(num1,num2, exp) {
    case "*":
      console.log(num1 * num2)
      break;
    case "+":
        console.log(parseInt(num1) + parseInt(num2))
      break;
      case "-":
        console.log(parseInt(num1) - parseInt(num2))
      break;
      case "/":
        console.log(parseInt(num1) / parseInt(num2))
      break;
    default:
      console.log("Wrong number")
}


//Third Exercise

age = prompt("Enter your age");

if(age > 18){
    console.log("You are in university");
} else if(age < 4){
    console.log("you are in pre school");
}else if(age >10 < 18){
    console.log("you are in High school");}
