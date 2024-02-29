const generateBtn = document.getElementById('generate-button')

const singleHexColorGenerator = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A' , 'B', 'C', 'D', 'E', 'F']
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * hex.length)
        hexColor += hex[randomNumber]
    }
    return hexColor
}

const colorPaletteGenerator = () => {
    const colorPalette = []
    for (let i = 0; i < 4; i++) {
        colorPalette.push(singleHexColorGenerator())        
    }
    return colorPalette
}

const renderColorPalette = () => {
    const colorPalette = colorPaletteGenerator()
    const colorsContainer = document.querySelector('.colors-container')
    colorsContainer.innerHTML = ""
    colorPalette.forEach((color, index) => {
        const colorDiv = document.createElement('div')
        colorDiv.id = `color${index + 1}`
        colorDiv.style.backgroundColor = color
        colorsContainer.append(colorDiv)
    })
}

generateBtn.addEventListener('click', renderColorPalette)