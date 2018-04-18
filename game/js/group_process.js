import {state, saveState} from '/js/common.js';

var left=false;
function stateChange(newState) {
    setTimeout(function () {
        if (!left){
            left=true;
            alert('Someone Just Left the Circle!');
            if (state.session.user.meal_reward -10 >=0){
                state.session.user.meal_reward=state.session.user.meal_reward -10;
            }
            saveState(state);
            location.href = "group_break.html";
        }

    }, 5000);
}
stateChange();