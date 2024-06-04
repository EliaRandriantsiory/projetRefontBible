const initialState = {
    // mizahaBoky: "Genesisy 1 : 12-15",
    mizahaBoky: "",
    isaToko:"",
    isaAndininy:0,
    currentBoky:"",
    currentToko:"",
    currentAndininy:"",
    bokyContent:[]
  };
  
  const bokyReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'BOKYCONTENT': 
        return { ...state, bokyContent:action.payload}
      case 'ISAANDININY': 
        return { ...state, isaAndininy:action.payload}
      case 'ISATOKO': 
        return { ...state, isaToko:`${action.payload}`}
      case 'BOKY':
        return { ...state, mizahaBoky: `${action.payload}`,currentBoky:action.payload};
        // return{...state}
      case 'TOKO':
          return { ...state,currentToko:action.payload, mizahaBoky: `${state.mizahaBoky} ${action.payload} :` };
          // return{...state}
      case 'ANDININY':        
        return { ...state, currentAndininy:action.payload, mizahaBoky: `${state.mizahaBoky} ${action.payload}` };
      case 'ANDININY2':        
        return { ...state, currentAndininy:action.payload, mizahaBoky: `${state.mizahaBoky}-${action.payload}` };
        // if(state.===""){
        //   return (state)
        // }else{
          // return { ...state, mizahaBoky: `${state.mizahaBoky} : ${action.payload}-`, currentAndininy:action.payload };
          // return{...state}
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