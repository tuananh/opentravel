'use strict'

var Xray = require('x-ray')
var x = Xray()
var fs = require('fs')

var url = 'https://en.wikipedia.org/wiki/List_of_airline_codes'

x(url, '#bodyContent #mw-content-text table.wikitable tr', [{
    iata_code: 'td:nth-of-type(1)',
    icao_code: 'td:nth-of-type(2)',
    airline_name: 'td:nth-of-type(3) a@title',
    call_sign: 'td:nth-of-type(4)',
    country: 'td:nth-of-type(5)'
}])(function(err, data) {
    if (err) {
        console.log('Unable to grab data from Wikipedia', err)
    } else {
        fs.writeFile('data/airlines/wikipedia-airline-codes.json', JSON.stringify(data, null, 2), (err) => {
            if (err) throw err
            console.log('Data\'s saved to data/airlines/wikipedia-airline-codes.json!')
        })
    }
})