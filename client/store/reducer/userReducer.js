import {CREATE_USER, GET_USER, GET_JWT} from "../actions/types"


let initialState={
    jwtToken:{},
    user:{}
}

const userReducer= (state= initialState, {type, payload})=>{
    
    console.log("in reducer user")
    switch(type){

        case CREATE_USER:
            console.log("in reducer create user", payload)
            return {...state, user:payload};
        

        case GET_USER:
            console.log("in reducer get user", payload)
            return {...state,User:payload};
        
        case GET_JWT:
            console.log("in reducer get jwt", payload)
            return {...state, jwtToken:{payload}}





        default: return state;
    }
}


export default userReducer;    