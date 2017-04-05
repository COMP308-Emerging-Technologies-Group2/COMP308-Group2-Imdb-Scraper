let request = require('request');
let cheerio = require('cheerio');

module.exports.scrapeMostPopularMovies = function (req, res) {
    let url = 'http://www.imdb.com/chart/moviemeter';
    scraper(req, res, url, 'mostPopularMovies');
};

module.exports.scrapeMostPopularTvs = function (req, res) {
    let url = 'http://www.imdb.com/chart/tvmeter';
    scraper(req, res, url, 'mostPopularTvs');
};

function scraper(req, res, url, arrayName) {
    request(url, (error, response, html) => {
        if (!error) {
            let mostPopularMovies = [];

            let $ = cheerio.load(html);
            let rows = $('table.chart.full-width>tbody.lister-list>tr');

            for (let i = 0; i < rows.length; i++) {
                let movie = {
                    'id': '',
                    'title': '',
                    'year': '',
                    'rating': '',
                    'smallPosterUrl': ''
                }
                let cells = rows.eq(i).children('td');

                movie.id = (cells.eq(1).find('a').attr('href').split('/'))[2];
                movie.smallPosterUrl = cells.eq(0).find('img').attr('src');
                movie.title = cells.eq(1).find('a').text();
                movie.year = cells.eq(1).find('.secondaryInfo').first().text().replace('(', '').replace(')', '')
                movie.rating = cells.eq(2).find('strong').text();

                mostPopularMovies.push(movie);
            }

            let jsonRes = {};
            jsonRes[arrayName] = mostPopularMovies;

            res.status(200).json(jsonRes);
        }
    });
};
