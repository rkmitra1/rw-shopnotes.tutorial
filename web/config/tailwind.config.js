/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h2: {
              '@apply p-[0.5rem] text-center bg-gray-200 -mx-4 rounded-t-xl':
                {},
              // // Your custom h2 styles here
              // padding: '0.5rem', // Example: Add a padding
              // textAlign: 'center',
              // backgroundColor: '#f3f4f6',
              // marginLeft: '-1rem',
              // marginRight: '-1rem',
              // borderTopLeftRadius: '0.5rem',
              // borderTopRightRadius: '0.5rem',
            },
            '.aside': {
              '@apply bg-gray-400 text-white px-4': {},
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
