import { uniqueId } from './utils.js';

// define your app state
export let state = {
    session:{// contain current user and other information etc
        user:null,

    },
    users :[
        {
            id:uniqueId('user_'),
            name:'Bella',
            totalMealGameTime: 1059,
            mealNumber: 15,
            rewards: 603,
            whitelist:{}, //array or dictionary?
            history:{},
            redeem:{},
            friends:{},
            meal_group: "",
        }
    ],
    
}


export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state');
		// console.log('loadState',serializedState);
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		console.log('saveState',serializedState);
		localStorage.setItem('state', serializedState);

	} catch (err) {
		console.log(err);
		//Ignore write errors
	}
};



function initialize() {

    let prevState = loadState('state');

    if (prevState != null) {
        state = prevState; 
    }
    // state = null; 
    // saveState(state);
    console.log('state loaded...', state);
}

initialize();// call init
