const searchBar = document.getElementById('searchBar');
console.log(searchBar);

const dataCaptions = Array.from(document.querySelectorAll('a[data-caption]'));
console.log(dataCaptions);

searchBar.addEventListener('keyup', (e) => {
	const searchString = e.target.value.toLowerCase();
	console.log(searchString);
	const filteredPics = dataCaptions.filter((a) => {
		if (!a.dataset.caption.toLowerCase().includes(searchString)) {
			a.style.display = 'none';
		}
		return a.dataset.caption.toLowerCase().includes(searchString);
	});
	console.log(filteredPics);
});
