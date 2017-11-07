
const initialState = [{
    id: 1,
    name: 'Device 1',
    serialNumber: 'AAAA-BBBB-CCCC-DDDD',
    isFollowed: false,
    type: 'GPS',
    log: [{
        text: 'Latest text',
        date: new Date(2017, 10, 7, 12, 0, 0, 0),
        address: 'Address name 123',
        location: { lat: 52.152029, lng: -0.863800 } 

    }, {
        text: 'Latest text',
        date: new Date(2017, 10, 6, 12, 0, 0, 0),
        address: 'Address name 123',
        location: { lat: 53.569676, lng: 1.788025 }    

    
    }],
    status: 'Stationary',
    location: { lat: -34.397, lng: 150.644 },
    installationDate: new Date(2017, 10, 7, 12, 0, 0, 0)
},{
    id: 2,
    name: 'Device 2',
    serialNumber: 'AAAA-BBBB-CCCC-DDDD',
    isFollowed: false,
    type: 'Temperature',
    log: [{
        text: 'Latest text'
    }],
    status: 'OK',
    temperature: 0
}]

function devicesReducer(state = initialState, action) {

    switch (action.type) {

        case 'TOGGLE_FOLLOW': {

            const { id } = action.payload

            return state.map((item, index) => {

                if (item.id !== id) {
                    return item;
                }

                // Otherwise, this is the one we want - return an updated value
                return {
                    ...item,
                    ...item.isFollowed = !item.isFollowed
                }

            })


        }
        
        case 'SET_NAME': {

            const { id, name } = action.payload

            return state.map((item, index) => {

                if (item.id !== id) {
                    return item;
                }

                // Otherwise, this is the one we want - return an updated value
                return {
                    ...item,
                    ...item.name = name
                }

            })


        }

        default: {
            return state;
        }
    }



}

export default devicesReducer;