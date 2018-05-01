import {state, saveState} from '../../js/common.js';

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
        document.getElementById("meal-time").innerHTML= `Time Left: ${state.session.user.meal_time_hour} hours ${state.session.user.meal_time_minute} minutes`;
        document.getElementById("point").innerHTML= `Expected Points: ${state.session.user.meal_reward} points`;
    }
    if (document.getElementById("meal-faces")!=null){
        if (state.session.user.meal_people == 3) document.getElementById("meal-faces").src="img/faces3.png";
        else document.getElementById("meal-faces").src="img/faces4.png";
    }
    if (document.getElementById("meal-smile-cry")!=null){
        if (state.session.user.meal_people == 3) document.getElementById("meal-smile-cry").src="img/meal3.png";
        else document.getElementById("meal-smile-cry").src="img/meal4.png";
    }
    if (document.getElementById("meal-smile-cry-cry")!=null){
        if (state.session.user.meal_people == 3) document.getElementById("meal-smile-cry-cry").src="img/meal_cry3.png";
        else document.getElementById("meal-smile-cry-cry").src="img/meal_cry4.png";
    }
}

console.log("user meal_people:");
console.log(state.session.user.meal_people);
// console.log("user mealgroup:");
// console.log(state.session.user.meal_group);

