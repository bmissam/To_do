const OutputReducer =(state=[],action)=> {
   if (action.type==='ADD') {
       return state=[...state,action.value]



   }if (action.type==='REMOVE_INPUT') {
    return state.filter(el=>el.id!==action.id)


   }if (action.type==='EDIT') {
      
       let h=state.filter(el=>el.id!==action.value.id)
       return state=[...h,action.value]
    }
    else return state
}


export default OutputReducer