'use strict'

var Xray = require('x-ray')
var x    = Xray()
var fs   = require('fs')

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var crawl_them_all = alphabet.map(function(letter) {
    var url = `https://en.wikipedia.org/wiki/List_of_airports_by_IATA_code:_${letter}`
    return crawlSinglePage(url)
})

Promise.all(crawl_them_all)
    .then(function(arrays) {
        var final_arr = []
        arrays.map(function (arr) {
            final_arr = final_arr.concat(arr)
        })

        fs.writeFile('data/iata/airports.json', JSON.stringify(final_arr, null, 2), (err) => {
            if (err) throw err
            console.log('Data\'s saved to data/iata/airports.json!')
        })
    })

function crawlSinglePage(url) {
    return new Promise(function(resolve, reject) {
        x(url, '#bodyContent #mw-content-text table.wikitable tr', [{
            iata_code: 'td:nth-of-type(1)',
            icao_code: 'td:nth-of-type(2)',
            airport_name: 'td:nth-of-type(3) a@title',
            location_serve: 'td:nth-of-type(4)',
            time: 'td:nth-of-type(5) a@title',
            dst: 'td:nth-of-type(6)'
        }])(function(err, data) {
            if (err) reject(err)
            else resolve(data)
        })
    })
}
