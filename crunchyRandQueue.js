//Crunchy Rand Queue - a button that picks something random from your queue
//(c) 2015 icesoldier

(function() {
	function init() {
		if (document.documentURI.search('crunchyroll.com/home/queue') === -1) {
			//we're not on the queue page - abort
			return;
		}

		if (!$) {
			alert("Crunchyroll stopped using jQuery? This script needs to be updated.");
			return;
		}

		var randButton = $('a.header-icon[href^="/random"]');

		if (randButton.length === 0) {
			randButton = $('a.header-icon:contains("Rand Q")');
		}

		if (randButton.length === 0) {
			alert("The Random button has moved? This script needs to be updated.");
			return;
		}

		var queueItems = $('li.queue-item a.episode');

		//TODO - make this an onClick handler instead so I can hide the href from being peeked at?
		var queueLink = queueItems[Math.floor(Math.random() * queueItems.length)].href;
		randButton.attr('href', queueLink);

		randButton.children('.caption').text('Rand Q');
	}

	init();
})();
