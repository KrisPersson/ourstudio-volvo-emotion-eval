
const _primitives = {
    greyscale: {
        "100": 'rgba(255, 255,  255, 1)',
        "300": 'rgba(250, 250, 250, 1)',
        "400": 'rgba(240, 243, 244, 1)',
        "500": 'rgba(97, 97, 97, 1)',
        "700": 'rgba(48, 48, 48, 1)',
        "900": 'rgba(0, 0, 0, 1)'
    },
    blue: {
        "700": 'rgba(27, 54, 93, 1)',
        "500": 'rgba(112, 137, 172, 1)',
        "300": 'rgba(206, 217, 229, 1)'
    },
    yellow: {
        "700": 'rgba(187, 129, 17, 1)',
        "500": 'rgba(240, 191, 95, 1)'
    },
    red: {
        "700": 'rgba(154, 26, 14, 1)',
        "500": 'rgba(191, 32, 18, 1)',
        "300": 'rgba(252, 229, 227, 1)'
    },
    green: {
        "700": 'rgba(48, 97, 10, 1)',
        "300": 'rgba(238, 252, 227, 1)'
    },
}

export const colors = {
    primary: {
        text: _primitives.greyscale[900],
        background: _primitives.greyscale[100],
        surface: _primitives.blue[700],
        border: _primitives.greyscale[400]
    },
    secondary: {
        text: _primitives.greyscale[700],
        background: _primitives.greyscale[300],
        surface: _primitives.blue[500],

    },
    tertiary: {
        text: _primitives.greyscale[500],
        surface: _primitives.blue[300]

    },
    success: {
        darker: _primitives.green[700],
        lighter: _primitives.green[300],
    },
    danger: {
        darker: _primitives.red[700],
        default: _primitives.red[500],
        lighter: _primitives.red[300],
    },
    warning: {
        darker: _primitives.yellow[700],
        default: _primitives.yellow[500],
    },
    white: _primitives.greyscale[100]
}