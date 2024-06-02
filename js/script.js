// Initialize Shepherd tour
/*
const tour = new Shepherd.Tour({
    defaultStepOptions: {
      cancelIcon: {
        enabled: true,
      },
      classes: 'shepherd-theme-default',
      scrollTo: { behavior: 'smooth', block: 'center' }
    }
  });
  
  // Add steps to the tour
  tour.addStep({
    title: 'Welcome to Trips on Tips',
    text: 'This is a simple tour guide app built with Shepherd.js. Let me show you around!',
    attachTo: {
      element: '.site-brand',
      on: 'bottom',
    },
    buttons: [
      {
        action() {
          return this.next();
        },
        text: 'Next',
      },
    ],
  });
  
  tour.addStep({
    title: 'Featured Locations',
    text: 'Know about some popular places before you travel',
    attachTo: {
      element: '.featured-item',
      on: 'top',
    },
    buttons: [
      {
        action() {
          return this.back();
        },
        //classes: 'shepherd-button-secondary',
        text: 'Back',
      },
      {
        action() {
          return this.next();
        },
        text: 'Next',
      },
    ],
  });
  
  tour.addStep({
    title: 'Gallery',
    text: 'Click on Gallery to check out some spell-binding pictures of different destinations',
    attachTo: {
      element: '.nav-link',
      on: 'bottom',
    },
    buttons: [
      {
        action() {
          return this.back();
        },
        //classes: 'shepherd-button-secondary',
        text: 'Back',
      },
      {
        action() {
          return this.next();
        },
        text: 'Next',
      },
    ],
  });
  
  tour.addStep({
    title: 'Switch to Dark mode',
    text: 'Toggle between Light mode and Dark mode as per your preference',
    attachTo: {
      element: '#theme-toggle-btn',
      on: 'bottom',
    },
    buttons: [
      {
        action() {
          return this.back();
        },
        //classes: 'shepherd-button-secondary',
        text: 'Back',
      },
      {
        action() {
          return this.complete();
        },
        text: 'Got it!',
      },
    ],
  });
  
  // Start the tour on page load
  window.onload = () => {
    tour.start();
  };
*/

let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
});


const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');
// show navbar
navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

// hide side bar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if(e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn"){
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
});

// stop transition and animatino during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});

//light/dark mode toggle

let darkMode = localStorage.getItem('darkmode');

const modeToggleBtn = document.getElementById('theme-toggle-btn');

if(darkMode !== null)
{
    if(darkMode == "on"){
        modeToggleBtn.checked = true;
        document.querySelector('body').classList.add('dark-mode');
    }
}
modeToggleBtn.addEventListener('click', () => {
    if(modeToggleBtn.checked){
        document.querySelector('body').classList.add('dark-mode');
        localStorage.setItem("darkmode", "on");
    } else {
        document.querySelector('body').classList.remove('dark-mode');
        localStorage.setItem("darkmode", "off");
    }

})

