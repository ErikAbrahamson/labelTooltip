prism.labelTooltip = function(widget, widgetArgs, size) {

    widget.on('beforeviewloaded', function(w, args) {
    	args.options.xAxis.labels.formatter = function() {
    		var ellipsys = this.value.length > size ? '' : '...';
    		return this.value + ellipsys;
    	};
    });

    widget.on("beforedatapointtooltip", function(se, args) {
        var dom = prism.$injector.get('ux-controls.services.$dom');
        console.log(args.context.points);
    });
};
