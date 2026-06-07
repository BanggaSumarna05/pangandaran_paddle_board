
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
        colors: {
            primaryAccent: '#16D5CC',
            secondaryAccent: '#FFB434',
            textMain: '#858585',
            brandWhite: '#FFFFFF',
            brandDark: '#000000',
            neutralLight: '#FAFAFA',
        },
        fontFamily: {
            heading: ['"Josefin Sans"', 'sans-serif'],
            body: ['"Source Sans Pro"', 'sans-serif'],
        },
        boxShadow: {
            'premium-low': 'rgba(0, 0, 0, 0.03) 0px 0px 10px 2px',
            'premium-mid': 'rgba(0, 0, 0, 0.05) 0px 5px 15px 0px',
            'premium-high': 'rgba(22, 213, 204, 0.1) 0px 10px 30px 0px',
        }
    }
  },
  plugins: [],
}
