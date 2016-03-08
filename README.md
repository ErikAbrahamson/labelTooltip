# Bar Chart Label Truncation
This plugin will truncate bar chart labels in order to increase readability
### Instructions
1. Navigate to `X:\Program Files\Sisense\PrismWeb\plugins\`
1. Create a new folder named `labelTruncate`
1. In your SiSense dashboard, navigate to the particular widget you'd like to run the code on
1. Inside the widget view, click on the hamburger menu, then click *Edit Script*.
1. Copy and paste the following code, replacing `length` with the numerical maximum length you want your labels to have. If no length is specified, the length will default to 10.

```javascript
widget.on('initialized', function() {
	labelTruncate(widget, length);
});
```
