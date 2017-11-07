
const initialState = {
    text: 'This is an alert',
    isVisible: true,
    isSnoozed: false
}

function alertReducer(state = initialState, action) {

    switch (action.type) {

        case 'ALERT_HIDE': {

            return Object.assign({}, state, {
                isVisible: false
            })

        }

        default: {
            return state;
        }
    }



}

export default alertReducer;