tailwind.config  = {
    theme: {
        fontFamily: {
            'sans': ['Public\\ Sans', 'sans-serif'],
        },
        colors: {
            'dark-blue': 'hsl(233, 26%, 24%)',
            'lime-green': 'hsl(136, 65%, 51%)',
            'bright-cyan': 'hsl(192, 70%, 51%)',
            'blue-gray': 'hsl(233, 8%, 62%)',
            'light-blue-gray': 'hsl(220, 16%, 96%)',
            'very-light-gray': 'hsl(0, 0%, 98%)',
            'white': 'hsl(0, 0%, 100%)',
        },
        extend: {
            spacing: {
                '4.5': '1.125rem',
                '22': '5.5rem',
                '30': '7.5rem'
            },
            fontSize: {
                'xxs': '0.65rem',
                '4.5xl': ['2.5rem', {
                    lineHeight: '46px'
                }],
            },
            lineHeight: {
                '4.5': '1.125rem',
            }
        }

    },
}