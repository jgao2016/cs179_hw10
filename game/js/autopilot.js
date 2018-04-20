import {state, saveState} from '../../js/common.js';


if (state.session.user==null){
    console.log('redirect to home');
    window.location =  '/';
}