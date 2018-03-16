import m from 'mithril';

var Feed = {
	view: function(vnode) {
		var channel = vnode.attrs.feed;
		var title = channel.title;
		var desc = channel.description;
		var img = channel.itunes.image;
		var alt = 'https://i1.adis.ws/i/maplin/A99JB_1?w=365&h=365&qlt=80&img404=A99JB_set&v=1&locale=en-gb';
		return m('.feed', {onclick:()=>m.route.set('/feed/:id', {id:vnode.attrs.key})}, [
			m('.img-con', m('img.pic', {src:img || alt})),
			m('.feed-title', title),
			m('.feed-desc', desc)
		])
	}
}

export default Feed;
