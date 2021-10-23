const updateDOM = (selector, newText) => {
    const element = document.querySelector(selector)
    element.textContent = newText
}

module.exports = updateDOM