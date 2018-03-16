import m from 'mithril';

var Episode = {
	view: function(vnode) {
		var ep = vnode.attrs.ep;
		// console.log(ep)
		return m('.ep', [
			m('.ep-title', [
				m('a', {href:ep.link, target:'_blank'}, ep.title)
			]),
			m('.ep-subtitle', ep.contentSnippet),
			m('.ep-meta', [
				m('.pubDate', ep.pubDate.split(' +')[0]),
				m('.duration', ep.itunes.duration),
				m('.size', Math.round(ep.enclosure.length/1000000) + ' Mb'),
				m('.download', [
					m('a', {href:ep.enclosure.url}, 'download')
				])
			])
		]);
	}
}

export default Episode;
