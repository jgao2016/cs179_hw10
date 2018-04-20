import {state, saveState} from '../js/common.js';

state.session.user=state.users[0];
saveState(state);


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
if (state.session.user==null){
    console.log('redirect to home');
    window.location =  '/';
}

document.getElementById("group_name_submit1").addEventListener("click", function(){
    submit();
});
document.getElementById("group_name_submit2").addEventListener("click", function(){
    submit();
}); 

