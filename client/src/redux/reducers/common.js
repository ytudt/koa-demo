/**
 * Created by Daguang Li on 12/1/2017.
 */

let initState = {
    langKey: 'test'
};
export default function updateLanguage(state=initState, action) {
    switch (action.type) {
        case "UPDATE_LANGUAGE":
            return {langKey: action.langKey};
        default:
            return state;
    }
}