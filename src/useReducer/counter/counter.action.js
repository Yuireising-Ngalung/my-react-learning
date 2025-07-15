export const initialValue = 0;
export const reducerAction = (state, action) => {
    switch(action.type){
        case 'add': return state += 1
        case 'sub': return state -= 1
        case 'mul': return state *= 2
        case 'div': return state /= 2
        case 'mod': return state %= 2
        case 'reset': return state = 0
        default: return state
    }
    
}