const withSass = require('@zeit/next-sass');
const sitemap = require('nextjs-sitemap-generator');

module.exports = withSass({
    env: {
        NEXT_DATOCMS_API_TOKEN: '420d3cb14efc233d6082161fcdc659',
        FACEBOOK_API_TOKEN: "EAAOxM7VZB2CcBAPt7ZBQGpCW2RebzZBZCXLuysV52MQkIZB1Rl75DSlXZC6AXZAIQZAbWK2jLIsdUgRX8MNn9cg1saXoa442bScJyUoBN8Ydy16jJ7aUWkaGUGGiUwj5TS45aPnogTCAuqE2BVNGL8CG1foM7lYi0QBkvDBrAYa7TwZDZD"
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

