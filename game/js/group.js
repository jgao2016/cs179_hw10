import {state, saveState} from '/js/common.js';

state.session.user=state.users[0];
saveState(state);


function submit(){
    let content = document.getElementById('group_name').value;
    
    state.session.user.meal_group=content;
    console.log("content");
    console.log(content);
    console.log("state");
    console.log(state);
    // document.getElementsByClassName("header-text")[0].innerHTML=content;
    // document.getElementsByClassName("text")[0].innerHTML="Start group meal game by putting all your phones near each other. Wait until a your screen shows that you have successfully joined a group"
    // let input=document.getElementById("group_name")
    // parent=input.parentNode
    // parent.removeChild(input);
    // let submit=document.getElementById("group_name_submit")
    // // parent.appendChild(document.createElement('<a class="button auth-btn" href="signup.html" id="group_submit">Okay</a>'))
    // // parent.removeChild(submit);
    // document.getElementById("group_name_submit").innerHTML="Okay"
    // document.getElementById("group_name_submit").setAttribute("href","group_start.html")
}
if (state.session.user==null){
    console.log('redirect to home');
    window.location =  '/';
}else{
    if (document.getElementsByClassName("header-groupname").length>0){
        document.getElementsByClassName("header-groupname")[0].innerHTML=state.session.user.meal_group;
    }
        
}

document.getElementById("group_name_submit").addEventListener("click", function(){
    submit();
}); 

console.log("user id:");
console.log(state.session.user.id);
console.log("user mealgroup:");
console.log(state.session.user.meal_group);
// var elem = document.querySelector('.dropdown-trigger');
// var instance = M.Dropdown.init(elem, options);
