export const ACTIONS = {
    REVEALPASSWORD : 'revealPassword',
    SHOWASNSWER: 'showAnswer'
}
export  function reducer(state, actions) {
        switch (actions.type) {
            case ACTIONS.REVEALPASSWORD:
                return {show : !state.show}
         
        
            default:
                return state
 }

    } 


