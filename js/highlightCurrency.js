const highlightCurrency = (newCurrency) => {
  
document.querySelector(`#${newCurrency}-button`).classList.remove(`usa-button--outline`)
    
}

module.exports = highlightCurrency