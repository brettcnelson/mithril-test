import m from 'mithril';
import Feed from './Feed';
import OneFeed from './OneFeed';
import Data from './models/Data';

var Main = {
	oninit: Data.getFeeds,
	view: function() {
		return m('.main', 'FEEDS', [
			m('.feeds', Data.wetFeeds.map((f,i)=>m(Feed, {key: i, feed: f})))
		])
	}
}

// m.mount(document.body, Main);

m.route(document.body, '/', {
	'/': Main,
	'/feed/:id': OneFeed
})
