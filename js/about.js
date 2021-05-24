let blogAPI = [];

document.querySelector('.loading').innerHTML =`<img src="https://cdn.dribbble.com/users/1747793/screenshots/4328938/web-loop.gif"/>`;
document.querySelector('.about_me_wrapper').classList.add('hide');
document.querySelector('.featured_container').classList.add('hide');

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
  document.querySelector('.loading').innerHTML = ``;
  document.querySelector('.about_me_wrapper').classList.remove('hide');
  document.querySelector('.featured_container').classList.remove('hide');
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