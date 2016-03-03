prism.labelTooltip = function(widget, widgetArgs, size) {

    /*
    First, check if label should be truncated.
    If so, add ellipsys
    */

    widget.on('beforeviewloaded', function(w, args) {

        args.options.xAxis.labels.formatter = function() {
            console.log(this);
            return '<div class="hastip" title="' + this.value + '">' + this.value + '</div>';
        };

    	args.options.xAxis.labels.formatter = function() {
    		var ellipsys = this.value.length > size ? '' : '...';
    		return this.value + ellipsys;
    	};
    });

    widget.on("beforedatapointtooltip", function(context, args) {

        document.getElementsByTagName('tspan');
        var dom = prism.$injector.get('ux-controls.services.$dom');
        
        context = args.options.xAxis.labels;
        console.log(context);
        console.log(args.context.points);
    });
};
