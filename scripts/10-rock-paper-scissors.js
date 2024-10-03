          // default operator 
          // if the left side is truthy we will use the left side as score or 
          // if the left side is falsy that is null we will use right side as score 
          let score = JSON.parse(localStorage.getItem('score')) || {
            wins : 0,
            losses : 0,
            ties : 0
          };

          updateScoreElement();


          // it does the same thing as the code block above 
        /*
        if(!score) {
          score = {
            wins : 0,
            losses : 0,
            ties : 0
          };
        }
        */ 

        // if we define a variable in a function we can't access it from everywhere but
        // if we define it in <script> element it would be global variable and we can access from everywhere

        function playGame (ourMove) {
          
          const computerMove = pickComputerMove();

          let result = '';
          if(ourMove === 'scissors') {
            if(computerMove === 'rock'){
              result = 'You lose.';
            }else if(computerMove === 'paper'){
              result = 'You win.';
            }else {
              result = 'Tie.';
            }
          }else if(ourMove === 'paper'){
            if(computerMove === 'rock'){
              result = 'You win.';
            }else if(computerMove === 'paper'){
              result = 'Tie.';
            }else { 
              result = 'You lose.';
            }
          }else if(ourMove === 'rock'){
            if(computerMove === 'rock'){
              result = 'Tie.';
            }else if(computerMove === 'paper'){
              result = 'You lose.';
            }else {
              result = 'You win.';
            }
          }

          if (result === 'You win.'){
            score.wins++;
          }else if (result === 'You lose.'){
            score.losses++;
          }else if (result === 'Tie.'){
            score.ties++;
          }

          // localStorage only supports string so we have to convert score object to JSON 
          localStorage.setItem('score',JSON.stringify(score));

          
          updateScoreElement();

          document.querySelector('.js-result').innerHTML = result;

          document.querySelector('.js-moves').innerHTML = `You 
          <img src = "images/${ourMove}-emoji.png" class="move-icon">
          <img src = "images/${computerMove}-emoji.png" class="move-icon"> Computer`;

        }

        function updateScoreElement() {

          document.querySelector('.js-score')
              .innerHTML = `Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`; 
        }
        

        function pickComputerMove () {

          let computerMove = '';

          const randomNumber = Math.random();
          
          if(0 <= randomNumber && randomNumber < 1/3) {
            computerMove = 'rock';
          }else if(1/3 <= randomNumber && randomNumber < 2/3) {
            computerMove = 'paper';
          }else{
            computerMove = 'scissors';
          }

          return computerMove;
        }