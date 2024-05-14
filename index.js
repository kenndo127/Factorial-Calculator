let value = document.querySelector('h2');
let btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
  let finalResult = factorial(prompt('input value here'));
  value.textContent = finalResult;
});

function factorial(num) {
  let result = num; 
  if(num === 0 || num === 1)
  return 1;

  while( num > 1){
    num--;
    result = result * num;
  }
  return result
}