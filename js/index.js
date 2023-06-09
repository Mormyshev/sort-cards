/*
document.querySelector('.sort-asc').onclick = function () {
	mySort('data-price');
}
document.querySelector('.sort-desc').onclick = function () {
	mySortDesc('data-price');
}
document.querySelector('.sort-rating').onclick = function () {
	mySort('data-rating');
}
*/
sort.onchange = e => {
	let value = e.target.value;
	switch (value) {
		case 'sort-asc':
			mySort('data-price');
			break;
		case 'sort-desc':
			mySortDesc('data-price');
			break;
		case 'sort-rating':
			mySort('data-rating');
			break;
	}
}

function mySort(sortType) {
	let nav = document.querySelector('.products__list');
	for (let i = 0; i < nav.children.length; i++) {
		for (let j = i; j < nav.children.length; j++) {
			if (+nav.children[i].getAttribute(sortType) > +nav.children[j].getAttribute(sortType)) {
				replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
				insertAfter(replacedNode, nav.children[i]);
			}
		}
	}
}

function mySortDesc(sortType) {
	let nav = document.querySelector('.products__list');
	for (let i = 0; i < nav.children.length; i++) {
		for (let j = i; j < nav.children.length; j++) {
			if (+nav.children[i].getAttribute(sortType) < +nav.children[j].getAttribute(sortType)) {
				replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
				insertAfter(replacedNode, nav.children[i]);
			}
		}
	}
}

function insertAfter(elem, refElem) {
	return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

$('.slider').slick({
	dots: true
});


