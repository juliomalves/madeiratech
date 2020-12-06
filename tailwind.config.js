const colors = require('tailwindcss/colors')

const production = process.env.NODE_ENV === 'production'

module.exports = {
    purge: {
        content: ['./src/**/*.svelte'],
        enabled: production
    },
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: colors.white,
            gray: colors.coolGray
        },
        extend: {
            gridTemplateColumns: {
                card: '200px auto 200px'
            }
        }
    }
}
