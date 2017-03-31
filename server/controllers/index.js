let request = require('request');
let cheerio = require('cheerio');

module.exports.scrapeMovieDetails = function (req, res) {
    url = 'http://www.imdb.com/chart/moviemeter';
    request(url, function (error, response, html) {
        if (!error) {
            let $ = cheerio.load(html);
            let rows = $('table.chart.full-width>tbody.lister-list>tr');

            let cells = rows.eq(0).children('td');
            //id
            let pathname = cells.eq(1).find('a').attr('href').split('/');
            console.log("["+ pathname[2] + "]");
            
        }
    });
};
