function openModal(e){document.querySelector(e).style.display="block"}function closeModal(){document.querySelectorAll(".modal").forEach((function(e){e.style.display="none"}))}document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".open-modal").forEach((function(e){e.addEventListener("click",(function(){openModal(this.getAttribute("data-target")),document.querySelector(".modal-overlay").classList.add("modal-open")}))})),document.querySelectorAll(".modal .close").forEach((function(e){e.addEventListener("click",(function(){closeModal(),document.querySelector(".modal-overlay").classList.remove("modal-open")}))}))}));
//# sourceMappingURL=index.77e5d995.js.map
