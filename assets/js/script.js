var dropdownHire = document.querySelector('.dropdown-nav-hire > nav');
var dropdownWork = document.querySelector('.dropdown-nav-find-work > nav');

function showHireDropdown() {
    if (dropdownHire.classList.contains('show-content')) {
        dropdownHire.classList.remove('show-content');
    } 
    else {
        dropdownHire.classList.add('show-content');
    }
}

function showWorkDropdown() {
    if (dropdownWork.classList.contains('show-content')) {
        dropdownWork.classList.remove('show-content');
    } 
    else {
        dropdownWork.classList.add('show-content');
    }
}


function finish() {
    alert("Couldn't make responsive navbar :)");
}