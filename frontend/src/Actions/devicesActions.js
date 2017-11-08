export function toggleFollow(id){
    return {
        type: 'TOGGLE_FOLLOW',
        payload: { id }
    }
}

export function changeName(id, name){
    return {
        type: 'SET_NAME',
        payload: { id, name }
    }
}

export function addDevice(device){
    return {
        type: 'ADD_DEVICE',
        payload: { device }
    }
}
