/* variaveis da square: 
tipo: title deed, community chest, chance, luxury or income tax, in jail/just visiting, go to jail, free parking, GO
se: title deed (buy prop, pay rent to owner), community chest and chance (pay or receive or move), go to jail (move to square #5), GO (collect $200)
*/
class Square {
  constructor (name, group) {
    this.name = name;
    this.group = group;
  }
}

let square = [];

square[0] = new Square('Go', 'group-go');
square[1] = new Square('Blue1', 'group-blue')
square[2] = new Square('Community Chest1', 'group-communitychest')
square[3] = new Square('Blue2', 'group-blue')
square[4] = new Square('Chance1', 'group-chance')
square[5] = new Square('In Jail', 'group-jail') 
square[6] = new Square('Red1', 'group-red')
square[7] = new Square('Community Chest2', 'group-communitychest')
square[8] = new Square('Red2', 'group-red')
square[9] = new Square('Income Tax', 'group-tax')
square[10] = new Square('Free Parking', 'group-free')
square[11] = new Square('Yellow1', 'group-yellow')
square[12] = new Square('Community Chest3', 'group-communitychest')
square[13] = new Square('Yellow2', 'group-yellow')
square[14] = new Square('Yellow3', 'group-yellow')
square[15] = new Square('Go to Jail', 'group-go-jail')
square[16] = new Square('Chance2', 'group-chance')
square[17] = new Square('Green1', 'group-green')
square[18] = new Square('Luxury Tax', 'group-tax')
square[19] = new Square('Yellow2', 'group-yellow')
// square[20] = new Square('GO2', 200)

class Card {
  constructor(name, cash){
    this.name = name;
    this.cash = cash;
  }
}

let chanceCards = [];

chanceCards[0] = new Card ('Speeding fine $15.', -15);
chanceCards[1] = new Card ('Bank pays you dividend of $50.', 50);
chanceCards[2] = new Card ('Pay poor tax of $15.', 15);
chanceCards[3] = new Card ('Go back three spaces.', 3);
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
  let randomNumber = Math.ceil(Math.random() * total);
  return communityChestCards[randomNumber];
  player.updateCash(communityChestCards[randomNumber].cash)

}

// function addAmount(amount){
//   return this.cash += amount;
// }

function luxuryTax() {

}

function incomeTax() {

}