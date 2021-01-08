
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
                'cta-orange': '#FF4800',
                'qna-smooth': '#f1f2f4'

            },
            fill: ['hover', 'focus'],
            fontFamily: {
                poppins: [
                    'Poppins'
                ]
            },
            opacity: {
                '20': '0.20',
                '15': '0.15',
                '30': '0.3',
                '80': '.8',
                '85': '0.85',
                '90': '.9'


            },
            screens: {
                xs: '450px',
                navBreak: '939px',
                landing: '974px',
                big: '1950px'
            },
            minWidth: {
                '32': '8rem'
            },
            maxWidth: {
                '32': '8rem',
                '36': '9rem',
                'landing': '300px',
                'btn': '177px',
                'crew-card': '285px',
                '8': '8rem',
                'modal-txtsm': '188px',
                'modal-inputs': '255px',
                'more-questions': '532px',
                'reviews-reach': '44rem',
                'crew-card-desk': '552px',
                'route-c': '307px'
            },
            fontSize: {
                'btn': '1.375rem',
                'title': '1.625rem',
                'title-regular': '36px',
                'title-elipse': '32px',
                'modal-route': '68px'

            },
            height: {
                'landing': '27rem',
                'title-cta': '28rem',
                'desk-cta': '30rem',
                'landing-main': '780px',
                'landing-main-big': '1000px',
                'route-img': '141px',
                '36': '9rem',
                'footer': "545px",
                'footer-desk': '525.25px',
                '69pic': '69rem',
                '76': '19rem',
                'navh': '72px',
                'orange-cta': '286px',
                'landing-xs': '505px',
                'bac-landing-xs': '700px'


            },
            width: {
                'title-wta': '478px',
                'route-img': '141px',
                '36': '9rem',
                'modal-inputs': '255px',
                '76': '19rem',
                'txtarea': '32.375rem',
                'orange-cta': '1200px',
                '90vw': '90vw',
                '527px': '527px',
                '430px': '430px',
                '197px': '197px',
                '523px': '523px'




            },
            lineHeight: {
                'landing': '43.2px'
            },
            spacing: {

                '-40': '-10rem',
                '-44': '-11rem',
                '-60': '-15rem',
                '-64': '-16rem',
                '-80': '-20rem',
                '-96': '-24rem',
                '3.5': '0.875rem',
                '7': '1.75rem',
                '14': '3.5rem',
                '18': '4.5rem',
                '28': '7rem',
                '36': '9rem',
                '40': '10rem',
                '80': '20rem',
                '88': '22rem',
                '120': '30rem',
                '130': '32.5rem',
                '150': '37.5rem',
                'modal-inputs': '255px',
                'beneath-booking': '11.68rem',
                '1/6': '16.666667%;',
                '1/10': '10%',
                '2/10': '20%',
                '1/3': '33.333334%',
                '2/3': '66.666667%',
                '8/10': '80%',
                'full': '100%'
            },

            inset: {
                '-wave': '-1px',
                '-modalnr': '-1.3rem',
                '-4': '-1rem',
                '-6': '-1.5rem',
                '-8': '-1.75rem',
                '-10': '-2.5rem',
                '-16': '-4rem',
                '-28': '-7rem',
                '-30': '-7.5rem',
                '-32': '-8rem',
                '-34': '-8.5rem',
                '-34.5': '-8.65rem',
                '-35': '-8.75rem',
                '-20': '-5rem',
                '-36': '-9rem',
                '-40': '-10rem',
                '-62': '-15.5rem',
                '-73.5': '-18.4rem',
                '-74': '-18.5rem',
                '-80': '-20rem',
                '-96': '-24rem',
                '-220p': '-220%',
                '-400p': '-400%',
                '-475p': '-475%',
                '-480p': '-480%',
                '-670px': '-670px',
                '4': '1rem',
                '6': '1.5rem',
                '8': '2rem',
                '10': '2.5rem',
                '14': '3.5rem',
                '16': '4rem',
                '18': '4.5rem',
                '20': '5rem',
                '22': '5.5rem',
                '24': '6rem',
                '28': '7rem',
                '32': '8rem',
                '40': '10rem',
                '60': '15rem',

                '70': '17.5rem',
                '80': '20rem',
                '96': '24rem',
                'cust': '10vw',
                'land': '10rem'
            },
            zIndex: {
                '-10': '-10',
                '-20': '-20'
            },

            transitionDuration: {
                '0': '0ms',
                '2000': '2000ms',
                '3000': '3000ms'
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                rightbounce: {
                    '0%': {
                        transform: 'translateX(0)',
                        animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
                    },

                    '50%': {
                        transform: 'translateX(25%)',
                        animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
                    },

                    '100%': {
                        transform: 'translateX(0%)',
                        animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
                    },
                },
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
                rightbounce: 'rightbounce ease-in-out 1s infinite',
            }
        }
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'active'],
        height: ['responsive', 'hover', 'focus', 'active'],
        display: ['responsive', 'hover', 'focus', 'active'],
        animation: ['hover', 'focus', 'group-hover'],

    },
    plugins: []
}
