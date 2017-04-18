let request = require('request');
let cheerio = require('cheerio');



module.exports = (req, res, id)=>{
	let url = `http://m.imdb.com/title/${id}/`;

	request(url, (error, response, html)=>{
		if (!error) {
			let latest_tv_episode;
			let $ = cheerio.load(html);
			let nextShow = $('section#watch-options>div.watch-option>a>span');
			let showTitle = $('section#titleOverview>div.media>div.media-body>h1');

			let nextDate = nextShow.text().trim().split(' ');
			let response = {
				title: showTitle.text().trim().split('\n')[0],
				date: nextDate[1]+' '+nextDate[2]+' '+nextDate[3],
				time: nextDate[4]+' '+nextDate[5],
				channel: nextDate[7]
			}
			res.status(200).json({nextDate: response});
		}
	});

}