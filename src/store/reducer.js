const defaultState = {
    myKey: 1
}

const add = (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "ADD_KEY":
            newState.myKey++;
            break;
        default:
            break;
    }
    return newState
}
export default add