module.exports = {
    prefix: '',
    important: false,
    separator: ':',
    theme: {

        extend: {
            colors: {
                'vegan-red': '#ED4924',
                'vegan-orange': '#F17322',
                'vegan-blue': '#154752'
            },
            fontFamily: {
                poppins: [
                    'Poppins'
                ]
            },
            opacity: {
                '80': '.8',
                '85': '0.85',
            },
            screens: {
                navBreak: '939px'
            },
        }
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'active']
    },
    plugins: []
}
