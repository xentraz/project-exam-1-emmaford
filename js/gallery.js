const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

document.querySelector('.loading').innerHTML =`<img src="https://cdn.dribbble.com/users/1747793/screenshots/4328938/web-loop.gif"/>`;

const getGallery = async () => {
	try {
		const response = await fetch(
			'https://noroffcors.herokuapp.com/https://xentraz.tech/wp-json/wp/v2/media?per_page=100');

		const galleryResponse = await response.json();
		blogAPI = galleryResponse;
    console.log(blogAPI)

    mediaCards(blogAPI);

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

getGallery(id);


const mediaCards = (mediaArray) => {
	const featElm = document.querySelector('.media_posts');
  mediaArray.forEach(element => {
    featElm.innerHTML += 
    `
    <div class="gallery_cards media_cards">
      <img class="gallery_img media_img" src="${element.guid.rendered}" alt="${element.alt_text}"/>
      <h3 class="featured_card_title">${element.caption.rendered}</h3>
    </div>

    <div class="media_modal">
      <span class="close">×</span>
      <img class="modal_content">
    </div>
    `;
  });

  let img = document.querySelectorAll('.gallery_img');
  let modal = document.querySelector('.media_modal');
  let modalImg = document.querySelector(".modal_content");
  const span = document.getElementsByClassName("close")[0];

  img.forEach(link => link.addEventListener("click", function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    })
  );

  span.addEventListener("click", function(){
  modal.style.display = "none";
  });

  window.addEventListener("click", function(event){
  if (event.target == modal) {
    modal.style.display = "none";
  }
  });
}
