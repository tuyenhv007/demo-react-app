
function logger(reducer) {
    return (prevState, action) => {
        console.group(action.type);
        console.log("prev state: ", prevState)
        console.log("action: ", action)
    
        const newState = reducer(prevState, action)
        console.log("new State: ", newState)
        console.groupEnd()

        return newState
    }
    
}

export default logger