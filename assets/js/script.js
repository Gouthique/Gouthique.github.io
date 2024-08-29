'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


// Get the cwmodel elements
const courseworkcwmodel = document.getElementById("courseworkcwmodel");
const bachelorcourseworkcwmodel = document.getElementById("bachelorcourseworkcwmodel");

// Get the buttons that open the cwmodels
const courseworkbtn = document.getElementById("courseworkbtn");
const bachelorcourseworkbtn = document.getElementById("bachelorcourseworkbtn");

// Get the <span> elements that close the cwmodels
const closecwmodel = document.getElementById("closecwmodel");
const closebachelorcwmodel = document.getElementById("closebachelorcwmodel");

// When the user clicks the button, open the respective cwmodel
courseworkbtn.addEventListener('click', function() {
  courseworkcwmodel.classList.add('show'); // Add 'show' class to display the cwmodel
});

bachelorcourseworkbtn.addEventListener('click', function() {
  bachelorcourseworkcwmodel.classList.add('show'); // Add 'show' class to display the cwmodel
});

// When the user clicks on <span> (x), close the respective cwmodel
closecwmodel.addEventListener('click', function() {
  courseworkcwmodel.classList.remove('show'); // Remove 'show' class to hide the cwmodel
});

closebachelorcwmodel.addEventListener('click', function() {
  bachelorcourseworkcwmodel.classList.remove('show'); // Remove 'show' class to hide the cwmodel
});

// When the user clicks anywhere outside of the cwmodel, close it
window.addEventListener('click', function(event) {
  if (event.target == courseworkcwmodel) {
    courseworkcwmodel.classList.remove('show'); // Remove 'show' class to hide the cwmodel
  }
  if (event.target == bachelorcourseworkcwmodel) {
    bachelorcourseworkcwmodel.classList.remove('show'); // Remove 'show' class to hide the cwmodel
  }
});

function openPopup(popupId) {
  document.getElementById(popupId).style.display = 'block'; // Ensure it's visible
}

function closePopup(popupId) {
  document.getElementById(popupId).style.display = 'none'; // Hide the popup
}

// Close the popup when clicking outside of it
window.onclick = function(event) {
  const popups = document.querySelectorAll('.popup');
  popups.forEach(popup => {
    if (event.target == popup) {
      popup.style.display = 'none';
    }
  });
}

document.getElementById('skills-nav').addEventListener('click', function () {
  // Simulate clicking on the Resume tab to activate it
  const resumeTab = document.querySelector('[data-page="resume"]');
  const allTabs = document.querySelectorAll('article[data-page]');

  // Deactivate all other tabs
  allTabs.forEach(tab => tab.classList.remove('active'));

  // Activate the Resume tab
  resumeTab.classList.add('active');

  // Scroll to the Skills section
  document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from reloading the page

  // Get the form values
  const fullname = document.querySelector('input[name="fullname"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  // Define the parameters to send to EmailJS
  const params = {
    from_name: fullname,
    from_email: email,
    message: message
  };

  // Send the email using EmailJS
  emailjs.send("service_3ifpe5w","template_d1asnpp", params)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    }, function(error) {
      console.log('FAILED...', error);
      alert('Failed to send message. Please try again later.');
    });
});

async function fetchRecentPosts() {
  const query = `
    {
      user(username: "Saigoutham") {
        publication {
          posts(page: 0) {
            title
            brief
            coverImage
            slug
            dateAdded
          }
        }
      }
    }
  `;

  try {
      const response = await fetch('https://api.hashnode.com/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              query: query,
          }),
      });

      const result = await response.json();
      return result.data.user.publication.posts.slice(0, 3); // Get the top 3 posts
  } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
  }
}

function renderPosts(posts) {
  const blogPostsList = document.querySelector('.blog-posts-list');

  posts.forEach(post => {
      const blogPostItem = document.createElement('li');
      blogPostItem.classList.add('blog-post-item');

      blogPostItem.innerHTML = `
      <a href="https://gouthamcodes.hashnode.dev/${post.slug}">
        <figure class="blog-banner-box">
          <img src="${post.coverImage}" alt="${post.title}" loading="lazy">
        </figure>
        <div class="blog-content">
          <div class="blog-meta">
            <time datetime="${post.dateAdded}">${new Date(post.dateAdded).toDateString()}</time>
          </div>
          <h3 class="h3 blog-item-title">${post.title}</h3>
          <p class="blog-text">${post.brief}</p>
        </div>
      </a>
    `;

      blogPostsList.appendChild(blogPostItem);
  });
}

async function loadRecentPosts() {
  const posts = await fetchRecentPosts();
  renderPosts(posts);
}

document.addEventListener('DOMContentLoaded', loadRecentPosts);
