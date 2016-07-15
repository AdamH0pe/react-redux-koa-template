export default (state = { active: false }, action = {}) => {
   switch (action.type) {
       case 'TOGGLE_ACTIVE':
           return {
               ...state,
               active: action.active
           };
       default:
           return state;
    }
}