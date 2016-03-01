prism.labelTooltip = function(widget, widgetArgs, labelSize) {

    // 1. Truncate Labels
    widget.on("beforeviewloaded", function(e, args) {
        var labelSize = labelSize || 10;

        _.each(widgetArgs.seriesIndexes, function(i) {
            if (args.options.series.length > i) {

                // Truncate labels
                console.log(args.options.series[i]);
                var elipsys = args.options.series[i].label.length < 6 ? '' : '...';
                args.options.series[i].label = args.options.series[i].label.substring(0, labelSize) + ellipsys;
            }
        });
    });

    //2. Build Tooltip data
    widget.on("beforedatapointtooltip", function(se, args) {
        var category = args.context.pointScope.selectionData[0], points = [];
        if (widgetArgs.displayCurrentSelection) points = args.context.points;

        _.each(widgetArgs.seriesIndexes, function(i) {
            var e = args.widget.queryResult.series[i];

            for (var j = 0; j < e.data.length; ++j) {
                if (e.data[j].selectionData[0] == category) {
                    points.push({
                        seriesName: e.name,
                        showPercentage: false,
                        value: e.data[j].y.toLocaleString(),
                        valueColor: e.data[j].color
                    });
                }
            }
        });

        args.context.points = points;
    });
};
