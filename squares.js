/* variaveis da square: 
tipo: title deed, community chest, chance, luxury or income tax, in jail/just visiting, go to jail, free parking, GO
se: title deed (buy prop, pay rent to owner), community chest and chance (pay or receive or move), go to jail (move to square #5), GO (collect $200)
*/
class Square {
  constructor (name, group) {
    this.name = name;
    this.group = group;
    this.hasOwner = false;
    this.playerOwner = '';
  }
}

let square = [];

square[0] = new Square('Go', 'group-go');
square[1] = new Square('Park Place', 'group-blue')
square[2] = new Square('Community Chest, follow the instructions!', 'group-communitychest')
square[3] = new Square('Broadwalk', 'group-blue')
square[4] = new Square('Chance Opportunity. Pick a card and follow instruction', 'group-chance')
square[5] = new Square('Jail, but just visiting!', 'group-jail') 
square[6] = new Square('Illinois Avenue', 'group-red')
square[7] = new Square('Community Chest, follow the instructions!', 'group-communitychest')
square[8] = new Square('Indiana Avenue', 'group-red')
square[9] = new Square('Income Tax Day! Pays $200 to the Bank', 'group-tax')
square[10] = new Square('Free Parking. You won\'t receive cash, but no need to pay!', 'group-free')
square[11] = new Square('Marvin Gardens', 'group-purple')
square[12] = new Square('Community Chest, follow the instructions!', 'group-communitychest')
square[13] = new Square('Ventnor Avenue', 'group-purple')
square[14] = new Square('Atlantic Avenue', 'group-purple')
square[15] = new Square('Go visit the Jail. Good Luck!', 'group-go-jail')
square[16] = new Square('Chance Opportunity. Pick a card and follow instruction', 'group-chance')
square[17] = new Square('Pacific Avenue', 'group-green')
square[18] = new Square('Luxury Tax Day! Pay $75 to the Bank', 'group-tax')
square[19] = new Square('Pennsylvania Avenue', 'group-green')
// square[20] = new Square('GO2', 200)

class Card {
  constructor(name, amount){
    this.name = name;
    this.amount = amount;
  }
}

let chanceCards = [];

chanceCards[0] = new Card ('Speeding fine $15.', -15);
chanceCards[1] = new Card ('Bank pays you dividend of $50.', 50);
chanceCards[2] = new Card ('Pay poor tax of $15.', -15);
chanceCards[3] = new Card ('Go back three spaces.', -3);
chanceCards[4] = new Card ('Advance to GO and collect $200.', 200);

let communityChestCards = []

communityChestCards[0] = new Card ('You have won second prize in a beauty contest. Collect $10.', 10);
communityChestCards[1] = new Card ('From sale of stock, you get $50.', 50);
communityChestCards[2] = new Card ('Life insurance matures. Collect $100.', 100);
communityChestCards[3] = new Card ('Income tax refund. Collect $20.', 20);
communityChestCards[4] = new Card ('Holiday fund matures. Receive $100.', 100);
communityChestCards[5] = new Card ('You inherit $100.', 100);
communityChestCards[6] = new Card ('Receive $25 consultancy fee.', 25);
communityChestCards[7] = new Card ('Pay hospital fees of $100.', -100);
communityChestCards[8] = new Card ('Pay school fees of $50.', -50);
communityChestCards[9] = new Card ('Doctor\'s fee. Pay $50.', -50);

function pickCommunityChest(player) {
  let total = communityChestCards.length;
  let randomNumber = Math.floor(Math.random() * total);
  let randomCard = communityChestCards[randomNumber];
  console.log(randomCard);
  console.log('pickCommunityChest function invoked, check problem with amount in case is true')
  let result = player.updateCash(randomCard.amount);
  return result;
}

function pickChance(player) {
  let total = chanceCards.length;
  let randomNumber = Math.floor(Math.random() * total);
  // let randomNumber = 3;
  let randomCard = chanceCards[randomNumber];
  console.log(randomCard);
  if(randomNumber === 3) {
    let result1 = player.moveAction(randomCard.amount);
    console.log('this is result1: ' + result1)
    return result1; //  insert a function to check the new current possition description and action;
  } else {
    let result2 = player.updateCash(randomCard.amount);
    console.log('this is result2: ' + result2)
    return result2;
  }
}

function luxuryTax(player) {
  let luxuryTaxCash = -75;
  player.updateCash(luxuryTaxCash);
}

function incomeTax(player) {
  let incomeTaxCash = -200;
  player.updateCash(incomeTaxCash);
}

function blueTitleDeed(player){
  // buy $1350 - rent $50
  // check if has ownwer ? pay rent : buy the property;
  if(player.position === 1){
    console.log('Here is Park Place');
    console.log(square[player.position].hasOwner)
    if(!square[player.position].hasOwner) {
      // buy the prop and mark as owner
      square[player.position].playerOwner = player.turn;
      square[player.position].hasOwner = true; 
      player.updateCash(-350);
      //  paint the border with the owner color
      const ownerMark = document.querySelector('#sqr-1')
      markOwner(player.turn, ownerMark);
      console.log('Congrats! You bought a new property!')
    } 
    else if(square[player.position].playerOwner === player.turn)  {
      console.log('This is your property.');
    }
    else {
      //pay rent
      player.updateCash(-70);
        switch (square[player.position].playerOwner) {
          case 1:
            player1.updateCash(70);
            // console.log('p1 recebeu aluguel')
            break;
          case 2:
            player2.updateCash(70);
            // console.log('p2 recebeu aluguel')
            break;
          case 3:
            player3.updateCash(70);
            // console.log('p3 recebeu aluguel')
            break;
          case 4:
            player4.updateCash(70);
            // console.log('p4 recebeu aluguel')
            break;
          default:
            console.log('error to pay the rent');
        }
      console.log('pay the rent!')
      console.log(square[player.position].playerOwner)
      console.log(player.name)
    }
  }
  else {
      console.log('Here is Broadwalk');
      console.log(square[player.position].hasOwner)
    if(!square[player.position].hasOwner) {
      // buy the prop and mark as owner
      square[player.position].playerOwner = player.turn;
      square[player.position].hasOwner = true
      player.updateCash(-750);
      //  paint the border with the owner color
      const ownerMark = document.querySelector('#sqr-3')
      markOwner(player.turn, ownerMark);
      console.log('Congrats! You bought a new property!')
    }
    else if(square[player.position].playerOwner === player.turn)  {
      console.log('This is your property.');
    }
    else {
      //pay rent
      player.updateCash(-70);
      console.log('pay the rent!')
      console.log(square[player.position].playerOwner)
      console.log(player.name)
    }
  }
};

function redTitleDeed(player){
  // buy $1350 - rent $50
  // check if has ownwer ? pay rent : buy the property;
  if(player.position === 6){
    console.log('Here is Illinois Avenue');
    console.log(square[player.position].hasOwner)
    if(!square[player.position].hasOwner) {
      // buy the prop and mark as owner
      square[player.position].playerOwner = player.turn;
      square[player.position].hasOwner = true; 
      player.updateCash(-350);
      //  paint the border with the owner color
      const ownerMark = document.querySelector('#sqr-6')
      markOwner(player.turn, ownerMark);
      console.log('Congrats! You bought a new property!')
    } 
    else if(square[player.position].playerOwner === player.turn)  {
      console.log('This is your property.');
    }
    else {
      //pay rent
      player.updateCash(-70);
      console.log('pay the rent!')
      console.log(square[player.position].playerOwner)
      console.log(player.name)
    }
  }
  else {
    console.log('Indiana Avenue');
    console.log(square[player.position].hasOwner)
    if(!square[player.position].hasOwner) {
    // buy the prop and mark as owner
    square[player.position].playerOwner = player.turn;
    square[player.position].hasOwner = true
    player.updateCash(-150);
    //  paint the border with the owner color
    const ownerMark = document.querySelector('#sqr-8')
    markOwner(player.turn, ownerMark);
    console.log('Congrats! You bought a new property!')
    }
    else if(square[player.position].playerOwner === player.turn)  {
      console.log('This is your property.');
    }
    else {
      //pay rent
      player.updateCash(-70);
      console.log('pay the rent!')
      console.log(square[player.position].playerOwner)
      console.log(player.name)
    }
  }
}

function purpleTitleDeed(player){
  // buy $1350 - rent $50
  // check if has ownwer ? pay rent : buy the property;
  if(player.position === 11){
    console.log('Here is Marvin Gardens');
    console.log(square[player.position].hasOwner)
    if(!square[player.position].hasOwner) {
      // buy the prop and mark as owner
      square[player.position].playerOwner = player.turn;
      square[player.position].hasOwner = true; 
      player.updateCash(-350);
      //  paint the border with the owner color
      const ownerMark = document.querySelector('#sqr-11')
      markOwner(player.turn, ownerMark);
      console.log('Congrats! You bought a new property!')
    } 
    else if(square[player.position].playerOwner === player.turn)  {
      console.log('This is your property.');
    }
    else {
      //pay rent
      player.updateCash(-70);
      console.log('pay the rent!')
      console.log(square[player.position].playerOwner)
      console.log(player.name)
    }
  }
  else if (player.position === 13) {
    console.log('Here is Ventnor Avenue');
    console.log(square[player.position].hasOwner)
    if(!square[player.position].hasOwner) {
      // buy the prop and mark as owner
      square[player.position].playerOwner = player.turn;
      square[player.position].hasOwner = true
      player.updateCash(-110);
      //  paint the border with the owner color
      const ownerMark = document.querySelector('#sqr-13')
      markOwner(player.turn, ownerMark);
      console.log('Congrats! You bought a new property!')
    }
    else if(square[player.position].playerOwner === player.turn)  {
      console.log('This is your property.');
    }
    else {
      //pay rent
      player.updateCash(-70);
      console.log('pay the rent!')
      console.log(square[player.position].playerOwner)
      console.log(player.name)
    }
  }
  else {
      console.log('Here is Atlantic Avenue');
      console.log(square[player.position].hasOwner)
    if(!square[player.position].hasOwner) {
      // buy the prop and mark as owner
      square[player.position].playerOwner = player.turn;
      square[player.position].hasOwner = true
      player.updateCash(-110);
      //  paint the border with the owner color
      const ownerMark = document.querySelector('#sqr-14')
      markOwner(player.turn, ownerMark);
      console.log('Congrats! You bought a new property!')
    }
    else if(square[player.position].playerOwner === player.turn)  {
      console.log('This is your property.');
    }
    else {
      //pay rent
      player.updateCash(-70);
      console.log('pay the rent!')
      console.log(square[player.position].playerOwner)
      console.log(player.name)
    }
  }
}

function greenTitleDeed(player){
  // buy $1350 - rent $50
  // check if has ownwer ? pay rent : buy the property;
  if(player.position === 17){
    console.log('Here is Pacific Avenue');
    console.log(square[player.position].hasOwner)
    if(!square[player.position].hasOwner) {
      // buy the prop and mark as owner
      square[player.position].playerOwner = player.turn;
      square[player.position].hasOwner = true; 
      player.updateCash(-350);
      //  paint the border with the owner color
      const ownerMark = document.querySelector('#sqr-17')
      markOwner(player.turn, ownerMark);
      console.log('Congrats! You bought a new property!')
    } 
    else if(square[player.position].playerOwner === player.turn)  {
      console.log('This is your property.');
    }
    else {
      //pay rent
      player.updateCash(-70);
      console.log('pay the rent!')
      console.log(square[player.position].playerOwner)
      console.log(player.name)
    }
  }
  else {
    console.log('Here is Pennsylvania Avenue');
    console.log(square[player.position].hasOwner)
    if(!square[player.position].hasOwner) {
    // buy the prop and mark as owner
    square[player.position].playerOwner = player.turn;
    square[player.position].hasOwner = true
    player.updateCash(-1150);
    //  paint the border with the owner color
    const ownerMark = document.querySelector('#sqr-19')
    markOwner(player.turn, ownerMark);
    console.log('Congrats! You bought a new property!')
    }
    else if(square[player.position].playerOwner === player.turn)  {
      console.log('This is your property.');
    }
    else {
      //pay rent
      player.updateCash(-70);
      console.log('pay the rent!')
      console.log(square[player.position].playerOwner)
      console.log(player.name)
    }
  }
}


function markOwner(n1, n2) {
  switch (n1){
    case 1:
        n2.style.border = '3px solid #ffa500';
        break;
    case 2: 
        n2.style.border = '3px solid #5c5cd6';
        break;
    case 3:
        n2.style.border = '3px solid #d55d5d';
        break;
    case 4 :
        n2.style.border = '3px solid #e600e6';
        break;
    default :
        pn2.style.border = '3px solid black';
  };
}