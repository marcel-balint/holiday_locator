
var contactBtn = document.querySelector('#contactModal');
var modalContainer = document.querySelector('.modalContainer');
var floatingPanel = document.querySelector('#floatingPanel');
var locationField = document.querySelector('#locationField');
var closeBtn = document.querySelector('.close');

contactBtn.addEventListener('click', function() {
    modalContainer.style.display = "block";
     modalContainer.style.zIndex = "5";
     floatingPanel.style.zIndex = "1";
     locationField.style.zIndex = "1";
});

closeBtn.addEventListener('click', function() {
     modalContainer.style.display = "none";
});

window.onclick = function(event) {
    if(event.target == modalContainer) {
        modalContainer.style.display = "none";
    }
};