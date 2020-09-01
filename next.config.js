const withSass = require('@zeit/next-sass');
const sitemap = require('nextjs-sitemap-generator');

module.exports = withSass({
    env: {
        NEXT_DATOCMS_API_TOKEN: '420d3cb14efc233d6082161fcdc659',
        FACEBOOK_API_TOKEN: "EAAOxM7VZB2CcBAOfbMGbPDsouo9GyIibOtRw8lFcs9PaY6MAMLBJAzllZC7DZBKCTMvgLqnebKnEGFgIQwZAlLc5XujQQLDbWDoDIeDJszzqXITScoOi3HZANOQm8xEZBX5JllFpQc1kcqPSREmHGMkUp28bBlagPHsLgxZBu8PpRJBwbppea2iw2oSV0nu2atn1kvs3z4AgwZDZD"
    },
    cssModules: true,
    target: 'serverless',
    experimental: {
        jsconfigPaths: true,
    }
});

sitemap({  
    baseUrl: 'https://www.us-dionysienne.fr',  
    pagesDirectory: __dirname + "/pages",  
    targetDirectory : 'static/'  
});

