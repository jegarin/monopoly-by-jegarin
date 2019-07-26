// alert('monopolyGame is connected');

// const titleDeed = document.querySelectorAll('.title-deed');
// const centralSquare = document.getElementById('sqr-central');

// for(let i = 0; i < titleDeed.length; i += 1) {
//   titleDeed[i].addEventListener('click', function() {
//     console.log('title deed mouseenter');
//   });

// }

const startBtn = document.getElementById('start-btn');
startBtn.onclick = function() {
  player1.set();  
}

const playBtn = document.getElementById('play-btn');
playBtn.onclick = function() {
  player1.move();
  player1.displayInfo();
}

const playerName = document.getElementById('player1-name');
const playerCash = document.getElementById('player1-amount');

class Player {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.position = 0;
    this.cash = 1500;
  }

  set() {
    playerName.textContent = this.name;
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
    this.updateCash();
    this.updatePos(pos1, this.position);
    this.printCardName();

    // if communitychest
    let cardGroup = square[this.position].group
    if(cardGroup === 'group-communitychest') {
      pickCommunityChest(player)
    }

    if (this.cash < 0) {
      console.log('Game over for' + this.name);
    }
  };

  updateCash(cash) {
    this.cash += cash;
    // this.cash += square[this.position].price;

  }

  updatePos(pos1, pos2) {
    // remove #player1-square at old position
    let player1OldSquare = 'sqr-' + pos1;
    let player1OldPosition = document.getElementById(player1OldSquare);
    let child = player1OldPosition.querySelector('#player1-square');
    player1OldPosition.removeChild(child);

    // update #player1-square at new position
    let player1NewSquare = 'sqr-' + pos2;
    let player1NewPosition = document.getElementById(player1NewSquare);
    let player1Square = document.createElement('div');
    player1Square.setAttribute('id', 'player1-square');
    player1NewPosition.appendChild(player1Square);
  }

  printCardName() {
    let cardName = square[this.position].name;
    let displayCardName = document.getElementById('display-card-name');
    let p = document.createElement('p');
    p.innerHTML = 'The card is a: ' + cardName;
    displayCardName.appendChild(p);
    setTimeout(function() {displayCardName.removeChild(p);}, 3000);
  }

  displayInfo() {
    console.log(`${this.name} is at position ${ this.position} and has $ ${this.cash}`);
  }
}



const player1 = new Player('Rodrigo', 'red');
const player2 = new Player('Jacinto', 'blue');
const player3 = new Player('Waldisney', 'black');
// turn 2
/*
// turn 1
player1.move();
player2.move();
player3.move();

player1.displayInfo();
player2.displayInfo();
player3.displayInfo();


player1.move();
player2.move();
player3.move();

player1.displayInfo();
player2.displayInfo();
player3.displayInfo();

// turn 3

player1.move();
player2.move();
player3.move();

player1.displayInfo();
player2.displayInfo();
player3.displayInfo();

// turn 4

player1.move();
player2.move();
player3.move();

player1.displayInfo();
player2.displayInfo();
player3.displayInfo();

// turn 5

player1.move();
player2.move();
player3.move();

player1.displayInfo();
player2.displayInfo();
player3.displayInfo();

// turn 6

player1.move();
player2.move();
player3.move();

player1.displayInfo();
player2.displayInfo();
player3.displayInfo();

// turn 7

player1.move();
player2.move();
player3.move();

player1.displayInfo();
player2.displayInfo();
player3.displayInfo();

console.log(1 % 20);
console.log(2 % 20);
console.log(3 % 20);
console.log(4 % 20);
console.log(5 % 20);
console.log(6 % 20);
console.log(7 % 20);
console.log(8 % 20);
console.log(9 % 20);
console.log(10 % 20);
console.log(11 % 20);
console.log(12 % 20);
console.log(13 % 20);
console.log(14 % 20);
console.log(15 % 20);
console.log(16 % 20);
console.log(17 % 20);
console.log(18 % 20);
console.log(19 % 20);
console.log(20 % 20);
console.log(21 % 20);
console.log(22 % 20);
console.log(23 % 20);
console.log(40 % 20);
console.log(45 % 20)
;
*/