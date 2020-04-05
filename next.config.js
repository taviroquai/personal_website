const withPWA = require('next-pwa')
 
module.exports = withPWA({
    exportTrailingSlash: true,
    exportPathMap: function() {
        return {
        '/': { page: '/' }
        };
    },
    pwa: {
        dest: 'public'
    }
});