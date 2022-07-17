const handleError = (message) => {
    let alert = document.getElementById('no-result-alert');
    alert.innerText = message;
    alert.classList.toggle('d-none');
  
    setTimeout(()=>{
      alert.classList.toggle('d-none');
  }, 3000);
  }