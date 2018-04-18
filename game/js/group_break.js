import {state, saveState} from '/js/common.js';

var left=true;
function stateChange(newState) {
    setTimeout(function () {
        if (left){
            left=false;
            alert('He is back!');
            location.href = "group_back.html";
        }

    }, 5000);
}
stateChange();