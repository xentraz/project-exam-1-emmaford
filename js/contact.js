const sendBtn = document.querySelector('.continue');

const nameError = document.querySelector('.nameError');
const emailError = document.querySelector('.emailError');
const subjectError = document.querySelector('.subjectError');
const messageError = document.querySelector('.messageError');


sendBtn.onclick = (event) => {
	try {
    event.preventDefault();

	const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const subject = document.querySelector('#subject').value.trim();
  const message = document.querySelector('#message').value.trim();

  if (charLength(name, 5)) {
    nameError.classList.add('hide');
    nameError.classList.remove('show');
  } else {
    nameError.classList.add('show');
    nameError.classList.remove('hide');
  }

	if (charLength(email)) {
		emailError.classList.add('hide');
    emailError.classList.remove('show');
	} else {
		emailError.classList.add('show');
    emailError.classList.remove('hide');
	}

  if (charLength(subject, 15)) {
		subjectError.classList.add('hide');
    subjectError.classList.remove('show');
	} else {
		subjectError.classList.add('show');
    subjectError.classList.remove('hide');
	}

  if (charLength(message, 25)) {
		messageError.classList.add('hide');
    messageError.classList.remove('show');
	} else {
		messageError.classList.add('show');
    messageError.classList.remove('hide');
	}

	if (charLength(name, 0) && testEmail(email) && charLength(subject, 15) && charLength(message, 25)) {
    document.querySelector('.contact_form').innerHTML = ``;

    document.querySelector('.contact_form').innerHTML = `
    <div class="thank_you">
      <h2>Thank you</h2>
      <p class="white_p">I will get back you as soon as possible</p>
      <p class="white_p">usually within 2-3 business days.</p>
    </div>
    
    `;
  };

  function charLength(value, length) {
    if (value.length > length) {
      return true;
    } else {
      return false;
    }
  }

  function testEmail(emailAddress) {
    const expression =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const result = expression.test(emailAddress); 
    return result;
  }

  }  catch (error) {
		document.querySelector('.alert').innerHTML = showAlertToUser (
      'An error has occured',
      'danger black_p'
    );
		console.log(error);
	} finally {
		setTimeout(function () {
      document.querySelector('.alert').innerHTML = ``;
    }, 10000)
	}
};
