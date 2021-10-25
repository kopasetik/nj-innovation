const unhighlightCurrencies = () => {
 Array.from(document.querySelectorAll('#currency-buttons button'), el => {
    el.classList.add('usa-button--outline')
  })
    
}

module.exports = unhighlightCurrencies