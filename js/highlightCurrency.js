const highlightCurrency = (newCurrency) => {
  Array.from(document.querySelectorAll('#currency-buttons button'), el => {
    el.classList.add('usa-button--outline')
  })
document.querySelector(`#${newCurrency}-button`).classList.remove(`usa-button--outline`)
    
}

module.exports = highlightCurrency