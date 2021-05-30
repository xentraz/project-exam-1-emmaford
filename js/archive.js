let archiveApi = [];

document.querySelector('.loading').innerHTML =`<img src="https://cdn.dribbble.com/users/1747793/screenshots/4328938/web-loop.gif"/>`;

const getArchive = async () => {
	try {
		const response = await fetch(
			'https://noroffcors.herokuapp.com/https://xentraz.tech/wp-json/wp/v2/posts?per_page=100'
		);

		const featuredResponse = await response.json();
		archiveApi = featuredResponse;
    console.log(archiveApi);

    archiveCards(archiveApi);
    
    const loadAll = document.querySelector('.load_all'); 
    loadAll.addEventListener("click", function(){
      document.querySelector('.recent_posts').innerHTML = '';
      archiveCardsAll(archiveApi);
      });

    const searchText = document.querySelector('#search');

    searchText.oninput = function (event) {
      event.preventDefault();
      console.log(event.target.value);
      
      let filteredArray = archiveApi.filter((value) => {
          return value.slug.toLowerCase() === event.target.value.toLowerCase();
      });

      console.log(filteredArray);

      if (!event.target.value) {
        recentCards(archiveApi);
      }

      document.querySelector('.recent_posts').innerHTML = '';
      recentCards(filteredArray);
    };

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
getArchive();

const archiveCards = (recentArray) => {
  const recentElm = document.querySelector('.recent_posts'); 
  for (let j = 0; j <recentArray.length; j++) {
    if (j === 10) {
      break;
    }
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
      <p class="white_p more_link" onclick="window.location.href='../details.html?id=${recentArray[j].id}'">Read More <i class="fas fa-arrow-right"></i></p>
      </div>
    </div>
    `;
  }
}

const archiveCardsAll = (recentArray2) => {
  const recentElm2 = document.querySelector('.recent_posts'); 
  for (let k = 0; k < recentArray2.length; k++) {
    recentElm2.innerHTML += 
    `
    <div class="recent_card">  
      <div class="recent_bkg"></div>
      <h3 class="recent_card_title">${recentArray2[k].title.rendered}</h3>
      <div class="white_p date">${recentArray2[k].excerpt.rendered}</div>
      <p class="white_p recent_p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, omnis fugit! Fuga nihil odit sed ullam, quod dolor, iste sunt perspiciatis voluptatibus libero enim sit rerum aliquid repellendus accusantium, reiciendis cumque. Voluptatem, nam possimus in provident assumenda architecto adipisci iusto?</p>
      <div class="recent_img1">
      <img src="${recentArray2[k].jetpack_featured_media_url}"/>
      </div>
      <img class="recent_img2" src="${recentArray2[k].jetpack_featured_media_url}"/>
      <div class="recent_post_link">
      <p class="white_p more_link" onclick="window.location.href='../details.html?id=${recentArray2[k].id}'">Read More <i class="fas fa-arrow-right"></i></p>
      </div>
    </div>
    `;
  }
}