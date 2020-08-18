// target search input element
const searchBar = document.getElementById('searchBar');

// create array from a elements that include an attribute of 'data-caption'
const dataCaptions = Array.from(document.querySelectorAll('a[data-caption]'));

searchBar.addEventListener('keyup', (e) => {
	// capture user input into variable and transfrom to lowercase
	const searchString = e.target.value.toLowerCase();

	//filter the array based on user input
	dataCaptions.filter((a) => {
		// if dataset > caption != searchString, change display to none. if user removes input from search, reset display setting of matching results to initial
		if (!a.dataset.caption.toLowerCase().includes(searchString)) {
			a.style.display = 'none';
		}
		else if (a.dataset.caption.toLowerCase().includes(searchString)) {
			a.style.display = 'initial';
		}
		return a.dataset.caption.toLowerCase().includes(searchString);
	});
});
