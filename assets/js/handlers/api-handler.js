let usedAnime = [];

const findAnime = (image) => {
  // check type of file
  if(image.type != 'image/jpeg' && image.type != 'image/png'){
    handleError('Please provide an image');
    return;
  }

  // clear previous results
  clearResults();

  // start loading spinner
  toggleSpinner();
  
    const formData = new FormData();
    formData.append('image', image);
  
    fetch('https://api.trace.moe/search?anilistInfo', {
      method: "POST",
      body: formData,
    })
    .then( (response) => response.json() )
    .then( (response) => showResults(response) )
    .catch( (err) => {
      console.error(err);
      handleError('There has been an error');
      toggleSpinner();
    } )
  }
  
const showResults = (response) => {
  // stop loading spinner
  toggleSpinner();

  // show result wrapper if not visible
  let wrapper = document.getElementById('result-wrapper');
  if(wrapper.classList.contains('d-none')){
    wrapper.classList.toggle('d-none');
  }

  // in case of error
  if(response.error){
      handleError(response.error);
      return;
  }

  // in case of no results
  if(response.result.length === 0){
      handleError('No results..');
      return;
  }

  createResults(response.result);
}

const createResults = (results) => {
  for(let result of results){
    createItem(result)
  }
}

const createItem = (data) => {
  // don't add if it has already been added
  for(anime of usedAnime){
    if(anime === data.anilist.id){
      return;
    }
  }

  console.log(data);
  let itemContainer = document.getElementById('result-container');
  let newItem = document.createElement('div');
  newItem.className = 'card accordion-item';
  newItem.innerHTML = `
  <h2 class="accordion-header">
      <button
        type="button"
        class="accordion-button collapsed"
        data-bs-toggle="collapse"
        data-bs-target="#accordion${data.anilist.id}"
        aria-expanded="true"
        aria-controls="accordion${data.anilist.id}"
        >
        ${data.anilist.title.romaji} 
      </button>
  </h2>
  <div
    id="accordion${data.anilist.id}"
    class="accordion-collapse collapse"
    data-bs-parent="#result-container"
  >
    <div class="accordion-body">
      <a href="https://anilist.co/anime/${data.anilist.id}" target="_blank" class="badge rounded-pill mb-2 bg-primary">Episode ${data.episode}</a><br>
      <span class="badge rounded-pill bg-label-secondary">Confidence ${Math.round(data.similarity*100)}%</span><br>
    </div>
    <div class="row m-2">
      <video style="border-radius:5%; margin-bottom:5px;" controls>
        <source src="${data.video}" type="video/mp4">
        Your browser does not support videos.
      </video>
    </div>
  </div>
  `;

  usedAnime.push(data.anilist.id);

  itemContainer.appendChild(newItem);
}

const clearResults = () => {
  let container = document.getElementById('result-container');

  while(container.lastElementChild){
    container.lastElementChild.remove();
  }
}