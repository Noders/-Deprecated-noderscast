var getConfig = require('hjs-webpack');

module.exports = getConfig({
    in: 'index.jsx',
    out:'',
    isDev:process.env.NODE_ENV !== 'production'
})
