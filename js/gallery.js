let blogAPI = [];

document.querySelector('.loading').innerHTML =`<img src="https://cdn.dribbble.com/users/1747793/screenshots/4328938/web-loop.gif"/>`;

const getFeatured = async () => {
	try {
		const response = await fetch(
			'https://noroffcors.herokuapp.com/https://xentraz.tech/wp-json/wp/v2/posts'
		);

		const featuredResponse = await response.json();
		blogAPI = featuredResponse;
    console.log(blogAPI)

    mediaCards(blogAPI);

    
    let modal = document.querySelector('.media_modal');
    let img = document.querySelector('.media_img');
    let modalImg = document.querySelector(".modal_content");
    const span = document.getElementsByClassName("close")[0];

    img.addEventListener("click", function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    }); 
  
    span.addEventListener("click", function(){
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function(event){
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });

	} catch (error) {
		document.querySelector('.alert').innerHTML = showAlertToUser (
      'Error loading content',
      'danger black_p'
    );
		console.log(error);
	} finally {
		setTimeout(function () {
      document.querySelector('.alert').innerHTML = ``;
    }, 10000)
	}
  document.querySelector('.loading').innerHTML = ``;
};

getFeatured();


const mediaCards = (mediaArray) => {
	const featElm = document.querySelector('.media_posts');
  for (let i = 0; i < mediaArray.length; i++) {
    featElm.innerHTML += 
    `
    <div class="gallery_cards media_cards">
      <img class="gallery_img media_img" src="${mediaArray[i].jetpack_featured_media_url}"/>
      <h3 class="featured_card_title">${mediaArray[i].title.rendered}</h3>
    </div>

    <div class="media_modal">
      <span class="close">×</span>
      <img class="modal_content">
    </div>
    `;
  }
}
