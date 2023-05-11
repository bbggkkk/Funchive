'use client';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: [
            'var(--default-font)',
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
});

export default function Theme({ children }) {
    return <ThemeProvider theme={theme}><CssBaseline/>{children}</ThemeProvider>;
}
