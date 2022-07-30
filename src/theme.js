import {createTheme} from '@mui/material/styles'
import {red} from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#543895',
        },
        secondary: {
            main: '#1A1325',
        },
        error: {
            main: red.A400,
        },
        divider: '#543895',
        background: {
            default: '#1A1325',
            paper: '#543895',
        },
        text: {
            primary: '#f3f3f3',
            secondary: '#EEEEEE',
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
})

export default theme
