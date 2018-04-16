import {state, saveState} from '/js/common.js';

state.session.user=state.users[0];
saveState(state);

if (state.session.user==null){
    console.log('redirect to home');
    window.location =  '/';
}else{
    if (document.getElementsByClassName("header-groupname").length>0){
        document.getElementsByClassName("header-groupname")[0].innerHTML=state.session.user.meal_group;
    }      
    
    if (document.getElementById("meal-time") != null){
        let hour=state.session.user.meal_time_hour;
        let min=state.session.user.meal_time_minute;
        let points = hour*60+min;
        document.getElementById("meal-time").innerHTML= `Time Left: ${state.session.user.meal_time_hour} hours ${state.session.user.meal_time_minute} minutes`;
        document.getElementById("point").innerHTML= `Expected Points: ${points} points`;
    }
}

// console.log("user id:");
// console.log(state.session.user.id);
// console.log("user mealgroup:");
// console.log(state.session.user.meal_group);

