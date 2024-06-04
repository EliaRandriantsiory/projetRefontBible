const initialState = {
    mizahaBoky: "Genesisy 1 : 12-15",
    isaToko:"",
    currentBoky:"",
    currentToko:"",
    currentAndininy:""
  };
  
  const bokyReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ISATOKO': 
        return {isaToko:`${action.payload}`}
      case 'BOKY':
        // return { ...state, mizahaBoky: `${action.payload}`,currentBoky:action.payload};
        return{...state}
      case 'TOKO':
        
          // return { ...state, mizahaBoky: `${state.mizahaBoky} ${action.payload}`,currentToko:action.payload };
          return{...state}
        
        
      case 'ANDININY':
        // if(state.===""){
        //   return (state)
        // }else{
          // return { ...state, mizahaBoky: `${state.mizahaBoky} : ${action.payload}-`, currentAndininy:action.payload };
          return{...state}
        // }
        
      default:
        return state;
    }
  };
  
  export default bokyReducer;

  // switch (action.type) {
  //   case 'BOKY':
  //     return { ...state, mizahaBoky: `${action.payload}`,currentBoky:action.payload};
  //   case 'TOKO':
  //     return { ...state, mizahaBoky: `${state.mizahaBoky} ${action.payload} : `,currentToko:action.payload };
  //   case 'ANDININY':
  //     return { ...state, mizahaBoky: `${state.mizahaBoky}${action.payload}`, currentAndininy:action.payload };
  //   default:
  //     return state;
  // }