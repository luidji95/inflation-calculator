'strict'

let infaltionRate = document.getElementById('percent-of-inflation');
let money = document.getElementById('value-of-euros');
let years = document.getElementById('year');
let btnIzracunaj = document.getElementById('Izracunajbtn');
let finalresult = document.getElementById('finalresult');

btnIzracunaj.addEventListener('click', function(){
    let y = Number(infaltionRate.value);
    let x =  Number(money.value);
    let z = Number(years.value);

    let newValue = x + (x*(y/100));

   finalresult.textContent = `${x}e ce u roku od ${z} godina sa stopom inflacije od ${y}% vredeti ${newValue}`;
   
   console.log('RESTART');
   infaltionRate.value="";
   console.log( typeof infaltionRate.value);
   money.value="";
   years.value="";

});
