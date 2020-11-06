<ul id="color-list">
    <li>red</li>
    <li>yellow</li>
    <li>blue</li>
    <li>green</li>
    <li>black</li>
    <li>white</li>
</ul>

<script type="text/">
	var agent = function () {
		var color_list = document.getElementById('color-list');
		color_list.addEventListener('click', showColor, true);
		function showColor(e) {
			var x = e.target;
			if (x.nodeName.toLowerCase() === 'li') {
				alert(x.innerHTML);
			}
		}
	}
	agent();

</script>