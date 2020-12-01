    // determines background color
    let lightGrey = ['%', 'CE', 'C', 'Backspace', '1/x', 'x^2', 'sqrt(x)', '/', 'x', '-', '+']
    let white = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '+/-', '0', '.']
    let blue = ['=']

    const evaluateColor = (sym) => {
        if (lightGrey.indexOf(sym) > -1) {
            return 'cellBG_lightGrey'
        }

        if (white.indexOf(sym) > -1) {
            return 'cellBG_white'
        }

        if (blue.indexOf(sym) > -1) {
            return 'cellBG_blue'
        }

    }

    export { evaluateColor }