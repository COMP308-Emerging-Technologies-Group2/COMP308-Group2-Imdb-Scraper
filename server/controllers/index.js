let request = require('request');
let cheerio = require('cheerio');

module.exports.scrapeMovieDetails = function (req, res) {
    url = 'http://www.imdb.com/chart/moviemeter';

    request(url, function (error, response, html) {
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
            jsonRes = {
                'mostPopularMovies': mostPopularMovies
            }
            res.status(200).json(jsonRes);
        }
    });
};
