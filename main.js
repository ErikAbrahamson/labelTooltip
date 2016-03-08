(function(ns) {
    ns.labelTruncate = function(w, size) {
    	w.on('beforeviewloaded', function(w, args) {
            size = size || 10;
    		args.options.xAxis.labels.formatter = function() {
                var ellipsys = this.value.length >= size ? '...' : '';
    	        return this.value.substring(0, size) + ellipsys;
    		};
    	});
    };
}(window));
