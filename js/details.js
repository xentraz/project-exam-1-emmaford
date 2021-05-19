const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

document.querySelector('.post_loading').innerHTML = `<img src="https://cdn.dribbble.com/users/1747793/screenshots/4328938/web-loop.gif"/>`

// POST DETAIL INFO
async function getPosts(id){
  try{
    const response = await fetch('https://noroffcors.herokuapp.com/https://xentraz.tech/wp-json/wp/v2/posts/' + id);
    const postsResults = await response.json(); 

    console.log(postsResults)
    document.title = postsResults.title.rendered; 

    document.querySelector('.post_info').innerHTML += 
    `
    <div class="post_name">
      <h1>${postsResults.slug}</h1>
    </div>
    `;

    document.querySelector('.post_text').innerHTML += 
    `
    <div class="text_container">
    ${postsResults.content.rendered}
    </div>
    `;

  } catch (error) {
    document.querySelector('.alert').innerHTML = showAlertToUser (
      'An error occured',
      'danger black_p'
    );
    console.log(error);
  } finally {
    setTimeout(function () {
      document.querySelector('.alert').innerHTML = ``;
    }, 5000)
  }
  document.querySelector('.post_loading').innerHTML = '';
}
getPosts(id);


// POST DETAIL IMAGES 
let mediaAPI = [];

const getMedia = async () => {
	try {
		const response = await fetch(
			'https://noroffcors.herokuapp.com/https://xentraz.tech/wp-json/wp/v2/media?parent=' +id);

		const mediaResponse = await response.json();
		mediaAPI = mediaResponse;
    console.log(mediaAPI)

    mediaCards(mediaAPI);

	} catch (error) {
		document.querySelector('.alert').innerHTML = showAlertToUser (
      'An error occured',
      'danger black_p'
    );
		console.log(error);
	} finally {
		setTimeout(function () {
      document.querySelector('.alert').innerHTML = ``;
    }, 5000)
	}
  document.querySelector('.post_loading').innerHTML = '';
};
getMedia(id);


const mediaCards = (mediaArray) => {
	const mediaElm = document.querySelector('.post_media');
  for (let i = 0; i < mediaArray.length; i++) {
    mediaElm.innerHTML += `
    <div class="media_cards">
      <img class="media_img" src="${mediaArray[i].guid.rendered}"/>
      <div class="media_text">
      ${mediaArray[i].caption.rendered}   
      </div>
    </div>
      `;
  }
};