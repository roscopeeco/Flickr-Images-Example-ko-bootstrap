# Flickr-Images-Example-ko-bootstrap
Display Flickr Images using Knockout and Bootstrap v4

Knockout
========
Knockout has been used as the JavaScript UI framework to display the images returned from the Flickr service call.

The file FlickrImages.js contains the Knockout view model that handles the loading of the service data, ui selection interactions 
& saving/loading of selected items to local storage.

Bootstrap
=========

Bootstrap v4 alpha.3 has been chosen as the css framework for this exercise. This release of Bootstrap includes a new UI CSS widget 
called Cards which has been used to display the images. The Cards are stacked down the page to give a visually appealing look.

Using Bootstrap also means that the page is fully responsive across different devices. This can be tested by resizing the browser window.

Cross-Browser Testing
=====================

Testing has been perfomed on Firefox 48 & Chrome 49.

One issue that was highlighted in testing is that one or more selected images are sometimes not included in the Flickr service results when the page 
refreshes. This obviously means that those images will not be highlighted.
