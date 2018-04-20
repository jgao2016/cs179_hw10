function addToWhitelist () {
    if (this.style.opacity==0.25) {
        this.style.opacity=1.0 
    }
    else {
        this.style.opacity=0.25
    }
}


$(document).ready(function(){
    // selecting the container div to append contacts to
    var container = $('.contact_div');
    console.log("works");

    // selectign the button and addding a click event listener
    $('#myBtn').click(function(){ 
        console.log("alert");
        addContact();
    });
    $('.img-fluid').click(addToWhitelist);

// create the add whitelist apps function
// function addToWhitelist (image) {
//     console.log(image.style);
//     if (image.style.opacity==0.25) {
//         image.style.opacity=1.0 
//     }
//     else {
//         image.style.opacity=0.25
//     }
// }
// console.log(addToWhitelist);

// create the add whitelist contacts function
function addContact(){
    var name = $('#text').val();
    var number = $('#number').val();
    $('#text').val('');
    $('#number').val('');
    // appends each new sticky notes into the list
    container.append(`
        <a href="#" class="list-group-item d-flex justify-content-between">
            <div> ${name} </div> <div> ${number} </div>
        </a>
    `)
}
});