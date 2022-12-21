/////// FAQs /////// 

const dropDownButtons = document.querySelectorAll('.expandButton')
const expandingSections = document.querySelectorAll('.expandable')

console.log(dropDownButtons);

function dropDownAnswer() {

  let targetExpandableDiv = this.dataset.targetButton;
  // console.log(targetExpandableDiv)
  
  this.classList.toggle('active')
    
  expandingSections.forEach(section => { 
  // console.log(section.dataset.targetMore)

    if (targetExpandableDiv == section.dataset.targetMore) {
      section.classList.toggle('hide-answer')
    } // else { section.classList.add('hide-answer')}
  })
//  this.nextElementSibling.classList.toggle('hide-answer');
//  console.log(this.previousElementSibling);
//  console.log(this.nextElementSibling);
}

dropDownButtons.forEach( button => {
  button.addEventListener('click', dropDownAnswer)
})


/////// Slick slider /////// 

$('.slider-container-testimonials').slick({
	// Setting name: setting-value
  autoplay: true, // Do we want it to autoplay? true or false
	autoplaySpeed: 3000, // How long between each slide when auto-playing
	speed: 1000, // How fast is the transition in milliseconds
	arrows: false, // Do you want to show arrows to trigger each slide
	accessibility: true, // Enables keyboard tabbing and arrow key navigation
	dots: true, // Enables the dots below to show how many slides
	fade: false, // Changes the animate from slide to fade if true
	infinite: true, // When true, means that it will scroll in a circle
	pauseOnHover: true, // When true means the autoplay pauses when hovering
	pauseOnDotsHover: true, // Pauses the autoplay when hovering over the dots
  slidesToShow: 1, // Creating a grid
  slidesToScroll: 1, // How many steps in the grid
  centerMode: false, // Align items in the center
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      }
    }
  ]
});

$('.slider-container-sneakpeak').slick({
	// Setting name: setting-value
  autoplay: false, // Do we want it to autoplay? true or false
	autoplaySpeed: 2000, // How long between each slide when auto-playing
	speed: 500, // How fast is the transition in milliseconds
	arrows: true, // Do you want to show arrows to trigger each slide
	accessibility: true, // Enables keyboard tabbing and arrow key navigation
	dots: false, // Enables the dots below to show how many slides
	fade: false, // Changes the animate from slide to fade if true
	infinite: true, // When true, means that it will scroll in a circle
	pauseOnHover: false, // When true means the autoplay pauses when hovering
	pauseOnDotsHover: true, // Pauses the autoplay when hovering over the dots
  slidesToShow: 1, // Creating a grid
  slidesToScroll: 1, // How many steps in the grid
  centerMode: false, // Align items in the center
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      }
    }
  ]
});


/////// Mobile menue /////// 

const burgerButton = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobile-menu')

function openMobileMenu() {
  mobileMenu.classList.toggle('mobile-menu-hidden');
  this.classList.toggle('active');
}

burgerButton.addEventListener('click', openMobileMenu)