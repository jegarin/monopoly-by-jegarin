const dice = document.getElementById('dice');
const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');
const dot4 = document.getElementById('dot4');
const dot5 = document.getElementById('dot5');
const dot6 = document.getElementById('dot6');
const dot7 = document.getElementById('dot7');
dice.style.display = 'none';

function rollTheDice() {
  let result = Math.ceil(Math.random() * 6);
  dice.style.display = 'block';
  dot1.style.display = 'none';
  dot2.style.display = 'none';
  dot3.style.display = 'none';
  dot4.style.display = 'none';
  dot5.style.display = 'none';
  dot6.style.display = 'none';
  dot7.style.display = 'none';
  switch (result) {
    case 1:
      dot7.style.display = 'block';
      break;
    case 2:
        dot3.style.display = 'block';
        dot4.style.display = 'block';
      break;
    case 3:
        dot3.style.display = 'block';
        dot4.style.display = 'block';
        dot7.style.display = 'block';
      break;
    case 4:
        dot1.style.display = 'block';
        dot3.style.display = 'block';
      dot4.style.display = 'block';
      dot6.style.display = 'block';
      break;
    case 5:
        dot1.style.display = 'block';
        dot3.style.display = 'block';
        dot4.style.display = 'block';
        dot6.style.display = 'block';
        dot7.style.display = 'block';
      break;
    case 6:
        dot1.style.display = 'block';
        dot2.style.display = 'block';
        dot3.style.display = 'block';
        dot4.style.display = 'block';
        dot5.style.display = 'block';
        dot6.style.display = 'block';
      break;
    default:
      break;
  }
  return result;
}
