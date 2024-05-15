const clickCounter = (event) => {
    const results = document.querySelector('#results')
    let num = Number(results.textContent)
    console.log(num)
    num += 1
    results.textContent = num
}
const addButton = document.querySelector('#add-one')
addButton.addEventListener('click', clickCounter)