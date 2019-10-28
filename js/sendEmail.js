var emailjs;

function sendMail(contactForm) {
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
