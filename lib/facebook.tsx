// import graph from 'fb-react-sdk';
var graph = require('fb-react-sdk');

export function getFacebookGraph() {
    graph.setAccessToken(process.env.FACEBOOK_API_TOKEN);
    return graph;
};