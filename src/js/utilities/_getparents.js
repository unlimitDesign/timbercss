const getParents = (element, className)  => {

	if (document == 'undefined') return false;

	// Crete an array for the parents
	var parents = [];

	// Push each parent elementent to the array that match
	for (; element && element !== document; element = element.parentNode) {
		if(className){
			if(element.classList.contains(className)) parents.push(element);
		}else{
			 parents.push(element);
		}
	}

	// Return the parents
	return parents;
};

// Export
export default getParents;