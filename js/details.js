const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

async function getPosts(id){
  try{
    const response = await fetch('https://noroffcors.herokuapp.com/https://xentraz.tech/wp-json/wp/v2/posts/' + id);
    const postsResults = await response.json(); 

    console.log(postsResults)

    document.title = postsResults.title.rendered; 

    document.querySelector('.post_info').innerHTML += 
    `
    <div class="gameDetails">
      <div class="gameName">
        <h2>${postsResults.slug}</h2>
        </div>
    </div>
    `;

  } catch (error) {
    // document.querySelector('.alert').innerHTML = showAlertToUser (
    //   'An error occured',
    //   'danger'
    // );
    console.log(error);
  } finally {
    // setTimeout(function () {
    //   document.querySelector('.alert').innerHTML = ``;
    // }, 5000)
  }
}

getPosts(id);


// const postsCards = (featuredArray) => {
// 	const mainElm = document.querySelector('.featured_container');
//   for (let i = 0; i < featuredArray.length; i++) {
//     mainElm.innerHTML += `
//     <div class="card__containerBlog">
//       <img class="featuredImg" src="${featuredArray[i].jetpack_featured_media_url}"/>
//     </a>
//       <h3 class="cardTitleBlog">${featuredArray[i].title.rendered}</h3>
//       <div class="info-button"><a href="/html/details.html?id=${featuredArray[i].id}">More Info</a></div>
//       </div>`;
//   }
// }

// IMAGES 

let blogAPI2 = [];

const getMedia = async () => {
	try {
		const response = await fetch(
			'https://noroffcors.herokuapp.com/https://xentraz.tech/wp-json/wp/v2/media?parent=' +id);

		const mediaResponse = await response.json();
		blogAPI2 = mediaResponse;
    console.log(blogAPI2)

    mediaCards(blogAPI2);

    

	} catch (error) {
		// document.querySelector('.alert').innerHTML = showAlertToUser (
    //   'An error occured',
    //   'danger'
    // );
		console.log(error);
	} finally {
		// setTimeout(function () {
    //   document.querySelector('.alert').innerHTML = ``;
    // }, 5000)
	}
};

getMedia(id);


const mediaCards = (featuredArray2) => {
	const mainElm2 = document.querySelector('.post_images');
  for (let i = 0; i < featuredArray2.length; i++) {
    mainElm2.innerHTML += `
    <div class="card__containerBlog2">
      <img class="featuredImg" src="${featuredArray2[i].guid.rendered}"/>
      `;
  }
};