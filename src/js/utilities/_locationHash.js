const locationHash = () =>{
  
  if (document == 'undefined' || window == 'undefined') return false;

  const url = window.location.hash;
  const hash = url.indexOf('#');
  const id = hash != -1 ? url.substring(hash).replace('/','') : '';
  const justHash = id.substring(1) === '' ? true : false;

  if(!justHash){
    if(id !== '' && document.querySelectorAll(id).length){
      return [true, id];
    }else{
      return false;
    }
  }else{
    return false;
  }
};

// Export
export default locationHash;