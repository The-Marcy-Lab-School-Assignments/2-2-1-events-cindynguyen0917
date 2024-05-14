const button = document.querySelector('#click-button')

const clickCounterHandler = (event) => {
  let clicks = Number(button.getAttribute("data-clicks"))
  clicks += 1;
  button.setAttribute('data-clicks', clicks)
  console.log(clicks)
  if (clicks === 1) {
    button.textContent = `I've been clicked ${clicks} time.`
  } else {
    button.textContent = `I've been clicked ${clicks} times!`
  }
};

button.addEventListener('click', clickCounterHandler)

const para = document.querySelector('#keydown-tracker')

const handleKeydown = (event) => {
  console.log(event)
  para.textContent = `You pressed ${event.code}`
};
document.body.addEventListener('keydown', handleKeydown)


const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');
  resultSpan.textContent = event.target.textContent;
};

const addNewRandomNumber = () => {
};

const main = () => {
  const delegationContainer = document.querySelector('#delegation');

  delegationContainer.addEventListener('click', handleDelegation);
};

main();
