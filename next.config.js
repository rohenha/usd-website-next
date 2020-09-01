const withSass = require('@zeit/next-sass');
const sitemap = require('nextjs-sitemap-generator');

module.exports = withSass({
    env: {
        NEXT_DATOCMS_API_TOKEN: '420d3cb14efc233d6082161fcdc659',
        FACEBOOK_API_TOKEN: "EAAOxM7VZB2CcBAM7fy0OoHfoVZAYgPgvV1NUAnHj4vKsgJ7jcMTOd5DdgL6RZB7LIbvHYScZAWhMqr3UYtaZAEMnBV4xxHuCn2YC7rk73phQgkLJdEZCAJdvI4oWil8suDF3fX5ZCu7TxG2N3BojVTZBYoMuQv7s6InYEoqEdPcfQOMd9qARafd3eNLHEbZCwREiZA04l8BZAC6vAZDZD"
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

