const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const graph1 = [
    [0, 3, 0, 0, 0],
    [4, 0, 1, 0, 0],
    [0, 2, 0, 1, 0],
    [0, 0, 2, 0, 1],
    [0, 0, 0, 3, 0]
];

const graph2 = [
    [0, 1, 3, 1, 2],
    [3, 0, 0, 0, 0],
    [5, 0, 0, 0, 0],
    [2, 0, 0, 0, 0],
    [1, 0, 0, 0, 0]
];

const graph3 = [
    [0, 1, 0, 0, 7],
    [3, 0, 2, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 2],
    [1, 0, 0, 2, 0]
];

const graph4 = [
    [0, 2, 0, 0, 0],
    [2, 0, 0, 0, 0],
    [0, 0, 0, 2, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 2, 0, 0]
];

const graph5 = [
    [2, 1, 0, 0, 0],
    [1, 0, 6, 0, 0],
    [0, 2, 0, 2, 0],
    [0, 0, 2, 0, 1],
    [0, 0, 0, 2, 1]
];

const graph6 = [
    [0, 1, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0]
];

function allTests() {
    const results = [
        dijkstra(graph1, 0).join(',') === [0, 3, 4, 5, 6].join(','),
        dijkstra(graph2, 1).join(',') === [3, 0, 6, 4, 5].join(','),
        dijkstra(graph3, 0).join(',') === [0, 1, 3, 4, 6].join(','),
        dijkstra(graph4, 0).join(',') === [0, 2, Infinity, Infinity, Infinity].join(','),
        dijkstra(graph5, 0).join(',') === [0, 1, 7, 9 ,10].join(','), //This is a case where there is no path?
        dijkstra(graph6, 3).join(',') === [Infinity, Infinity, Infinity, 0, 1, 1, 2].join(',')
    ];
    return results.every(Boolean);
}

jsc.check(allTests);