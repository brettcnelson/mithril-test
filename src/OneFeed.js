import m from 'mithril';
import Data from './models/Data';
import Episode from './Episode';

var OneFeed = {
	// vnode.attrs.channel.title
	view: function(vnode) {
		var channel = Data.wetFeeds[vnode.attrs.id];
		if (!channel) {
			m.route.set('/');
			return;
		}
		console.log(channel)
		return m('.oneFeed', [
			m('.oneFeedInfo', [
				m('.img-con', [
					m('img.pic-info', {src:channel.itunes.image})
				]),
				m('.infoText', [
					m('.infoLink', [
						m('a', {href:channel.link, target:'_blank'}, channel.title)
					]),
				m('.infoDesc', channel.description)
				])
			]),
			m('.epList', channel.items.map(i=>m(Episode, {ep:i})))
		])
	}
}

export default OneFeed;

