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
                navBreak: '939px',
                xs: '375px',
                landing: '974px'
            },
            maxWidth: {
                'landing': '300px'
            },
            fontSize: {
                'btn': '1.375rem'
            },
            height: {
                'landing': '27rem',

            },
            lineHeight: {
                'landing': '43.2px'
            }
        }
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'active'],
        height: ['responsive', 'hover', 'focus', 'active'],
        display: ['responsive', 'hover', 'focus', 'active']
    },
    plugins: []
}
