// Smooth scrolling
$("nav a").on("click", function (e) {
  e.preventDefault();
  const href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(href).offset().top -50}, 500);
});

// FAQ
// Get all the FAQ question elements
const faqQuestions = document.querySelectorAll('.faq-question');
const faqAnswer = document.querySelectorAll('.faq-answer')
const faqAnswerContainer = document.querySelectorAll('.ans-container')
const header = document.querySelector('header')
let toggler = document.querySelector('.toggler');

toggler.onclick = ()=> {
  header.classList.add('border-nav')
  toggler.firstChild.classList.toggle("fa-times")
  toggler.firstChild.classList.toggle("fa-bars")
}

// Add click event listener to each question element
let clicked = 0
faqQuestions.forEach((question, i )=> {
  
  question.addEventListener('click', () => {
    
    
    // Toggle the visibility of the answer element
    if (!clicked) {
      faqAnswerContainer[i].style.height = faqAnswer[i].clientHeight
      clicked++
    } else {
      faqAnswerContainer[i].style.height = 0
      clicked--
    }

    
  });
});

// Add navbar-border oncscroll

document.body.onscroll = () => {
  
  if (document.body.scrollTop == 0) {
    header.classList.remove('border-nav')
  } else {
    header.classList.add('border-nav')
  }

}

