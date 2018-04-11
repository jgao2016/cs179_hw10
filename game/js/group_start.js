import {state, saveState} from '/js/common.js';

state.session.user=state.users[0];
saveState(state);


$('#minutelist li').on('click', function(){
    $('#minute').val($(this).text());
    console.log($(this).text());
    console.log("mmm")
});
$('#hourlist li').on('click', function(){
    $('#hour').val($(this).text());
    console.log($(this).text());
    console.log("hhh")
});