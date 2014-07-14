
<!DOCTYPE html>
<head>
</head>
<body>


<script>
var userChoice = "rock"

//var computerChoice = Math.random();
//if (computerChoice < 0.34) {
//} else if(computerChoice <= 0.67) {
//  computerChoice = "paper";
//} else {
//  computerChoice = "scissors";


for (userChoice, compChoice) {
  if (userChoice === compChoice) {
    return "tie"
  }
  else if (userChoice == "rock") {
    if (compChoice == "paper") {
      return "lose";
    }
    else if (compChoice == "scissors") {
      return "win";
    }
  }
  else if (userChoice == "paper") {
    if (compChoice == "rock") {
      return "win";
    }
    else if (compChoice == "scissors") {
      return "lose"
    }
  }
  else if (userChoice == "scissors") {
    if (compChoice == "rock") {
      return "lose";
    }
    else if (compChoice == "paper") {
      return "win";
    }
  }
}
</script>

</body>
</html>