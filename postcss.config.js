// const tailwindcss = require('tailwindcss');

// module.export = {
//     plugins: [
//         tailwindcss('./tailwind.config.js'),
//         require('autoprefixer')
//     ]
// };

module.exports = () => ({
    plugins: [
        require("tailwindcss"),
        require("autoprefixer")
    ], 
  })