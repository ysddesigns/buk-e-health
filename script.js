document.addEventListener("DOMContentLoaded", function() {
  // Get all elements with class "login-btn" and add event listener
  var loginBtns = document.getElementsByClassName("login-btn");
  for (var i = 0; i < loginBtns.length; i++) {
    loginBtns[i].addEventListener("click", function() {
      window.location.href = "login.html";
    });
  }

  // Get all elements with class "signup-btn" and add event listener
  var signupBtns = document.getElementsByClassName("signup-btn");
  for (var i = 0; i < signupBtns.length; i++) {
    signupBtns[i].addEventListener("click", function() {
      window.location.href = "signup.html";
    });
  }
  var signupBtns = document.getElementsByClassName("book-appointment-btn");
  for (var i = 0; i < signupBtns.length; i++) {
    signupBtns[i].addEventListener("click", function() {
      window.location.href = "appointment.html";
    });
  }

  var signupBtns = document.getElementsByClassName("book-appointment-btn");
  for (var i = 0; i < signupBtns.length; i++) {
    signupBtns[i].addEventListener("click", function() {
      window.location.href = "appointment.html";
    });
  }

  // Get the header element
const header = document.getElementById('mainHeader');

// Function to handle scroll event
function handleScroll() {
  // Check if the user has scrolled down more than 50px from the top
  if (window.scrollY > 50) {
    // Add a CSS class to change the background color
    header.classList.add('scrolled');
  } else {
    // Remove the CSS class to revert back to the original background color
    header.classList.remove('scrolled');
  }
}

// Add event listener for scroll event
window.addEventListener('scroll', handleScroll);


});
