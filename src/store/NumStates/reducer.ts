import NumStates from "./index"


const reducer = (state = {...NumStates.state,},action:{type:string,val:number})=>{
    const newState = JSON.parse(JSON.stringify(state))

    // switch (action.type) {
    //     case NumStates.add1:
    //         NumStates.actions[NumStates.add1](newState)
    //         break;

    //     case NumStates.add2:
    //         NumStates.actions[NumStates.add2](newState,action)      
    //               break
    
    //     default:
    //         break;
    // }
    for (const key in NumStates.actionNames) {
        if(action.type===key){
            NumStates.actions[NumStates.actionNames[key]](newState,action)
            break
        }
    }

    return newState
}

export default reducer