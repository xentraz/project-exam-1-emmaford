// Image Slider (GO THORUGH AND CHANGE NAMES)
var slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// API Fetch Featured Posts 
let blogAPI = [];

const getFeatured = async () => {
	try {
		const response = await fetch(
			'https://noroffcors.herokuapp.com/https://xentraz.tech/wp-json/wp/v2/posts'
		);

		const featuredResponse = await response.json();
		blogAPI = featuredResponse;
    console.log(blogAPI)

    featuredCards(blogAPI);

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

getFeatured();


const featuredCards = (featuredArray) => {
	const mainElm = document.querySelector('.featured_container');
  for (let i = 0; i < featuredArray.length; i++) {
    if ((featuredArray[i].categories[0] === 33) || (featuredArray[i].categories[1] === 33) || (featuredArray[i].categories[2] === 33)) {
      mainElm.innerHTML += `
      <div class="featured_card">
        <img class="featured_img" src="${featuredArray[i].jetpack_featured_media_url}"/>
      <div class="feature_card_info">
      <h2 class="featured_card_title">${featuredArray[i].title.rendered}</h2>
      <p class="black_p">${featuredArray[i].date}</p>
      </div>
      <div class="more_button"><a href="/html/details.html?id=${featuredArray[i].id}">More Info</a></div>
      </div>`;
    }
  }
}

// document.querySelector('.index_featured').style.backgroundImage = `
//     url('${featuredArray._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url}')`;


// const gameCards = (GamesArray) => {
// 	const mainElm = document.querySelector('.featuredInfo');
//   for (let i = 0; i < GamesArray.length; i++) {
//     if ((GamesArray[i].categories[0].name === 'Featured') || (GamesArray[i].categories[1].name === 'Featured')) {
//       mainElm.innerHTML += 
//       `
//       <div class="gameCard">
//       <div class="gameImg"><img src="${GamesArray[i].images[0].src}"/></div>
//       <h3>${GamesArray[i].name}</h3>
//       <div class="info-button"><a href="/html/details.html?id=${GamesArray[i].id}">More Info</a></div>
//       </div>
//       `;
//     }
//   }
// }

// IMAGES

// let blogAPI2 = [];

// const getMedia = async () => {
// 	try {
// 		const response = await fetch(
// 			'https://noroffcors.herokuapp.com/https://xentraz.tech/wp-json/wp/v2/media?per_page=100'
// 		);

// 		const mediaResponse = await response.json();
// 		blogAPI2 = mediaResponse;
//     console.log(blogAPI2)

//     mediaCards(blogAPI2);

// 	} catch (error) {
// 		// document.querySelector('.alert').innerHTML = showAlertToUser (
//     //   'An error occured',
//     //   'danger'
//     // );
// 		console.log(error);
// 	} finally {
// 		// setTimeout(function () {
//     //   document.querySelector('.alert').innerHTML = ``;
//     // }, 5000)
// 	}
// };

// getMedia();


// const mediaCards = (featuredArray2) => {
// 	const mainElm = document.querySelector('.featured_container');
//   for (let i = 0; i < featuredArray2.length; i++) {
//     if(featuredArray2[i].alt_text === 'Edinburgh'){
//       mainElm.innerHTML += `
//     <div class="card__containerBlog2">
//       <img class="featuredImg" src="${featuredArray2[i].guid.rendered}"/>
//       `;
//     }
//   }
// };


// const getMedia = async () => {
// 	try {
// 		const response = await fetch(
// 			'https://noroffcors.herokuapp.com/https://xentraz.tech/wp-json/wp/v2/media?parent='+id
// 		);

// 		const mediaResponse = await response.json();
// 		blogAPI2 = mediaResponse;
//     console.log(blogAPI2)

//     mediaCards(blogAPI2);

// 	} catch (error) {
// 		// document.querySelector('.alert').innerHTML = showAlertToUser (
//     //   'An error occured',
//     //   'danger'
//     // );
// 		console.log(error);
// 	} finally {
// 		// setTimeout(function () {
//     //   document.querySelector('.alert').innerHTML = ``;
//     // }, 5000)
// 	}
// };

// getMedia();


// const mediaCards = (featuredArray2) => {
// 	const mainElm = document.querySelector('.featured_container');
//   for (let i = 0; i < featuredArray2.length; i++) {
//     if(featuredArray2[i].alt_text === 'Edinburgh'){
//       mainElm.innerHTML += `
//     <div class="card__containerBlog2">
//       <img class="featuredImg" src="${featuredArray2[i].guid.rendered}"/>
//       `;
//     }
//   }
// };