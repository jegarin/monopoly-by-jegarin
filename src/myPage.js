
const body = document.getElementById('body-id');
const startBtn = document.getElementById('start-btn');

startBtn.onclick = function() {
  player1.setPlayer1();
  player2.setPlayer2();
  player3.setPlayer3();
  player4.setPlayer4();  
  rollBtnP2.style.display = 'none';
  rollBtnP3.style.display = 'none';
  rollBtnP4.style.display = 'none';
  textArea.value += `Let\'s Play!
  
`;
}

startBtn.addEventListener('click', function() {
  body.innerHTML = `
  <div id="title">
  <h1 id="page-title">Welcome to the MONOPOLY world!</h1>
  </div>


<div id="page-layout"> 
<!-- <img src="img/Free-Monopoly-Pattern-#1.jpg"> -->
  <div id='monopoly-board'>
      <div class="free-parking square" id="sqr-10"><h2>FREE PARKING</h2>
        <div hidden class="display-card-description" >
            <h1>Free Parking</h1>
            <p class="card-text">No need to pay! Wait your next time!</p>
        </div>
      </div>
      <div class="title-deed purple-deed square" id="sqr-11"><span class="square-title">Marvin Gardens</span>
        <div hidden class="display-card-description" >
            <h1>Marvin Gardens</h1>
            <p class="card-text">Pay $16 <br> Rent $150</p>
        </div>
      </div>
      <div class="community-chest square" id="sqr-12"><span class="square-title">Community Chest</span>
        <div hidden class="display-card-description" >
            <h1>Community Chest</h1>
            <p class="card-text">Follow the instructions from the card. <br> Good Luck!</p>
        </div>
      </div>
      <div class="title-deed purple-deed square" id="sqr-13"><span class="square-title">Ventnor Avenue</span>
        <div hidden class="display-card-description" >
            <h1>Ventnor Avenue</h1>
            <p class="card-text">Pay $16 <br> Rent $150</p>
        </div>
      </div>
      <div class="title-deed purple-deed square" id="sqr-14"><span class="square-title">Atlantic Avenue</span>
        <div hidden class="display-card-description" >
            <h1>Atlantic Avenue</h1>
            <p class="card-text">Pay $16 <br> Rent $150</p>
        </div>
      </div>
      <div class="go-to-jail square" id="sqr-15"><h2>VISIT COURT</h2>
        <div hidden class="display-card-description" >
            <h1>Go visit the Court.</h1>
            <p class="card-text">Again, another subpoena...</p>
        </div>
      </div>
      <!-- <div class="bank-amout">Bank $</div> -->
      <div class="pay-tax square" id="sqr-9"><h2>INCOME<br>TAX</h2>
        <div hidden class="display-card-description" >
            <h1>INCOME TAX</h1>
            <p class="card-text">Pay $230 <br>PS: Your are in Brazil, <br> tax is a little bit higher.</p>
        </div>
      </div>
      <div class="chance square" id="sqr-16"><span class="square-title">Chance</span>
        <div hidden class="display-card-description" >
            <h1>Chance</h1>
            <img src="./img/chance-logo.jpg" alt="chance logo"></img>
        </div>
      </div>
      <div class="title-deed red-deed square" id="sqr-8"><span class="square-title">Indiana Avenue</span>
        <div hidden class="display-card-description" >
            <h1>Indiana Avenue</h1>
            <p class="card-text">Pay $16 <br> Rent $150</p>
        </div>
      </div>
      <div class="title-deed green-deed square" id="sqr-17"><span class="square-title">Pacific Avenue</span>
        <div hidden class="display-card-description" >
            <h1>Pacific Avenue</h1>
            <p class="card-text">Pay $16 <br> Rent $150</p>
        </div>
      </div>
      <div id="sqr-central"></div>
      <div class="community-chest square" id="sqr-7"><span class="square-title">Community Chest</span><br>
        <div hidden class="display-card-description" >
            <h1>Community Chest</h1>
            <p class="card-text">Follow the instructions from the card. <br> Good Luck!</p>
        </div>
      </div>
      <div class="pay-tax square" id="sqr-18"><h2>LUXURY<br>TAX</h2>
        <div hidden class="display-card-description" >
            <h1>LUXURY TAX</h1>
            <p class="card-text">Pay $85 <br>PS: Your are in Brazil, <br> tax is a little bit higher.</p>
        </div>
      </div>
      <div class="title-deed red-deed square" id="sqr-6"><span class="square-title">Illinois Avenue</span>
        <div hidden class="display-card-description" >
            <h1>Illinois Avenue</h1>
            <p class="card-text">Pay $16 <br> Rent $150</p>
        </div>
      </div>
      <div class="title-green green-deed square" id="sqr-19"><span class="square-title">Pennsylvania Avenue</span>
        <div hidden class="display-card-description" >
            <h1>Pennsylvania Avenue</h1>
            <p class="card-text">Pay $16 <br> Rent $150</p>
        </div>
      </div>
      <div class="in-jail square" id="sqr-5"><h2>VISITING COURT</h2>
        <div hidden class="display-card-description" >
            <h1>Court</h1>
            <p class="card-text">PS: Pay back your $200 you earned when passed the GO square.</p>
        </div>
      </div>
      <div class="chance square" id="sqr-4"><span class="square-title">Chance</span>
        <div hidden class="display-card-description" >
            <h1>Chance</h1>
            <img src="./img/chance-logo.jpg" alt="chance logo"></img>
        </div>
      </div>
      <div class="title-deed blue-deed square" id="sqr-3"><span class="square-title">Broadwalk</span>
        <div hidden class="display-card-description" >
            <h1>Broadwalk</h1>
            <p class="card-text">Pay $16 <br> Rent $150</p>
        </div>
      </div>
      <div class="community-chest square" id="sqr-2"><span class="square-title">Community Chest</span>
        <div hidden class="display-card-description" >
            <h1>Community Chest</h1>
            <p class="card-text">Follow the instructions from the card. <br> Good Luck!</p>
        </div>
      </div>
      <div class="title-deed blue-deed square" id="sqr-1"><span class="square-title">Park Place</span>
        <div hidden class="display-card-description" >
            <h1>Park Place</h1>
            <p class="card-text">Pay $16 <br> Rent $150</p>
        </div>
      </div>
      <div class="go-sqr square" id="sqr-0"><h2>GO</h2>
        <div hidden class="display-card-description" >
          <h1>This is the GO square!</h1>
          <p class="card-text">Pass or land here and receive $200! </p>
        </div>
      </div>
  </div>

  <div id="set-space">
    <div class=""><button class="btn" id="start-btn">Let's Start!</button></div>
    <!-- <div class="bank-container"><h2>Bank: $<span id="bank-amount">20580</span></h2></div> -->
    <!-- Player 1 set space -->
    <div class="players"><h2><span id="player1-name">Player 1</span>: $<span id="player1-amount">0</span></h2></div>
    <div class=""><button class="btn" id="roll-btn-player1">Roll</button></div>
    
    <!-- Player 2 set space -->
    <div class="players"><h2><span id="player2-name">Player 2</span>: $<span id="player2-amount">0</span></h2></div>
    <div class=""><button class="btn" id="roll-btn-player2">Roll</button></div>
    
    <!-- Player 3 set space -->
    <div class="players"><h2><span id="player3-name">Player 3</span>: $<span id="player3-amount">0</span></h2>
    </div>
    <div class=""><button class="btn" id="roll-btn-player3">Roll</button></div>
   
    <!-- Player 4 set space -->
    <div class="players"><h2><span id="player4-name">Player 4</span>: $<span id="player4-amount">0</span></h2></div>
    <div class=""><button class="btn" id="roll-btn-player4">Roll</button></div>
   
    <!-- Card Description -->
    <div class="players"> Card description:
      
    </div>

  </div>
  <div id="dice-form-space">
    <div class="dice-container" id="display-dice-result" > <p>Dice result:</p>
    </div>
    
    <!-- <section class="container">
        <div id="cube">
          <div class="front">
            <span class="dot dot1"></span>
          </div>
          <div class="back">
            <span class="dot dot1"></span>
            <span class="dot dot2"></span>
          </div>
          <div class="right">
            <span class="dot dot1"></span>
            <span class="dot dot2"></span>  
            <span class="dot dot3"></span>
          </div>
          <div class="left">
            <span class="dot dot1"></span>
            <span class="dot dot2"></span>  
            <span class="dot dot3"></span>
            <span class="dot dot4"></span>
          </div>
          <div class="top">
            <span class="dot dot1"></span>
            <span class="dot dot2"></span>  
            <span class="dot dot3"></span>
            <span class="dot dot4"></span>
            <span class="dot dot5"></span>
          </div>
          <div class="bottom">
            <span class="dot dot1"></span>
            <span class="dot dot2"></span>  
            <span class="dot dot3"></span>
            <span class="dot dot4"></span>
            <span class="dot dot5"></span>
            <span class="dot dot6"></span>
          </div>
        </div>
      </section> -->


    <div class="form-container"> <p>All events:</p>
        <textarea id="display-action">

        </textarea>
    </div>
  </div>
  
</div>

<div>
<p id="register-text">Property Trading Game from Parker Brothers <span>&#174;</span></p>
</div>

<!-- <script type="text/javascript" src="./src/dice.js"></script> -->
<script type="text/javascript" src="./src/squares.js"></script> 
<script type="text/javascript" src="./src/myGame.js"></script>
  `

});



{/* <body> */}
  {/* <div id="title">
    <h1 id="page-title">Welcome to the MONOPOLY world!</h1>
  </div>


  <div id="page-layout"> 
  <!-- <img src="img/Free-Monopoly-Pattern-#1.jpg"> -->
    <div id='monopoly-board'>
        <div class="free-parking square" id="sqr-10"><h2>FREE PARKING</h2>
          <div hidden class="display-card-description" >
              <h1>Free Parking</h1>
              <p class="card-text">No need to pay! Wait your next time!</p>
          </div>
        </div>
        <div class="title-deed purple-deed square" id="sqr-11"><span class="square-title">Marvin Gardens</span>
          <div hidden class="display-card-description" >
              <h1>Marvin Gardens</h1>
              <p class="card-text">Pay $16 <br> Rent $150</p>
          </div>
        </div>
        <div class="community-chest square" id="sqr-12"><span class="square-title">Community Chest</span>
          <div hidden class="display-card-description" >
              <h1>Community Chest</h1>
              <p class="card-text">Follow the instructions from the card. <br> Good Luck!</p>
          </div>
        </div>
        <div class="title-deed purple-deed square" id="sqr-13"><span class="square-title">Ventnor Avenue</span>
          <div hidden class="display-card-description" >
              <h1>Ventnor Avenue</h1>
              <p class="card-text">Pay $16 <br> Rent $150</p>
          </div>
        </div>
        <div class="title-deed purple-deed square" id="sqr-14"><span class="square-title">Atlantic Avenue</span>
          <div hidden class="display-card-description" >
              <h1>Atlantic Avenue</h1>
              <p class="card-text">Pay $16 <br> Rent $150</p>
          </div>
        </div>
        <div class="go-to-jail square" id="sqr-15"><h2>VISIT COURT</h2>
          <div hidden class="display-card-description" >
              <h1>Go visit the Court.</h1>
              <p class="card-text">Again, another subpoena...</p>
          </div>
        </div>
        <!-- <div class="bank-amout">Bank $</div> -->
        <div class="pay-tax square" id="sqr-9"><h2>INCOME<br>TAX</h2>
          <div hidden class="display-card-description" >
              <h1>INCOME TAX</h1>
              <p class="card-text">Pay $230 <br>PS: Your are in Brazil, <br> tax is a little bit higher.</p>
          </div>
        </div>
        <div class="chance square" id="sqr-16"><span class="square-title">Chance</span>
          <div hidden class="display-card-description" >
              <h1>Chance</h1>
              <img src="./img/chance-logo.jpg" alt="chance logo"></img>
          </div>
        </div>
        <div class="title-deed red-deed square" id="sqr-8"><span class="square-title">Indiana Avenue</span>
          <div hidden class="display-card-description" >
              <h1>Indiana Avenue</h1>
              <p class="card-text">Pay $16 <br> Rent $150</p>
          </div>
        </div>
        <div class="title-deed green-deed square" id="sqr-17"><span class="square-title">Pacific Avenue</span>
          <div hidden class="display-card-description" >
              <h1>Pacific Avenue</h1>
              <p class="card-text">Pay $16 <br> Rent $150</p>
          </div>
        </div>
        <div id="sqr-central"></div>
        <div class="community-chest square" id="sqr-7"><span class="square-title">Community Chest</span><br>
          <div hidden class="display-card-description" >
              <h1>Community Chest</h1>
              <p class="card-text">Follow the instructions from the card. <br> Good Luck!</p>
          </div>
        </div>
        <div class="pay-tax square" id="sqr-18"><h2>LUXURY<br>TAX</h2>
          <div hidden class="display-card-description" >
              <h1>LUXURY TAX</h1>
              <p class="card-text">Pay $85 <br>PS: Your are in Brazil, <br> tax is a little bit higher.</p>
          </div>
        </div>
        <div class="title-deed red-deed square" id="sqr-6"><span class="square-title">Illinois Avenue</span>
          <div hidden class="display-card-description" >
              <h1>Illinois Avenue</h1>
              <p class="card-text">Pay $16 <br> Rent $150</p>
          </div>
        </div>
        <div class="title-green green-deed square" id="sqr-19"><span class="square-title">Pennsylvania Avenue</span>
          <div hidden class="display-card-description" >
              <h1>Pennsylvania Avenue</h1>
              <p class="card-text">Pay $16 <br> Rent $150</p>
          </div>
        </div>
        <div class="in-jail square" id="sqr-5"><h2>VISITING COURT</h2>
          <div hidden class="display-card-description" >
              <h1>Court</h1>
              <p class="card-text">PS: Pay back your $200 you earned when passed the GO square.</p>
          </div>
        </div>
        <div class="chance square" id="sqr-4"><span class="square-title">Chance</span>
          <div hidden class="display-card-description" >
              <h1>Chance</h1>
              <img src="./img/chance-logo.jpg" alt="chance logo"></img>
          </div>
        </div>
        <div class="title-deed blue-deed square" id="sqr-3"><span class="square-title">Broadwalk</span>
          <div hidden class="display-card-description" >
              <h1>Broadwalk</h1>
              <p class="card-text">Pay $16 <br> Rent $150</p>
          </div>
        </div>
        <div class="community-chest square" id="sqr-2"><span class="square-title">Community Chest</span>
          <div hidden class="display-card-description" >
              <h1>Community Chest</h1>
              <p class="card-text">Follow the instructions from the card. <br> Good Luck!</p>
          </div>
        </div>
        <div class="title-deed blue-deed square" id="sqr-1"><span class="square-title">Park Place</span>
          <div hidden class="display-card-description" >
              <h1>Park Place</h1>
              <p class="card-text">Pay $16 <br> Rent $150</p>
          </div>
        </div>
        <div class="go-sqr square" id="sqr-0"><h2>GO</h2>
          <div hidden class="display-card-description" >
            <h1>This is the GO square!</h1>
            <p class="card-text">Pass or land here and receive $200! </p>
          </div>
        </div>
    </div>

    <div id="set-space">
      <div class=""><button class="btn" id="start-btn">Let's Start!</button></div>
      <!-- <div class="bank-container"><h2>Bank: $<span id="bank-amount">20580</span></h2></div> -->
      <!-- Player 1 set space -->
      <div class="players"><h2><span id="player1-name">Player 1</span>: $<span id="player1-amount">0</span></h2></div>
      <div class=""><button class="btn" id="roll-btn-player1">Roll</button></div>
      
      <!-- Player 2 set space -->
      <div class="players"><h2><span id="player2-name">Player 2</span>: $<span id="player2-amount">0</span></h2></div>
      <div class=""><button class="btn" id="roll-btn-player2">Roll</button></div>
      
      <!-- Player 3 set space -->
      <div class="players"><h2><span id="player3-name">Player 3</span>: $<span id="player3-amount">0</span></h2>
      </div>
      <div class=""><button class="btn" id="roll-btn-player3">Roll</button></div>
     
      <!-- Player 4 set space -->
      <div class="players"><h2><span id="player4-name">Player 4</span>: $<span id="player4-amount">0</span></h2></div>
      <div class=""><button class="btn" id="roll-btn-player4">Roll</button></div>
     
      <!-- Card Description -->
      <div class="players"> Card description:
        
      </div>

    </div>
    <div id="dice-form-space">
      <div class="dice-container" id="display-dice-result" > <p>Dice result:</p>
      </div>
      
      <!-- <section class="container">
          <div id="cube">
            <div class="front">
              <span class="dot dot1"></span>
            </div>
            <div class="back">
              <span class="dot dot1"></span>
              <span class="dot dot2"></span>
            </div>
            <div class="right">
              <span class="dot dot1"></span>
              <span class="dot dot2"></span>  
              <span class="dot dot3"></span>
            </div>
            <div class="left">
              <span class="dot dot1"></span>
              <span class="dot dot2"></span>  
              <span class="dot dot3"></span>
              <span class="dot dot4"></span>
            </div>
            <div class="top">
              <span class="dot dot1"></span>
              <span class="dot dot2"></span>  
              <span class="dot dot3"></span>
              <span class="dot dot4"></span>
              <span class="dot dot5"></span>
            </div>
            <div class="bottom">
              <span class="dot dot1"></span>
              <span class="dot dot2"></span>  
              <span class="dot dot3"></span>
              <span class="dot dot4"></span>
              <span class="dot dot5"></span>
              <span class="dot dot6"></span>
            </div>
          </div>
        </section> -->


      <div class="form-container"> <p>All events:</p>
          <textarea id="display-action">

          </textarea>
      </div>
    </div>
    
  </div>

<div>
  <p id="register-text">Property Trading Game from Parker Brothers <span>&#174;</span></p>
</div>

<!-- <script type="text/javascript" src="./src/dice.js"></script> -->
<script type="text/javascript" src="./src/squares.js"></script> 
<script type="text/javascript" src="./src/myGame.js"></script> */}

// </body>