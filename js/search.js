const searchBar = document.getElementById('searchBar');

const dataCaptions = Array.from(document.querySelectorAll('a[data-caption]'));

searchBar.addEventListener('keyup', (e) => {
	const searchString = e.target.value.toLowerCase();
	dataCaptions.filter((a) => {
		if (!a.dataset.caption.toLowerCase().includes(searchString)) {
			a.style.display = 'none';
		}
		else if (a.dataset.caption.toLowerCase().includes(searchString)) {
			a.style.display = 'initial';
		}
		return a.dataset.caption.toLowerCase().includes(searchString);
	});
});
