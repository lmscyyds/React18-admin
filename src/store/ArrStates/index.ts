const store:Record<string,any> = {
    state:{
        sarr:[10,20,30]
    },
    actions:{
        sarrpush(newState:{sarr:number[]},action:{type:string,val:number}){
            console.log(action,newState);
            
            newState.sarr.push(action.val)
        },
    },
    // 名字统一管理
    actionNames:{}
}

const actionNames:Record<string,string> = {}

for(const key in store.actions){
    actionNames[key] = key
}
store.actionNames = actionNames


export default store