SAINSBURYS.FlickrImages=function(data) {

	var self=this;
	
	var CONSTANTS={
		SELECTEDITEMS:'selectedItems',
		SELECTEDCSS:'selected'
	};

	/* Images data item */
	this.Item=function(data) {
	
		var selected=(self.selectedItems.indexOf(data.link)!=-1)?true:false;
		data.selected=ko.observable(selected);
		
		data.selectedcss=ko.pureComputed(
			function() {
				return this.selected()?CONSTANTS.SELECTEDCSS:'';
			},
			data
		);
		return data;
		
	};
	
	this.items=ko.observableArray([]);

	/* Array of selected item references */
	this.selectedItems=ko.observableArray([]);
	
	this.load=function() {
		
		var items=data.items;
		
		for (var i=0, ii=items.length;i<ii;i++) {
			self.items.push(new self.Item(items[i]));
		}

	};

	this.saveSelectedItems=function() {

		if (typeof(Storage) !== 'undefined') {
			localStorage.setItem(CONSTANTS.SELECTEDITEMS, JSON.stringify(self.selectedItems()));
		} 

	};
	
	this.getSelectedItems=function() {

		if (typeof(Storage) !== 'undefined') {
			var items=localStorage.getItem(CONSTANTS.SELECTEDITEMS);
			if (items!==null) {
				self.selectedItems(JSON.parse(items));
			}
		} 

	};
	
	this.toggleSelection=function(item) {
	
		if (item.selected()) {
			self.selectedItems.remove(item.link);
		}
		else {
			self.selectedItems.push(item.link);
		}

		item.selected(!item.selected());

		self.saveSelectedItems();
		
	};

	this.getSelectedItems();
	this.load();

	return this;
	
};
