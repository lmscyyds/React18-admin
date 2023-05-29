const store:Record<string,any> = {
    state:{
        num:20
    },
    actions:{
        add1(newState:{num:number}){
            newState.num++   
        },
        add2(newState:{num:number},action:{type:string,val:number}){
            newState.num+=action.val
        }
    },
    asyncActions:{
        asyncAdd1(dispatch: (arg0: { type: string; }) => void){
            setTimeout(() => {
                dispatch({ type: "add1" })
            }, 1000);
        }
    },
    // 名字统一管理
    // add1:"add1",
    // add2:"add2"
    actionNames:{
    }
}

const actionNames:Record<string,string> = {}

for(const key in store.actions){
    actionNames[key] = key
}
store.actionNames = actionNames

export default store