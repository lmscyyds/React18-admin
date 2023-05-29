import ArrStates from "./index"


const reducer = (state = {...ArrStates.state,},action:{type:string,val:number})=>{
    const newState = JSON.parse(JSON.stringify(state))

    // switch (action.type) {
    //     case ArrStates.sarrpush:
    //         ArrStates.actions[ArrStates.sarrpush](newState,action)
    //         break;
    //     default:
    //         break;
    // }

    for (const key in ArrStates.actionNames) {
        if(action.type===key){
            ArrStates.actions[ArrStates.actionNames[key]](newState,action)
            break
        }
    }

    return newState
}

export default reducer