const locationHash = () =>{
	
	if (document == 'undefined' || window == 'undefined') return false;

	const url = window.location.hash, id = url.indexOf('#');
	const hash = id != -1 ? url.substring(id) : '';
	if(hash !== '' && document.querySelectorAll(hash).length){
		return [true, hash];
	}else{
		return false;
	}
};

// Export
export default locationHash;
