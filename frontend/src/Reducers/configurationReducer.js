
const initialState = {
    show: true
}

function configurationReducer(state = initialState, action) {

    switch (action.type) {

        case 'TOGGLE': {

            console.log('toggle reducer')
            const { show } = state

            return Object.assign({}, state, {
                show: !show
            })


        }

        default: {
            return state;
        }
    }



}

export default configurationReducer;