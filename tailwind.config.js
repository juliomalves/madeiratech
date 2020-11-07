const production = process.env.NODE_ENV === 'production'

module.exports = {
    future: {
        defaultLineHeights: true,
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true,
        standardFontWeights: true
    },
    purge: {
        content: ['./src/**/*.svelte'],
        enabled: production
    },
    theme: {
        extend: {
            gridTemplateColumns: {
                card: '200px auto 200px'
            }
        }
    }
}
