# Crunchy Rand Queue

Change the Random button on the Crunchyroll queue page to randomize over your queue

I have enough things sitting in my Crunchyroll queue that even looking at it to decide what I want
to watch is a little overwhelming. They have a "Random" button on the desktop site, but it's random
over every series on the site. I wanted a means to pick something random from my queue and play the
next episode.

Crunchy Rand Queue is a bookmarklet I wrote to provide a quick link to a random series in my queue.
It currently overwrites the text and link of the "Random" button on the top bar, only if you're
currently looking at your queue. Since Crunchyroll doesn't have an automatic means to look at your
queue, I need to have all the series links available to be able to get a quick link pulled up.

## Step 1: "Install" the bookmarklet

Copy the following Javascript into a new bookmark. You'll need to open either your bookmarks menu
or bookmarks toolbar and right-click to create a new bookmark to be able to paste this into the
location box.

```js
javascript: (function() {
    _my_script=document.createElement('SCRIPT');
    _my_script.type='text/javascript';
    _my_script.src='https://QuietMisdreavus.github.io/crunchyRandQueue/crunchyRandQueue.js?x='+(Math.random());
    document.getElementsByTagName('head')[0].appendChild(_my_script);
    })();
```

## Step 2: Run the script on your queue

Once you're on [the Crunchyroll queue page][1], run the script by "navigating" to the bookmark
containing the Javascript you copied above. You'll know it works when the "Random" button in the
top navigation bar changes its text to say "Rand Q" instead. The link will also point to a specific
series from your queue, at the episode it would play. You can run the script again to pick a
different series before clicking to watch.

[1]: http://www.crunchyroll.com/home/queue
