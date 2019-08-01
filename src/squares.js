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

square[0] = new Square('Go Square', 'group-go');
square[1] = new Square('Park Place', 'group-blue')
square[2] = new Square('Community Chest, pick a card and follow instructions!', 'group-communitychest')
square[3] = new Square('Boardwalk', 'group-blue')
square[4] = new Square('Chance Opportunity. Pick a card and follow instruction', 'group-chance')
square[5] = new Square('the Court, pay back $200.', 'group-jail') 
square[6] = new Square('Illinois Avenue', 'group-red')
square[7] = new Square('Community Chest, pick a card and follow instructions!', 'group-communitychest')
square[8] = new Square('Indiana Avenue', 'group-red')
square[9] = new Square('Income Tax Day! Pays $200 to the Bank', 'group-tax')
square[10] = new Square('Free Parking.', 'group-free')
square[11] = new Square('Marvin Gardens', 'group-purple')
square[12] = new Square('Community Chest, pick a card and follow instructions!', 'group-communitychest')
square[13] = new Square('Ventnor Avenue', 'group-purple')
square[14] = new Square('Atlantic Avenue', 'group-purple')
square[15] = new Square('Go visit the Court. Good Luck!', 'group-go-jail')
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

chanceCards[0] = new Card ('Speeding fine $150. Pay now!', -150);
chanceCards[1] = new Card ('Bank pays you dividend of $500.', 500);
chanceCards[2] = new Card ('Pay poor tax of $150.', -150);
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
communityChestCards[8] = new Card ('Pay school fees of $450.', -450);
communityChestCards[9] = new Card ('Doctor\'s fee. Pay $450.', -450);

function pickCommunityChest(player) {
  let total = communityChestCards.length;
  let randomNumber = Math.floor(Math.random() * total);
  let randomCard = communityChestCards[randomNumber];
  console.log(randomCard);
  console.log('pickCommunityChest function invoked, check problem with amount in case is true')
  textArea.value += `Community Card Instructions:
${randomCard.name}
  
`
  let result = player.updateCash(randomCard.amount);
  return result;
}

function pickChance(player) {
  let total = chanceCards.length;
  let randomNumber = Math.floor(Math.random() * total);
  // let randomNumber = 4;
  let randomCard = chanceCards[randomNumber];
  console.log(randomCard);
  textArea.value += `Chance card Instructions:
${randomCard.name}

`
  if(randomNumber === 3) {
    let result1 = player.moveAction(randomCard.amount);
    console.log('this is result1: ' + result1)
    return result1; //  insert a function to check the new current possition description and action;
  } if (randomNumber === 4) {
      let result3 = player.moveToGo();
    return result3;
  } else {
    let result2 = player.updateCash(randomCard.amount);
    console.log('this is result2: ' + result2)
    return result2;
  }
}

function luxuryTax(player) {
  let luxuryTaxCash = -85;
  player.updateCash(luxuryTaxCash);
  textArea.value += `${player.name}! Pay your Luxury Tax.

`
}

function incomeTax(player) {
  let incomeTaxCash = -230;
  player.updateCash(incomeTaxCash);
  textArea.value += `${player.name}! Pay your Income Tax.

`
}

function blueTitleDeed(player){
  // price $350 - rent $35
  // check if has ownwer ? pay rent : buy the property;
  if(player.position === 1){
    if(!square[player.position].hasOwner) {
      // buy the prop and mark as owner
      square[player.position].playerOwner = player.turn;
      square[player.position].hasOwner = true; 
      player.updateCash(-350);
      //  paint the border with the owner color
      const ownerMark = document.querySelector('#sqr-1')
      markOwner(player.turn, ownerMark);
      textArea.value += `Congrats ${player.name}! You bought a new property for $350!

`;
    } 
    else if(square[player.position].playerOwner === player.turn)  {
      textArea.value += `${player.name}, this is your property. Wait another millionaire land here to pay the rent.
`
    }
    else {
      //pay rent
      let rentFee = -70;
      let rentFeePositive = rentFee - 2 * rentFee;
      player.updateCash(rentFee);
        payRent(player, rentFee, rentFeePositive);
  }
}
  else {
    if(!square[player.position].hasOwner) {
      // buy the prop and mark as owner
      square[player.position].playerOwner = player.turn;
      square[player.position].hasOwner = true
      player.updateCash(-400);
      //  paint the border with the owner color
      const ownerMark = document.querySelector('#sqr-3')
      markOwner(player.turn, ownerMark);
      textArea.value += `Congrats ${player.name}! You bought a new property for $400!

`;
    }
    else if(square[player.position].playerOwner === player.turn)  {
      textArea.value += `${player.name}, this is your property. Wait another millionaire land here to pay the rent

`
    }
    else {
      //pay rent
      let rentFee = -100
      let rentFeePositive = rentFee - 2 * rentFee;
      player.updateCash(rentFee);
      payRent(player, rentFee, rentFeePositive);
    }
  }
};

function redTitleDeed(player){
  // check if has ownwer ? pay rent : buy the property;
  if(player.position === 6){
    if(!square[player.position].hasOwner) {
      // buy the prop and mark as owner
      square[player.position].playerOwner = player.turn;
      square[player.position].hasOwner = true; 
      player.updateCash(-240);
      //  paint the border with the owner color
      const ownerMark = document.querySelector('#sqr-6')
      markOwner(player.turn, ownerMark);
      textArea.value += `Congrats ${player.name}! You bought a new property for $240!

`;
    } 
    else if(square[player.position].playerOwner === player.turn)  {
      textArea.value += `${player.name}, this is your property. Wait another millionaire land here to pay the rent

`
    }
    else {
      //pay rent
      let rentFee = -48;
      let rentFeePositive = rentFee - 2 * rentFee;
      player.updateCash(rentFee);
      payRent(player, rentFee, rentFeePositive)
    }
  }
  else {
    if(!square[player.position].hasOwner) {
    // buy the prop and mark as owner
    square[player.position].playerOwner = player.turn;
    square[player.position].hasOwner = true
    player.updateCash(-220);
    //  paint the border with the owner color
    const ownerMark = document.querySelector('#sqr-8')
    markOwner(player.turn, ownerMark);
    textArea.value += `Congrats ${player.name}! You bought a new property for $220!

`
    }
    else if(square[player.position].playerOwner === player.turn)  {
      textArea.value += `${player.name}, this is your property. Wait another millionaire land here to pay the rent

`
    }
    else {
      //pay rent
      let rentFee = -44;
      let rentFeePositive = rentFee - 2 * rentFee
      player.updateCash(rentFee);
      payRent(player, rentFee, rentFeePositive);
    }
  }
}

function purpleTitleDeed(player){
  // check if has ownwer ? pay rent : buy the property;
  if(player.position === 11){
    if(!square[player.position].hasOwner) {
      // buy the prop and mark as owner
      square[player.position].playerOwner = player.turn;
      square[player.position].hasOwner = true; 
      player.updateCash(-280);
      //  paint the border with the owner color
      const ownerMark = document.querySelector('#sqr-11')
      markOwner(player.turn, ownerMark);
      textArea.value += `Congrats ${player.name}! You bought a new property for $280!

`
    } 
    else if(square[player.position].playerOwner === player.turn)  {
      textArea.value += `${player.name}, this is your property. Wait another millionaire land here to pay the rent

`
    }
    else {
      //pay rent
      let rentFee = -56;
      let rentFeePositive = rentFee - 2 * rentFee;
      player.updateCash(rentFee);
      payRent(player, rentFee, rentFeePositive);
    }
  }
  else if (player.position === 13) {
    if(!square[player.position].hasOwner) {
      // buy the prop and mark as owner
      square[player.position].playerOwner = player.turn;
      square[player.position].hasOwner = true
      player.updateCash(-260);
      //  paint the border with the owner color
      const ownerMark = document.querySelector('#sqr-13')
      markOwner(player.turn, ownerMark);
      textArea.value += `Congrats ${player.name}! You bought a new property for $260!

`
    }
    else if(square[player.position].playerOwner === player.turn)  {
      textArea.value += `${player.name}, this is your property. Wait another millionaire land here to pay the rent

`
    }
    else {
      //pay rent
      let rentFee = -52;
      let rentFeePositive = rentFee - 2 * rentFee
      player.updateCash(rentFee);
      payRent(player, rentFee, rentFeePositive);
    }
  }
  else {
    if(!square[player.position].hasOwner) {
      // buy the prop and mark as owner
      square[player.position].playerOwner = player.turn;
      square[player.position].hasOwner = true
      player.updateCash(-260);
      //  paint the border with the owner color
      const ownerMark = document.querySelector('#sqr-14')
      markOwner(player.turn, ownerMark);
      textArea.value += `Congrats ${player.name}! You bought a new property for $260!

`
    }
    else if(square[player.position].playerOwner === player.turn)  {
      textArea.value += `${player.name}, this is your property. Wait another millionaire land here to pay the rent

`
    }
    else {
      //pay rent
      let rentFee = -52;
      let rentFeePositive = rentFee - 2 * rentFee;
      player.updateCash(rentFee);
      payRent(player, rentFee, rentFeePositive);
    }
  }
}

function greenTitleDeed(player){
  // check if has ownwer ? pay rent : buy the property;
  if(player.position === 17){
    if(!square[player.position].hasOwner) {
      // buy the prop and mark as owner
      square[player.position].playerOwner = player.turn;
      square[player.position].hasOwner = true; 
      player.updateCash(-320);
      //  paint the border with the owner color
      const ownerMark = document.querySelector('#sqr-17')
      markOwner(player.turn, ownerMark);
      textArea.value += `Congrats ${player.name}! You bought a new property for $320!

`
    } 
    else if(square[player.position].playerOwner === player.turn)  {
      textArea.value += `${player.name}, this is your property. Wait another millionaire land here to pay the rent

`
    }
    else {
      //pay rent
      let rentFee = -64;
      let rentFeePositive = rentFee - 2 * rentFee;
      player.updateCash(rentFee);
      payRent(player, rentFee, rentFeePositive)
    }
  }
  else {
    if(!square[player.position].hasOwner) {
    // buy the prop and mark as owner
    square[player.position].playerOwner = player.turn;
    square[player.position].hasOwner = true
    player.updateCash(-300);
    //  paint the border with the owner color
    const ownerMark = document.querySelector('#sqr-19')
    markOwner(player.turn, ownerMark);
    textArea.value += `Congrats ${player.name}! You bought a new property for $300!

`
    }
    else if(square[player.position].playerOwner === player.turn)  {
      textArea.value += `${player.name}, this is your property. Wait another millionaire land here to pay the rent

`
    }
    else {
      //pay rent
      let rentFee = -60;
      let rentFeePositive = rentFee - 2 * rentFee;
      player.updateCash(rentFee);
      payRent(player, rentFee, rentFeePositive);
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

function payRent(player, rentFee, rentFeePositive) {
  switch (square[player.position].playerOwner) {
    case 1:
      player1.updateCash(rentFeePositive);
      textArea.value += `${player.name}, too late! Pay the rent ($${rentFeePositive}) to ${player1.name}

`
      break;
    case 2:
      player2.updateCash(rentFeePositive);
      textArea.value += `${player.name}, too late! Pay the rent ($${rentFeePositive}) to ${player2.name}

`
      break;
    case 3:
      player3.updateCash(rentFeePositive);
      textArea.value += `${player.name}, too late! Pay the rent ($${rentFeePositive}) to ${player3.name}

`
      break;
    case 4:
      player4.updateCash(rentFeePositive);
      textArea.value += `${player.name}, too late! Pay the rent ($${rentFeePositive}) to ${player4.name}

`
      break;
    default:
      console.log('error to pay the rent');
  }
}