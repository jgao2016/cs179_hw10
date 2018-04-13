$(document).ready(function(){
    // selecting the container div to append contacts to
    var container = $('.contact_div');
    console.log("works");

    // selectign the button and addding a click event listener
    $('#myBtn').click(function(){ 
        console.log("alert");
        addContact();
    });

// create the add contact function
// defines what the function is to add a new sticky note
function addContact(){
    var name = $('#text').val();
    var number = $('#number').val();
    console.log(name);
    console.log(number);
    // appends each new sticky notes into the list
    container.append(`
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${name}</h5>
            </div>
            <p class="mb-1">${number}</p>
        </a>
    `)
}
});

