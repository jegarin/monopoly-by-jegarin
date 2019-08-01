
//  Player 1 Name and Cash
const player1Name = document.getElementById('player1-name');
const player1Cash = document.getElementById('player1-amount');
//  Player 2 Name and Cash
const player2Name = document.getElementById('player2-name');
const player2Cash = document.getElementById('player2-amount');
//  Player 3 Name and Cash
const player3Name = document.getElementById('player3-name');
const player3Cash = document.getElementById('player3-amount');
//  Player 4 Name and Cash
const player4Name = document.getElementById('player4-name');
const player4Cash = document.getElementById('player4-amount');
// Text Area
const textArea = document.getElementById('display-action');
// const body = document.getElementById('body-id');
const startBtn = document.getElementById('start-btn');
const playersList = document.querySelectorAll('.players');
playersList.forEach((player) => {
  player.style.display = 'none';
})


startBtn.onclick = function() {
  player1.setPlayer1();
  player2.setPlayer2();
  player3.setPlayer3();
  player4.setPlayer4();  
  rollBtnP1.style.display = 'block';
  rollBtnP2.style.display = 'none';
  rollBtnP3.style.display = 'none';
  rollBtnP4.style.display = 'none';
  playersList.forEach((player) => {
    player.style.display = 'block';
  })
  textArea.value += `Let\'s Play!
  
`;
}

const rollBtnP1 = document.getElementById('roll-btn-player1');
rollBtnP1.onclick = function() {
  player1.move();
  player1.displayInfo();
  rollBtnP1.style.display = 'none';
  if(player2.cash <= 0){
    rollBtnP2.style.display = 'none';
    if(player3.cash <= 0){
      rollBtnP3.style.display = 'none';
      if(player4.cash <= 0){
        rollBtnP4.style.display = 'none';
        //  function to end the game
        console.log('end of the game')
      } else {
          rollBtnP4.style.display = 'block';
      } 
    } else {
        rollBtnP3.style.display = 'block';
    }
  } else {
    rollBtnP2.style.display = 'block';
  }
}  

const rollBtnP2 = document.getElementById('roll-btn-player2');
rollBtnP2.onclick = function() {
  player2.move();
  player2.displayInfo();
  rollBtnP2.style.display = 'none';
  if(player3.cash <= 0){
    rollBtnP3.style.display = 'none';
    if(player4.cash <= 0){
      rollBtnP4.style.display = 'none';
      if(player1.cash <= 0){
        rollBtnP1.style.display = 'none';
        //  function to end the game
        console.log('end of the game')
      } else {
          rollBtnP1.style.display = 'block';
        } 
    } else {
        rollBtnP4.style.display = 'block';
      }
  } else {
    rollBtnP3.style.display = 'block';
    }  
}

const rollBtnP3 = document.getElementById('roll-btn-player3');
rollBtnP3.onclick = function() {
  player3.move();
  player3.displayInfo();
  rollBtnP3.style.display = 'none';
  if(player4.cash <= 0){
    rollBtnP4.style.display = 'none';
    if(player1.cash <= 0){
      rollBtnP1.style.display = 'none';
      if(player2.cash <= 0){
        rollBtnP2.style.display = 'none';
        //  function to end the game
        console.log('end of the game')
      } else {
          rollBtnP2.style.display = 'block';
        } 
    } else {
        rollBtnP1.style.display = 'block';
      }
  } else {
    rollBtnP4.style.display = 'block';
    }  
}

const rollBtnP4 = document.getElementById('roll-btn-player4');
rollBtnP4.onclick = function() {
  player4.move();
  player4.displayInfo();
  rollBtnP4.style.display = 'none';
  if(player1.cash <= 0){
    rollBtnP1.style.display = 'none';
    if(player2.cash <= 0){
      rollBtnP2.style.display = 'none';
      if(player3.cash <= 0){
        rollBtnP2.style.display = 'none';
        //  function to end the game
        console.log('end of the game')
      } else {
          rollBtnP3.style.display = 'block';
        } 
    } else {
        rollBtnP2.style.display = 'block';
      }
  } else {
    rollBtnP1.style.display = 'block';
    }  
}

class Player {
  constructor(turn, name, color) {
    this.turn = turn;
    this.name = name;
    this.color = color;
    this.position = 0;
    this.cash = 1500;
  }

  setPlayer1() {
    player1Name.textContent = this.name;
    player1Name.style.color = this.color;
    player1Cash.textContent = this.cash;
    let oldSquare = 'sqr-' + this.position;
    let oldPosition = document.getElementById(oldSquare);

    // player 1 initial setting
    let player1Square = document.createElement('div');
    player1Square.setAttribute('id', 'player1-square');
    oldPosition.appendChild(player1Square);

    // startBtn.style.display = 'none';
  }

  setPlayer2() {
    player2Name.textContent = this.name;
    player2Name.style.color = this.color;
    player2Cash.textContent = this.cash;
    let oldSquare = 'sqr-' + this.position;
    let oldPosition = document.getElementById(oldSquare);
    
    //  player 2 initial setting
    let player2Square = document.createElement('div');
    player2Square.setAttribute('id', 'player2-square');
    oldPosition.appendChild(player2Square);
    // startBtn.style.display = 'none';
  }

  setPlayer3() {
    player3Name.textContent = this.name;
    player3Name.style.color = this.color;
    player3Cash.textContent = this.cash;
    let oldSquare = 'sqr-' + this.position;
    let oldPosition = document.getElementById(oldSquare);
    
    //  player 3 initial setting
    let player3Square = document.createElement('div');
    player3Square.setAttribute('id', 'player3-square');
    oldPosition.appendChild(player3Square);
  }

  setPlayer4() {
    player4Name.textContent = this.name;
    player4Name.style.color = this.color;
    player4Cash.textContent = this.cash;
    let oldSquare = 'sqr-' + this.position;
    let oldPosition = document.getElementById(oldSquare);
    
    //  player 4 initial setting
    let player4Square = document.createElement('div');
    player4Square.setAttribute('id', 'player4-square');
    oldPosition.appendChild(player4Square);

    startBtn.style.display = 'none';
  }

  move() {
    const dice = 1 + Math.floor(Math.random() * 6);
    console.log(dice);
    const pos1 = this.position;
    this.position = (this.position + dice) % square.length;
    
    this.printCardName();

    // analyze the current position, and take an action.
    let cardGroup = square[this.position].group;
    console.log(cardGroup)
    switch (cardGroup) {
      case 'group-communitychest':
        pickCommunityChest(this);
        break;

      case 'group-chance':
        pickChance(this);
        break;

      case 'group-tax':
        if(this.position === 9) {
          incomeTax(this);
        } else if (this.position === 18) {
          luxuryTax(this);
        };
        break;

      case 'group-go-jail':
        this.moveAction(-10);
        break;

      case 'group-go':
        this.updateCash(200);
        break;

      case 'group-jail':
        this.updateCash(-200);
        break;

      case 'group-blue':
        console.log('this is house is on the blue zone. You must pay $100.');
        blueTitleDeed(this);
        break;

      case 'group-red':
        console.log('this is house is on the red zone. You must pay $125.');
        redTitleDeed(this);
        break;

      case 'group-purple':
        console.log('this is house is on the purple zone. You must pay $150.');
        purpleTitleDeed(this);
        break;

      case 'group-green':
        console.log('this is house is on the green zone. You must pay $175.');
        greenTitleDeed(this);
        break;

      default:
        console.log('Essa square é uma propriedade sem função ainda');
    }

    //invoke these fuctions after check  the square/card description and actions to be taken
    
    // this.updatePos(pos1, this.position);
    if (this.turn === 1) {
      this.updatePosPlayer1(pos1, this.position);
      this.updatePlayer1Cash();
    } else if (this.turn === 2) {
      this.updatePosPlayer2(pos1, this.position);
      this.updatePlayer2Cash();
    } else if (this.turn === 3) {
      this.updatePosPlayer3(pos1, this.position);
      this.updatePlayer3Cash();
    } else if (this.turn === 4) {
      this.updatePosPlayer4(pos1, this.position);
      this.updatePlayer4Cash();
    }  


    this.checkIfPassedGo(pos1, this.position);

    
    // this.checkGameOver();
  
  };

  updateCash(amount) {
    console.log('the cash is: ' + this.cash + ' the amount is: ' + amount)
    this.cash += amount;
    // if (amount < 0) {
    //   amount -= 2 * amount;
    //   textArea.value += `${this.name} pay ${amount}`
    // } else if (amount > 0) {
    //   textArea.value += `${this.name} you earned ${amount}`
    // } else {
    //   textArea.value += `${this.name} you earned ${amount}`
    // };
  }

  moveAction(positions) {
    console.log('the position is: '+ this.position + ' the amount is: ' + positions);
    this.position += positions;
  }
  
  moveToGo() {
    this.position = 0;
    this.updateCash(200);
  }

  checkIfPassedGo(pos1, pos2) {
    if(pos2 < pos1) {
      this.updateCash(200);
      console.log('passou pelo GO');
    }
  }

  updatePosPlayer1(pos1, pos2) {
    // remove #player-square at old position
    let playerOldSquare = 'sqr-' + pos1;
    let playerOldPosition = document.getElementById(playerOldSquare);
    let child = playerOldPosition.querySelector('#player1-square');
    playerOldPosition.removeChild(child);

    // update #player-square at new position
    let playerNewSquare = 'sqr-' + pos2;
    let playerNewPosition = document.getElementById(playerNewSquare);
    let playerSquare = document.createElement('div');
    playerSquare.setAttribute('id', 'player1-square');
    playerNewPosition.appendChild(playerSquare);
  }

  updatePosPlayer2(pos1, pos2) {
    // remove #player-square at old position
    let playerOldSquare = 'sqr-' + pos1;
    let playerOldPosition = document.getElementById(playerOldSquare);
    let child = playerOldPosition.querySelector('#player2-square');
    playerOldPosition.removeChild(child);

    // update #player-square at new position
    let playerNewSquare = 'sqr-' + pos2;
    let playerNewPosition = document.getElementById(playerNewSquare);
    let playerSquare = document.createElement('div');
    playerSquare.setAttribute('id', 'player2-square');
    playerNewPosition.appendChild(playerSquare);
  }

  updatePosPlayer3(pos1, pos2) {
    // remove #player-square at old position
    let playerOldSquare = 'sqr-' + pos1;
    let playerOldPosition = document.getElementById(playerOldSquare);
    let child = playerOldPosition.querySelector('#player3-square');
    playerOldPosition.removeChild(child);

    // update #player-square at new position
    let playerNewSquare = 'sqr-' + pos2;
    let playerNewPosition = document.getElementById(playerNewSquare);
    let playerSquare = document.createElement('div');
    playerSquare.setAttribute('id', 'player3-square');
    playerNewPosition.appendChild(playerSquare);
  }

  updatePosPlayer4(pos1, pos2) {
    // remove #player-square at old position
    let playerOldSquare = 'sqr-' + pos1;
    let playerOldPosition = document.getElementById(playerOldSquare);
    let child = playerOldPosition.querySelector('#player4-square');
    playerOldPosition.removeChild(child);

    // update #player-square at new position
    let playerNewSquare = 'sqr-' + pos2;
    let playerNewPosition = document.getElementById(playerNewSquare);
    let playerSquare = document.createElement('div');
    playerSquare.setAttribute('id', 'player4-square');
    playerNewPosition.appendChild(playerSquare);
  }

  updatePlayer1Cash(){
    // const player1Amount = document.querySelector('#player1-amount');
    // player1Amount.innerHTML = this.cash;
    player1Cash.innerHTML = this.cash;
  }
  
  updatePlayer2Cash(){
    // const player2Amount = document.querySelector('#player2-amount');
    // player2Amount.innerHTML = this.cash;
    player2Cash.innerHTML = this.cash;
  }

  updatePlayer3Cash(){
    // const player2Amount = document.querySelector('#player2-amount');
    // player2Amount.innerHTML = this.cash;
    player3Cash.innerHTML = this.cash;
  }

  updatePlayer4Cash(){
    // const player2Amount = document.querySelector('#player2-amount');
    // player2Amount.innerHTML = this.cash;
    player4Cash.innerHTML = this.cash;
  }

  printCardName() {
    let cardName = square[this.position].name;
    // let displayCardName = document.getElementById('display-action');
    // let p = document.createElement('p'); + cardName;
    textArea.value += `Hey ${this.name} you are at: ${cardName}

`;

    // textArea.insertAdjacentHTML('beforeend', 'Hey ' + this.name + ' you are at: ' + cardName + '<br>');
    // displayCardName.appendChild(p);
    // setTimeout(function() {displayCardName.removeChild(p);}, 3000);
  }

  displayInfo() {
    console.log(`${this.name} is at position ${this.position} and has $ ${this.cash}`);
  }

  checkGameOver() {
    if (this.cash <= 0) {
      // console.log('Hey ' + ${this.name} + '! You lost all you money! LOL. See you next time.');
      alert('Hey ' + this.name + '! You lost all you money! LOL. See you next time.');
      if(this.turn === 1) {
        const childEl = document.querySelector('#player1-name').parentElement.parentElement;
        const parentEl = childEl.parentElement;
        parentEl.removeChild(childEl);
      }
    }
  }
  
};


const cardDescription = document.querySelectorAll('.square');


cardDescription.forEach((card) => {
  card.onmouseover = (e) => {
    e.currentTarget.children[1].removeAttribute('hidden');
  }
})

cardDescription.forEach((card) => {
  card.onmouseout = (e) => {
    e.currentTarget.children[1].setAttribute('hidden', ' ');
  }
})

const player1 = new Player(1, 'Jeff', 'orange');
const player2 = new Player(2, 'Bill', 'blue');
const player3 = new Player(3, 'Elon', 'brown');
const player4 = new Player(4, 'Mark', '#e600e6');

var textarea = document.getElementById('display-action');
setInterval(function(){
  textarea.scrollTop = textarea.scrollHeight;
}, 100);