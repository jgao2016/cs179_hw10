import {state, saveState} from '../../js/common.js';

state.session.user=state.users[0];
saveState(state);

if (state.session.user==null){
    console.log('redirect to home');
    window.location =  '/';
}else{
    if (document.getElementById("invite_button")!=null){
        state.session.user.meal_people = 4;
        saveState(state);
        console.log("meal_people changed");
    }      

}

// console.log("user id:");
// console.log(state.session.user.id);
// console.log("user mealgroup:");
// console.log(state.session.user.meal_group);

