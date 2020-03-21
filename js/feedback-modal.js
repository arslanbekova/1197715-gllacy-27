var link = document.querySelector(".feedback-link");
var modal = document.querySelector(".feedback-modal");
var close = modal.querySelector(".modal-close");
var form = modal.querySelector(".feedback");
var email = modal.querySelector("[name=email]");
var review = modal.querySelector("[name=review]");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.remove("modal-hide");
    modal.classList.add("modal-show");
});

form.addEventListener("submit", function (evt) {
    var name = document.getElementsByName("lastName")[0];
    if (!name.value || !email.value || !review.value) {
        evt.preventDefault();
        modal.classList.remove("modal-error");
        modal.offsetWidth = modal.offsetWidth;
        modal.classList.add("modal-error");
    }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-error");
  modal.classList.add("modal-hide");
})

window.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27) {
        if (modal.classList.contains("modal-show")) {
            evt.preventDefault();
            modal.classList.remove("modal-error");
            modal.classList.add("modal-hide");
        }
    }
})

