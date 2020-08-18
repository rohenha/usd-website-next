const withSass = require('@zeit/next-sass');

module.exports = withSass({
    env: {
        NEXT_DATOCMS_API_TOKEN: '420d3cb14efc233d6082161fcdc659'
    },
    experimental: {
        jsconfigPaths: true,
    }
})

