import {state, saveState} from '/js/common.js';

state.session.user=state.users[0];
saveState(state);

// $('#hour-selector').change(function () {
//     var selectedText = $(this).find("option:selected").text();
    
//     $('#hour-selector').text(selectedText);
// });


// $('#hour-selector').on('show.bs.dropdown', function () {
//     console.log(selectedText);
//     console.log("ppp");
// })
// console.log("ppp--");

// $('#hour-selector').on('click', function(){
//     // $('#datebox').val($(this).text());
//     console.log("ppp");
// });

$(document).on('click', '.dropdown-menu li a', function() {
    var selectedText = $('#hour-selector').find("option:selected").text();
    console.log();
}); 
