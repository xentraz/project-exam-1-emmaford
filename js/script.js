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
		document.querySelector('.alert').innerHTML = showAlertToUser (
      'Error loading content',
      'danger black_p'
    );
		console.log(error);
    if (error === true) {
      document.querySelector('.featured_container').innerHTML += ``;
    }
	} finally {
		setTimeout(function () {
      document.querySelector('.alert').innerHTML = ``;
    }, 10000)
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
        <div class="featured_card_info">
          <h2 class="featured_card_title">${featuredArray[i].title.rendered}</h2>
          <p class="black_p">${featuredArray[i].excerpt.rendered}</p>
        </div>
        <div class="more_button"><a href="/html/details.html?id=${featuredArray[i].id}" class="black_p">More Info</a></div>
      </div>`;
    }
  }
}
