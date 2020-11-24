module.exports = {
    prefix: '',
    important: false,
    separator: ':',
    theme: {

        extend: {
            colors: {
                'vegan-red': '#ED4924',
                'vegan-orange': '#F17322',
                'vegan-blue': '#154752',
                'button-secondary': '#2F7C8C',
                'btn-primary-hover': '#FFE5DA',
                'qna': '#EAECF1'

            },
            fontFamily: {
                poppins: [
                    'Poppins'
                ]
            },
            opacity: {
                '15': '0.15',
                '30': '0.3',
                '80': '.8',
                '85': '0.85',


            },
            screens: {
                navBreak: '939px',
                xs: '375px',
                landing: '974px'
            },
            maxWidth: {
                'landing': '300px',
                'btn': '177px'
            },
            fontSize: {
                'btn': '1.375rem',
                'title': '1.625rem',
                'title-regular': '36px'
            },
            height: {
                'landing': '27rem',
                'title-cta': '28rem',
                'desk-cta': '30rem',
                'landing-main': '780px',
                'route-img': '141px',
                '36': '9rem'

            },
            width: {
                'title-wta': '478px',
                'route-img': '141px',
                '36': '9rem'

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
