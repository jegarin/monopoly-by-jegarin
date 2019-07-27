
const playerName = document.getElementById('player1-name');
const playerCash = document.getElementById('player1-amount');

const startBtn = document.getElementById('start-btn');
startBtn.onclick = function() {
  player1.set();  
}

const rollBtn = document.getElementById('roll-btn');
rollBtn.onclick = function() {
  player1.move();
  player1.displayInfo();
}

class Player {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.position = 0;
    this.cash = 1500;
  }

  set() {
    playerName.textContent = this.name;
    playerName.style.color = this.color;
    playerCash.textContent = this.cash;
    let oldSquare = 'sqr-' + this.position;
    let oldPosition = document.getElementById(oldSquare);
    let player1Square = document.createElement('div');
    player1Square.setAttribute('id', 'player1-square');
    oldPosition.appendChild(player1Square);
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

      case 'group-blue':
        console.log('this is house is on the blue zone. You must pay $100.');
        blueTitleDeed(this);
        break;

      case 'group-red':
        console.log('this is house is on the red zone. You must pay $125.');
        break;

      case 'group-purple':
        console.log('this is house is on the purple zone. You must pay $150.');
        break;

      case 'group-green':
        console.log('this is house is on the green zone. You must pay $175.');
        break;

      default:
        console.log('Essa square é uma propriedade sem função ainda');
    }

    //invoke these fuctions after check  the square/card description and actions to be taken
    this.updatePos(pos1, this.position);
    this.checkIfPassedGo(pos1, this.position);

    this.updatePlayer1Cash();

    if (this.cash < 0) {
      console.log('Game over for' + this.name);
    }
  };

  updateCash(amount) {
    console.log('the cash is: ' + this.cash + ' the amount is: ' + amount)
    this.cash += amount;
  }

  moveAction(positions) {
    console.log('the position is: '+ this.position + ' the amount is: ' + positions);
    this.position += positions;
  }

  checkIfPassedGo(pos1, pos2) {
    if(pos2 < pos1) {
      this.updateCash(200);
      console.log('passou pelo GO');
    }
  }

  updatePos(pos1, pos2) {
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

  updatePlayer1Cash(){
    const player1Amount = document.querySelector('#player1-amount');
    player1Amount.innerHTML = this.cash;
  }

  printCardName() {
    let cardName = square[this.position].name;
    let displayCardName = document.getElementById('display-card-name');
    let p = document.createElement('p');
    p.innerHTML = 'You are at: ' + cardName;
    displayCardName.appendChild(p);
    setTimeout(function() {displayCardName.removeChild(p);}, 3000);
  }

  displayInfo() {
    console.log(`${this.name} is at position ${ this.position} and has $ ${this.cash}`);
  }
  
};

const player1 = new Player('Rodrigo', 'red');
const player2 = new Player('Jacinto', 'blue');
const player3 = new Player('Waldisney', 'black');



// const titleDeed = document.querySelectorAll('.title-deed');
// const centralSquare = document.getElementById('sqr-central');

// for(let i = 0; i < titleDeed.length; i += 1) {
//   titleDeed[i].addEventListener('click', function() {
//     console.log('title deed mouseenter');
//   });

// }
