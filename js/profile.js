import {state, saveState} from '../../js/common.js';

state.session.user=state.users[0];
saveState(state);

if (state.session.user==null){
    console.log('redirect to home');
    window.location =  '/';
}else{

    state.session.user.meal_people = 3;
    saveState(state);
    console.log("meal_people changed to 3");

}
