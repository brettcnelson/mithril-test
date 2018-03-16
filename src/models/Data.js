import m from 'mithril';
import Parser from 'rss-parser';

var alt = [
	"https://ricochet.com/series/remnant-jonah-goldberg/feed/",
	"https://ricochet.com/series/goldberg-long-podhoretz/feed/",
	"https://ricochet.com/series/law-talk/feed/",
	"https://ricochet.com/series/ricochet-podcast/feed/",
	"http://feeds.soundcloud.com/users/soundcloud:users:146429914/sounds.rss",
	"http://trolls2.libsyn.com/rss",
	"http://fifthcolumn.podbean.com/feed/",
	"http://feeds.stownpodcast.org/stownpodcast",
	"http://wtfpod.libsyn.com/rss",
	"https://feedpress.me/ReasonAudio",
	"http://mbmbam.libsyn.com/rss",
	"http://wakingup.libsyn.com/rss",
	"http://rss.earwolf.com/by-the-way-in-conversation-with-jeff-garlin",
	"http://thickskin.libsyn.com/rss",
	"http://feeds.codenewbie.org/cnpodcast.xml",
	"http://leoville.tv/podcasts/aaa",
	"http://www.cordkillers.com/blog?format=rss",
	"http://nightattack.tv/feed/video"
]

var Data = {
	wetFeeds: [],
	feeds: alt,
	getFeeds: function() {
		Data.feeds.forEach((f,i) => {
			m.request({
				method: 'GET',
				url: 'https://cors-anywhere.herokuapp.com/'+f,
				headers: {
					"Accept": "application/rss+xml;text/xml"
				},
				deserialize: function(value) {return value}
			})
			.catch(err => {console.log('ERR:'+i, err)})
			.then(res => {
				new Parser().parseString(res, function(err,feed) {
					if (err) {
						console.log(i, Data.feeds[i], err)
					}
					else {
						Data.wetFeeds[i] = feed;
						m.redraw();
					}
				})
			})
		})
	}
}

export default Data;
