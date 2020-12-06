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
                'qna': '#EAECF1',
                'hr-border': '#e5ebec',
                'modal-input': '#D3D3D3',
                'arrow-active': '#828282',
                'cta-orange': '#FF4800'

            },
            fill: ['hover', 'focus'],
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
                '90': '.9'


            },
            screens: {
                navBreak: '939px',
                xs: '375px',
                landing: '974px'
            },
            maxWidth: {
                'landing': '300px',
                'btn': '177px',
                'crew-card': '285px',
                '8': '8rem',
                'modal-txtsm': '188px',
                'modal-inputs': '255px',
                'more-questions': '532px',
                'reviews-reach': '44rem',
                'crew-card-desk': '552px'
            },
            fontSize: {
                'btn': '1.375rem',
                'title': '1.625rem',
                'title-regular': '36px',
                'title-elipse': '32px',

            },
            height: {
                'landing': '27rem',
                'title-cta': '28rem',
                'desk-cta': '30rem',
                'landing-main': '780px',
                'route-img': '141px',
                '36': '9rem',
                'footer': "545px",
                'footer-desk': '525.25px',
                '69pic': '69rem',
                '76': '19rem',
                'navh': '72px'

            },
            width: {
                'title-wta': '478px',
                'route-img': '141px',
                '36': '9rem',
                'modal-inputs': '255px',
                '76': '19rem',
                'txtarea': '32.375rem'


            },
            lineHeight: {
                'landing': '43.2px'
            },
            spacing: {
                '7': '1.75rem',
                'modal-inputs': '255px',
                '36': '9rem',
                '80': '20rem',
                '28': '7rem',
                'beneath-booking': '11.68rem'

            },
            inset: {
                '-6': '-1.5rem',
                '10': '2.5rem',
                '-10': '-2.5rem',
                '14': '3.5rem',
                '20': '5rem',
                'minus20': '-5rem',
                '28': '7rem',
                'cust': '10vw',
                'land': '10rem',
                '-16': '-4rem',
                '-20': '-5rem',
                '24': '6rem',
                '18': '4.5rem'

            },
            transitionDuration: {
                '0': '0ms',
                '2000': '2000ms',
                '3000': '3000ms'
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
