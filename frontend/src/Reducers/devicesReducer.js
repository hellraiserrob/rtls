
const initialState = [{
    id: 1,
    name: 'Device 1',
    serialNumber: 'AAAA',
    isFollowed: true,
    type: 'GPS',
    log: [{
        text: 'Latest text',
        date: new Date(2017, 10, 7, 12, 0, 0, 0),
        address: 'Address name 123',
        location: { lat: 51.515578, lng: -0.083757 } 

    }, {
        text: 'Latest text',
        date: new Date(2017, 10, 6, 12, 0, 0, 0),
        address: 'Address name 123',
        location: { lat: 52.152029, lng: -0.863800 }   

    
    }],
    status: 'Stationary',
    location: { lat: 51.515578, lng: -0.083757 },
    installationDate: new Date(2017, 10, 7, 12, 0, 0, 0),
    groups: ['Group 1']
},{
    id: 2,
    name: 'Device 2',
    serialNumber: 'BBBB',
    isFollowed: false,
    type: 'Temperature',
    log: [{
        text: 'Latest text',
        date: new Date(2017, 10, 7, 12, 0, 0, 0)
    }],
    status: 'Temperature rising',
    temperature: 9,
    location: { lat: 51.717874, lng: -1.225650 },
    installationDate: new Date(2017, 10, 7, 12, 0, 0, 0),
    groups: ['Group 2']
}]

function devicesReducer(state = initialState, action) {

    switch (action.type) {

        case 'ADD_DEVICE': {

            const { device } = action.payload
            const newArray = state.slice()

            device.id = state.length + 1
            newArray.push(device)

            return newArray

        }

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