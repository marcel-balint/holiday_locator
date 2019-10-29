var emailjs;
var success = document.querySelector(".success");
var modalClose = document.querySelector(".modalContainer");
var submitBtn = document.querySelector(".submitContact");

function sendMail(contactForm) {
  submitBtn.value = "Loading...";
  emailjs
    .send("gmail", "marcel_balint", {
      from_name: contactForm.name.value,
      from_email: contactForm.email.value,
      project: contactForm.comment.value
    })
    .then(
      function(response) {
        console.log("SUCCESS", response);
        clear();
        modalClose.style.display = "none";
        success.style.display = "block";
        submitBtn.value = "Contact me";
        setTimeout(function() {
          success.style.display = "none";
        }, 3500);
      },
      function(error) {
        console.log("FAILED", error);
      }
    );
  return false;
}

function clear() {
  document.getElementById("usrform").reset();
}
