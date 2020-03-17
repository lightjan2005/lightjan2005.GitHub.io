// function that includes the choice made by user and computer and displays the result
function pick(gameChoice) {
        // create a variable and call choice function to let the digits become rock, paper, scissors
        var userResult = choice(gameChoice);
        // create a variable and generate a number between 1 and 3
        var computerChoice = Math.floor((Math.random() * 3) + 1);
        // create a variable and call choice function to let the digits become rock, paper, scissors
        var computerResult = choice(computerChoice);
        // Display the results
        document.getElementById("userResult").innerHTML = "You threw " + userResult +";" +" Computer threw " + computerResult;
        // Call comparison function and display the result
        comparison(userResult,computerResult);
  }

  // This is a function to change the decisions into words
  function choice(decision){
        // Let decision 1 be rock and return result
        if (decision == 1){
            var result = "rock";
            return result;
        }
        // Let decision 2 be paper and return result
        else if (decision == 2){
            var result = "paper";
            return result;
        }
        // Let decision 3 be scissors and return result
        else{
            var result = "scissors";
            return result;
        }
  }

  // This is a function to determine who wins and display the result
var userWin = 0;
var comWin = 0;
  function comparison(user,computer){
      
    
      // an if statement when the user chooses Rock
      if (user == "rock"){
          // an if statement when computer chooses rock
          if (computer == "rock"){
              // Display the result
              document.getElementById("endResult").innerHTML = "The result is a tie!";
          }
          // an else if statement when computer chooses paper
          else if (computer == "paper"){
              // Display the result
              document.getElementById("endResult").innerHTML = "Paper wins!(Computer)";
              comWin++;
          }
          // an else statement for scissors
          else{
              //Display the result
              document.getElementById("endResult").innerHTML = "Rock wins!(You)";
              userWin++;
          }
      }
      // an else if statement when the user chooses paper
      else if (user == "paper"){
        // if computer chooses rock
        if (computer == "rock"){
            // Display the result
            document.getElementById("endResult").innerHTML = "Paper wins!(You)";
            userWin++;
        }
        // if computer chooses paper
        else if (computer == "paper"){
            // Display the result
            document.getElementById("endResult").innerHTML = "The result is a tie!";
        }
        // if computer chooses scissors
        else{
            // Display result
            document.getElementById("endResult").innerHTML = "Scissors wins!(Computer)";
            comWin++;
        }
    }
      // an if statement when the user chooses Rock
      else{
        // if computer chooses rock
        if (computer == "rock"){
            // Display result
            document.getElementById("endResult").innerHTML = "Rock wins!(Computer)";
            comWin++;
        }
        // if computer chooses paper
        else if (computer == "paper"){
            // Display result
            document.getElementById("endResult").innerHTML = "Scissors wins!(You)";
            userWin++;
        }
        // if computer chooses scissors
        else{
            // Display result
            document.getElementById("endResult").innerHTML = "The result is a tie!";
        }
    }
    $('#user').html("User Wins: " + userWin);
    $('#computer').html("Computer Wins: " + comWin);
  }