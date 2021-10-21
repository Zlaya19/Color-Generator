const btn = document.getElementById('btnColor');
const container = document.getElementById('container');

/*
We'll connect a click event listener to the button. Clicking on it will generate a random hex number
and we use them on the container div style background.
*/

btn.addEventListener('click', function(){
    let color = '#';
  const colorArray = ['a','b','c','d','e','f','1','2','3','4','5','6','7','8','9','0'];
  for( let i=0; i<6; i++){
      const mathRandom = [Math.floor(Math.random() * colorArray.length)];
      color += colorArray[mathRandom];

      container.style.background = color;
  }});