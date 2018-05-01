import {state, saveState} from '../../js/common.js';

state.session.user=state.users[0];
saveState(state);//meal_time

function submit(){
    let content = document.getElementById('group_name').value;
    document.getElementById('group_name').sour
    state.session.user.meal_group=content;
    saveState(state);
    console.log("content");
    console.log(content);
    console.log("state");
    console.log(state);
}

$('#minutelist li').on('click', function(){
    $('#minute').val($(this).text());
    console.log($(this).text());
    state.session.user.meal_time_minute=parseInt($(this).text().substring(0,2));
    state.session.user.meal_reward=state.session.user.meal_time_hour*60+state.session.user.meal_time_minute;
    saveState(state);
});
$('#hourlist li').on('click', function(){
    $('#hour').val($(this).text());
    console.log($(this).text());
    state.session.user.meal_time_hour=parseInt($(this).text().substring(0,1));
    state.session.user.meal_reward=state.session.user.meal_time_hour*60+state.session.user.meal_time_minute;
    saveState(state);
});

