import {state, saveState} from '/js/common.js';

state.session.user=state.users[0]

function submit(){
    let content = document.getElementById('group_name').value
    console.log(content)
    state.session.user.meal_group=content
    document.getElementsByClassName("header-text")[0].innerHTML=content
    document.getElementsByClassName("text")[0].innerHTML="Start group meal game by putting all your phones near each other. Wait until a your screen shows that you have successfully joined a group"
    let input=document.getElementById("group_name")
    parent=input.parentNode
    parent.removeChild(input);
    let submit=document.getElementById("group_name_submit")
    // parent.appendChild(document.createElement('<a class="button auth-btn" href="signup.html" id="group_submit">Okay</a>'))
    // parent.removeChild(submit);
    document.getElementById("group_name_submit").innerHTML="Okay"
    document.getElementById("group_name_submit").setAttribute("href","group_start.html")
}
if (state.session.user==null){
    console.log('redirect to home');
    window.location =  '/';
}

document.getElementById("group_name_submit").addEventListener("click", function(){
    submit();
}); 

console.log("ppp")
console.log(state.session.user.id)

var elem = document.querySelector('.dropdown-trigger');
var instance = M.Dropdown.init(elem, options);
