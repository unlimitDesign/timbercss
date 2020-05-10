const passiveSupported = () =>{
  let supportsPassive = false;
  try {
    const options = {
      get passive() {
        supportsPassive = true;
        return false;
      }
    };

    window.addEventListener('test', null, options);
    window.removeEventListener('test', null, options);
  } catch(err) {
    supportsPassive = false;
  }
  return supportsPassive;
}

// Export
export default passiveSupported;