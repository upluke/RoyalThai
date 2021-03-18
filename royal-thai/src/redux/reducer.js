import {MENU_DATA, categories} from "./states"

export const categoriesReducer=(state=categories, action)=>{
    return state
}

export const dataReducer=(state=MENU_DATA, action)=>{
     
    switch(action.type){
       
        case 'GETITEMSBYCATEGORIES':
            
            return Object.entries(
                MENU_DATA.reduce((datas , data)=>{
                 
                    const {category}=data
                    // console.log("category: ",category)
                    datas[category]=datas[category]
                    ?[...datas[category],data]
                    :[data]
                    console.log("in state: ", datas)
                    return datas
                 
             },{})
             )
        default:
            return null
    }
    // return MENU_DATA
}



