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

document.querySelector('.loading').innerHTML =`<img src="https://cdn.dribbble.com/users/1747793/screenshots/4328938/web-loop.gif"/>`;

const getFeatured = async () => {
	try {
		const response = await fetch(
			'https://noroffcors.herokuapp.com/https://xentraz.tech/wp-json/wp/v2/posts'
		);

		const featuredResponse = await response.json();
		blogAPI = featuredResponse;
    console.log(blogAPI)

    featuredCards(blogAPI);

    recentCards(blogAPI);

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
  document.querySelector('.loading').innerHTML = ``;
};

getFeatured();


const featuredCards = (featuredArray) => {
	const featElm = document.querySelector('.featured_posts');
  for (let i = 0; i < featuredArray.length; i++) {
    if ((featuredArray[i].categories[0] === 33) || (featuredArray[i].categories[1] === 33) || (featuredArray[i].categories[2] === 33)) {
      featElm.innerHTML += 
      `
      <div class="featured_card">
        <img class="featured_img" src="${featuredArray[i].jetpack_featured_media_url}"/>
        <div class="featured_card_info" onclick="window.location.href='/html/details.html?id=${featuredArray[i].id}'">
          <h3 class="featured_card_title">${featuredArray[i].title.rendered}</h3>
          <p class="black_p">${featuredArray[i].excerpt.rendered}</p>
        </div>
      </div>
      `;
    }
  }
}

const recentCards = (recentArray) => {
  const recentElm = document.querySelector('.recent_posts'); 
  for (let j = 0; j <recentArray.length; j++) {
    recentElm.innerHTML += 
    `
    <div class="recent_card">  
      <div class="recent_bkg"></div>
      <h3 class="recent_card_title">${recentArray[j].title.rendered}</h3>
      <div class="white_p date">${recentArray[j].excerpt.rendered}</div>
      <p class="white_p recent_p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, omnis fugit! Fuga nihil odit sed ullam, quod dolor, iste sunt perspiciatis voluptatibus libero enim sit rerum aliquid repellendus accusantium, reiciendis cumque. Voluptatem, nam possimus in provident assumenda architecto adipisci iusto?</p>
      <div class="recent_img1">
      <img src="${recentArray[j].jetpack_featured_media_url}"/>
      </div>
      <img class="recent_img2" src="${recentArray[j].jetpack_featured_media_url}"/>
      <div class="recent_post_link">
      <p class="white_p more_link" onclick="window.location.href='/html/details.html?id=${recentArray[j].id}'">Read More <i class="fas fa-arrow-right"></i></p>
      </div>
    </div>
    `;
  }
}

